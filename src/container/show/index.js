import React from "react";
import css from './index.less';
import Mtable from '../../component/table'
import Barcharts from '../../component/charts/bar'
import Linecharts from '../../component/charts/line'
import Card from "../../component/card"
import { Row, Col } from 'antd';


export default class ShowData extends React.Component {
  render() {
    return (
      <div className={css.androidSize}>
        <div className={css.header}>
          <div className={css.headerTitle}>过鱼监测RFID无线射频识别系统</div>
        </div>
        <Row>
          <Col span={14}>
            <Card>
              <Mtable />
            </Card>
          </Col>
          <Col span={10}>
            <Row>
              <Col>
                <Card title={"过鱼数量"}>
                  <Linecharts />
                </Card>
              </Col>
              <Col>
                <Card title={"上下游分布"}>
                  <Barcharts />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <div>
          <span className={css.footList}>
            <span>位置</span>
            <span className={css.footShow}>鱼道口</span>
          </span>
          <span className={css.footList}>
            <span>状态</span>
            <span className={css.footShow}>已连接</span>
          </span>
          <span className={css.footList}>
            <span>信号</span>
            <span className={css.footShow}>信号</span>
          </span>
        </div>
      </div>
    )
  }
}