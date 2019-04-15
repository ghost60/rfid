import {
  message
} from "antd";
import request from '../util/request'

const model = {
  state: {
    barData: {
      datetime: [],
      dataup: [],
      datadown: []
    },
    lineData: {
      datetime: [],
      data: []
    },
    status: {
      local: '',
      link: '',
      signal: ''
    }
  },
  /** reducers **/
  reducers: {
    // reducer - 更新用户信息
    upadteTableData(state, payload) {
      // 执行这里就会更新state中的数据
      return { ...state,
        tableData: payload
      };
    },
    upadteBarData(state, payload) {
      return { ...state,
        barData: payload
      };
    },
    upadteLineData(state, payload) {
      return { ...state,
        lineData: payload
      };
    },
    upadteStatus(state, payload) {
      return { ...state,
        status: payload
      };
    }
  },
  /** actions **/
  actions: {
    async getTableData(params = {}) {
      // const data = tdata;
      try {
        let datetime = params;
        // const data = await request(`http://result.eolinker.com/axdDfrd9dfe1cfb7c86511c1b4504c85e9565ca52b2c719?uri=getRecordData&datetime=${datetime}`)
        const data = await request(`http://localhost:8888?uri=getRecordData&datetime=${datetime}`)
        this.upadteTableData(data);
        return data;
      } catch (err) {
        message.error(err);
      }
    },
    async getBarData(params = {}) {
      // const data = bdata;
      try {
        let datetime = params;
        // const data = await request(`http://result.eolinker.com/axdDfrd9dfe1cfb7c86511c1b4504c85e9565ca52b2c719?uri=get24HourDirectionData&datetime=${datetime}`)
        const data = await request(`http://localhost:8888?uri=get24HourDirectionData&datetime=${datetime}`)
        this.upadteBarData(data);
        return data;
      } catch (err) {
        message.error(err);
      }
    },
    async getLineData(params = {}) {
      // const data = ldata;
      try {
        let datetime = params;
        // const data = await request(`http://result.eolinker.com/axdDfrd9dfe1cfb7c86511c1b4504c85e9565ca52b2c719?uri=get24HourAmountData&datetime=${datetime}`)
        const data = await request(`http://localhost:8888?uri=get24HourAmountData&datetime=${datetime}`)
        this.upadteLineData(data);
        return data;
      } catch (err) {
        message.error(err);
      }
    },
    async getStatus(params = {}) {
      const data = status;
      this.upadteStatus(data);
      return data;
    }
  }
};

const tdata = [{
  key: '1',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}, {
  key: '2',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}, {
  key: '3',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}, {
  key: '4',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}, {
  key: '5',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}, {
  key: '6',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}, {
  key: '7',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}, {
  key: '8',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}, {
  key: '9',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}, {
  key: '10',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}, {
  key: '11',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}, {
  key: '12',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}, {
  key: '13',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
}];

const ldata = {
  datetime: ['1', '2', '3', '4', '5', '6', '7'],
  data: [120, 200, 150, 80, 70, 110, 130]

}

const bdata = {
  datetime: ['1', '2', '3', '4', '5', '6', '7'],
  dataup: [120, 200, 150, 80, 70, 110, 130],
  datadown: [110, 210, 130, 50, 60, 100, 110],
}

const status = {
  local: '鱼道口',
  link: '已连接',
  signal: '信号'
}

export default model;