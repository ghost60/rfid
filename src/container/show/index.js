import React from "react";
import css from "./index.less";
import Mtable from "../../component/table";
import Barcharts from "../../component/charts/bar";
import Linecharts from "../../component/charts/line";
import Card from "../../component/card";
import { Row, Col, Button, message, Modal, Input } from "antd";
import request from "../../util/request";
import refresh from "../../assets/refresh.png";

const ctx = "http://localhost:8888";

Date.prototype.format = function (format) {
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(), //day
    "h+": this.getHours(), //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
    S: this.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format))
    format = format.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(format))
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return format;
};

export default class ShowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localVisible: false,
      pathVisible: false,
      local: localStorage.getItem('local') || "",
      path: localStorage.getItem('path') || "",
      tTime: new Date().format("yyyy-MM-dd"),
      numTime: new Date().format("yyyy-MM-dd"),
      updownTime: new Date().format("yyyy-MM-dd"),
      tData: [],
      barData: {
        dataup: [],
        datadown: []
      },
      lineData: []
    };
  }
  async sendPath(params = {}) {
    try {
      let path = params;
      const data = await request(`${ctx}/download?path=${path}`);
      if (data) {
        message.success('设置成功');
      } else {
        message.error('设置失败');
      }
    } catch (err) {
      message.error(err);
    }
  }
  async getTableData(params = {}) {
    try {
      let datetime = params;
      const data = await request(`${ctx}/getRecordData?datetime=${datetime}`);
      this.setState({
        tData: data
      });
    } catch (err) {
      message.error(err);
    }
  }
  async getBarData(params = {}) {
    try {
      let datetime = params;
      const data = await request(
        `${ctx}/get24HourDirectionData?datetime=${datetime}`
      );
      this.setState({
        barData: data
      });
    } catch (err) {
      message.error(err);
    }
  }
  async getLineData(params = {}) {
    try {
      let datetime = params;
      const data = await request(
        `${ctx}/get24HourAmountData?datetime=${datetime}`
      );
      this.setState({
        lineData: data
      });
    } catch (err) {
      message.error(err);
    }
  }
  componentDidMount() {
    this.refresh();
    this.cycle = setInterval(() => {
      this.refresh();
    }, 60 * 1000);
  }
  componentWillUnmount() {
    if (this.cycle) clearInterval(this.cycle);
  }
  afterDay(type) {
    switch (type) {
      case "record":
        let tTime = new Date(
          new Date(this.state.tTime).getTime() + 24 * 60 * 60 * 1000
        ).format("yyyy-MM-dd");
        this.setState({
          tTime
        });
        this.getTableData(tTime);
        break;
      case "amount":
        let numTime = new Date(
          new Date(this.state.numTime).getTime() + 24 * 60 * 60 * 1000
        ).format("yyyy-MM-dd");
        this.setState({
          numTime
        });
        this.getLineData(numTime);
        break;
      case "direction":
        let updownTime = new Date(
          new Date(this.state.updownTime).getTime() + 24 * 60 * 60 * 1000
        ).format("yyyy-MM-dd");
        this.setState({
          updownTime
        });
        this.getBarData(updownTime);
        break;
    }
  }
  beforeDay(type) {
    switch (type) {
      case "record":
        let tTime = new Date(
          new Date(this.state.tTime).getTime() - 24 * 60 * 60 * 1000
        ).format("yyyy-MM-dd");
        this.setState({
          tTime
        });
        this.getTableData(tTime);
        break;
      case "amount":
        let numTime = new Date(
          new Date(this.state.numTime).getTime() - 24 * 60 * 60 * 1000
        ).format("yyyy-MM-dd");
        this.setState({
          numTime
        });
        this.getLineData(numTime);
        break;
      case "direction":
        let updownTime = new Date(
          new Date(this.state.updownTime).getTime() - 24 * 60 * 60 * 1000
        ).format("yyyy-MM-dd");
        this.setState({
          updownTime
        });
        this.getBarData(updownTime);
        break;
    }
  }
  refresh = () => {
    this.getTableData(this.state.tTime);
    this.getLineData(this.state.numTime);
    this.getBarData(this.state.updownTime);
  };
  localhandleOk = () => {
    localStorage.setItem("local", this.state.local);
    this.setState({
      localVisible: false
    });
  };
  pathhandleOk = () => {
    localStorage.setItem("path", this.state.path);
    this.sendPath(this.state.path)
    this.setState({
      pathVisible: false
    });
  };
  ChangeLocal = () => {
    this.setState({
      localVisible: true
    });
  };
  ChangePath = () => {
    this.setState({
      pathVisible: true
    });
  };
  localhandleChange = e => {
    this.setState({
      local: e.target.value
    });
  };
  pathhandleChange = e => {
    this.setState({
      path: e.target.value
    });
  };
  localhandleCancel = () => {
    this.setState({
      localVisible: false
    });
  };
  pathhandleCancel = () => {
    this.setState({
      pathVisible: false
    });
  };
  render() {
    const { local, path } = this.state
    const QueryBnt = props => {
      return (
        <div>
          <Button
            style={{
              margin: "0 auto",
              height: "22px"
            }}
            onClick={this.beforeDay.bind(this, props.type)}
          >
            前一天
          </Button>
          <Button
            style={{
              margin: "0 auto",
              height: "22px"
            }}
            onClick={this.afterDay.bind(this, props.type)}
          >
            后一天
          </Button>
        </div>
      );
    };
    return (
      <div className={css.androidSize}>
        <div className={css.header}>
          <div className={css.headerTitle}> 过鱼监测RFID无线射频识别系统 </div>
        </div>
        <Row>
          <Col span={14}>
            <Card title={`过鱼记录-${this.state.tTime}`}>
              <div
                style={{
                  height: "394px"
                }}
              >
                <Mtable data={this.state.tData} />
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "4px",
                  paddingBottom: "6px"
                }}
              >
                <QueryBnt type={"record"} />
              </div>
            </Card>
          </Col>
          <Col span={10}>
            <Row>
              <Col>
                <Card title={`过鱼数量-${this.state.numTime}`}>
                  <Linecharts data={this.state.lineData} />
                  <div
                    style={{
                      textAlign: "center",
                      paddingBottom: "6px"
                    }}
                  >
                    <QueryBnt type={"amount"} />
                  </div>
                </Card>
              </Col>
              <Col>
                <Card title={`上下游分布-${this.state.updownTime}`}>
                  <Barcharts data={this.state.barData} />
                  <div
                    style={{
                      textAlign: "center",
                      paddingBottom: "6px"
                    }}
                  >
                    <QueryBnt type={"direction"} />
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <div>
          <span className={css.footList} onClick={this.ChangeLocal}>
            <span> 位置 </span>
            <span className={css.footShow}>
              {localStorage.getItem("location")}
            </span>
          </span>
          <span className={css.footList}>
            <span> 刷新 </span>
            <img
              className={css.refresh}
              src={refresh}
              onClick={this.refresh.bind(this)}
            />
          </span>
          <span className={css.footList} onClick={this.ChangePath}>
            <span sytle={{}}> 设置保存路径 </span>
          </span>
        </div>
        <Modal
          title="设置位置"
          visible={this.state.localVisible}
          onOk={this.localhandleOk}
          onCancel={this.localhandleCancel}
        >
          <Input onChange={this.localhandleChange} value={local} placeholder="输入位置" />
        </Modal>
        <Modal
          title="设置保存路径"
          visible={this.state.pathVisible}
          onOk={this.pathhandleOk}
          onCancel={this.pathhandleCancel}
        >
          <Input onChange={this.pathhandleChange} value={path} placeholder="输入路径" />
        </Modal>
      </div>
    );
  }
}
