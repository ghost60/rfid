import React from "react";
import { Table } from "antd";
const PropTypes = require('prop-types');

const columns = [{
  title: '时间',
  dataIndex: 'time',
  key: 'time',
  align: 'center',
  width: 150,
}, {
  title: '编号',
  dataIndex: 'code',
  key: 'code',
  align: 'center',
  width: 200,
}, {
  title: '游向',
  dataIndex: 'updown',
  key: 'updown',
  align: 'center',
  width: 100,
}, {
  title: '速度',
  dataIndex: 'speed',
  key: 'speed',
  align: 'center',
  width: 100,
}];

const Mtable = (props) => {
  return (
      <Table columns={columns} dataSource={props.data} 
        size="small" 
        scroll={{ y: 316 }}
        pagination={{ 
          simple: true,
          pageSize: 30,
        }}
       />
  );
};

Mtable.propTypes={data: PropTypes.array}
export default Mtable;