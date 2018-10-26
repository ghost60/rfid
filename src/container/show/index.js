import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from "../../store";
import css from './index.less';
import Mtable from '../../component/table'
import Barcharts from '../../component/charts/bar'
import Linecharts from '../../component/charts/line'
import Card from "../../component/card"
import { Row, Col, Switch } from 'antd';

/** 组件 **/
@connect(
  state => ({
    tdata: state.rfid.tableData,
    ldata: state.rfid.lineData,
    bdata: state.rfid.barData,
    status: state.rfid.status,
  }),
  model => ({
    actions: {
      getTableData: model.rfid.getTableData,
      getLineData: model.rfid.getLineData,
      getBarData: model.rfid.getBarData,
      getStatus: model.rfid.getStatus,
    },
  }),
)

export default class ShowData extends React.Component {
  static propTypes = {
    tdata: PropTypes.array,
    ldata: PropTypes.object,
    bdata: PropTypes.object,
    status: PropTypes.object,
    actions: PropTypes.object
  };
  constructor(props) {
    super(props)
    this.state = {
      tdata: [],
      ldata: {},
      bdata: {},
      status: {},
    }
  }
  onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }
  /**
   * react生命周期 - props改变时触发
   * @param nextProps 下一轮最新的props对象
   * @param prevState 当前的state对象
   * @returns {object} 返回一个对象或null，如果返回对象将自动覆盖this.state中对应的值
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    debugger
    //  if (nextProps.tdata !== prevState.tdata) {
    //   return {
    //     tdata: nextProps.tdata,
    //   };
    // }
    // return null;
    return {
      tdata: nextProps.tdata,
      ldata: nextProps.ldata,
      bdata: nextProps.bdata,
      status: nextProps.status,
    }
  }
  /** react生命周期
   * 在下一轮render即将开始时触发，比componentWillUpdate后执行
   * 即合并了所有的this.setState操作，最后真正要开始render时触发
   * 不应该在这里调用this.setState，会进入死循环
   * @param prevProps 当前的this.props对象
   * @param prevState 当前的this.state对象
   * @returns {any} 返回值将作为componentDidUpdate的第3个参数传入
   * **/
  getSnapshotBeforeUpdate(prevProps, prevState) {
    debugger
    return null;
  }

  /**
   * react生命周期 - 每次组件的props参数或state参数改变引起重新render完成后，触发1次
   * @param prevProps render完成后当前的this.props对象
   * @param prevState render完成后当前的this.state对象
   */
  componentDidUpdate(prevProps, prevState) { }

  /**
   * react生命周期 - 每次当前组件下的子组件中有任何报错时，触发1次
   * @param error 报的是什么错
   * @param info 错误的触发记录，会显示代码哪一行报的错
   */
  componentDidCatch(error, info) { }

  /**
   * react生命周期 - 组件即将被卸载时触发
   * **/
  componentWillUnmount() { }

  componentDidMount() {
    // this.props.actions.getTableData().then(res => {
    //   debugger
    // });
    this.props.actions.getTableData();
    this.props.actions.getLineData();
    this.props.actions.getBarData();
    this.props.actions.getStatus();
  }
  /**
   * react生命周期 - 是否执行下一次render
   * 当有props或state改变时，可手动决定是否更新
   * @param nextProps 下一轮最新的props对象
   * @param nextState 下一轮最新的state对象
   * @returns {boolean} 返回true表示更新，返回false表示跳过本次render
   */
  shoudComponentUpdate(nextProps, nextState) {
    debugger
    return false;
  }
  render() {
    return (
      <div className={css.androidSize}>
        <div className={css.header}>
          <div className={css.headerTitle}>过鱼监测RFID无线射频识别系统</div>
          <Switch className={css.mSwitch} checkedChildren="开" unCheckedChildren="关" defaultChecked onChange={this.onChange} />
        </div>
        <Row>
          <Col span={14}>
            <Card>
              <Mtable data={this.state.tdata} />
            </Card>
          </Col>
          <Col span={10}>
            <Row>
              <Col>
                <Card title={"过鱼数量"}>
                  <Linecharts data={this.state.ldata} />
                </Card>
              </Col>
              <Col>
                <Card title={"上下游分布"}>
                  <Barcharts data={this.state.bdata}/>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <div>
          <span className={css.footList}>
            <span>位置</span>
            <span className={css.footShow}>{this.state.status.local}</span>
          </span>
          <span className={css.footList}>
            <span>状态</span>
            <span className={css.footShow}>{this.state.status.link}</span>
          </span>
          <span className={css.footList}>
            <span>信号</span>
            <span className={css.footShow}>{this.state.status.signal}</span>
          </span>
        </div>
      </div>
    )
  }
}