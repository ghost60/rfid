/**
 * 基本Model app.js, 在src/store/index.js中被挂载到store上，命名为app
 * 可用于存放通用信息，比如用户数据、角色、权限、省市区等通用数据
 * **/
const model = {
  /** store数据 **/
  state: {
    tableData: [],
    barData: {
      datax: [],
      datayup: [],
      dataydown: []
    },
    lineData: {
      datax: [],
      datay: []
    },
    status: {
      local:'',
      link:'',
      signal:''
    }
  },
  /** reducers **/
  reducers: {
    // reducer - 更新用户信息
    upadteTableData(state, payload) {
      // 执行这里就会更新state中的数据
      return { ...state, tableData: payload };
    },
    upadteBarData(state, payload) {
      return { ...state, barData: payload };
    },
    upadteLineData(state, payload) {
      return { ...state, lineData: payload };
    },
    upadteStatus(state, payload) {
      return { ...state, status: payload };
    }
  },
  /** actions **/
  actions: {
    async getTableData(params = {}) {
      const data = tdata;
      this.upadteTableData(data);
      return data;
    },
    async getBarData(params = {}) {
      const data = bdata;
      this.upadteBarData(data);
      return data;
    },
    async getLineData(params = {}) {
      const data = ldata;
      this.upadteLineData(data);
      return data;
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
  align: 'center'
}, {
  key: '2',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
  align: 'center'
}, {
  key: '3',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
  align: 'center'
}, {
  key: '4',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
  align: 'center'
}, {
  key: '5',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
  align: 'center'
}, {
  key: '6',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
  align: 'center'
}, {
  key: '7',
  time: '201810101244',
  code: '00001',
  updown: '上游',
  speed: '2m/s',
  align: 'center'
}];

const ldata = {
  datax: ['1', '2', '3', '4', '5', '6', '7'],
  datay: [120, 200, 150, 80, 70, 110, 130]

}

const bdata = {
  datax: ['1', '2', '3', '4', '5', '6', '7'],
  datayup: [120, 200, 150, 80, 70, 110, 130],
  dataydown: [110, 210, 130, 50, 60, 100, 110],
}

const status = {
  local:'鱼道口',
  link:'已连接',
  signal:'信号'
}

export default model;
