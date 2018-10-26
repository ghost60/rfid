import React from "react";
import { Table } from "antd";
const PropTypes = require('prop-types');

const columns = [{
  title: '时间',
  dataIndex: 'time',
  key: 'time',
  align: 'center'
}, {
  title: '编号',
  dataIndex: 'code',
  key: 'code',
  align: 'center'
}, {
  title: '游向',
  dataIndex: 'updown',
  key: 'updown',
  align: 'center'
}, {
  title: '速度',
  dataIndex: 'speed',
  key: 'speed',
  align: 'center'
}];

const Mtable = (props) => {
  return (
      <Table columns={columns} dataSource={props.data} size="small"  style={{height:"488px"}}/>
  );
};

Mtable.propTypes={data: PropTypes.array}
export default Mtable;