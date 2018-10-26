import React from "react";
import { Table } from "antd";

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

const data = [{
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

const Mtable = () => {
  return (
      <Table columns={columns} dataSource={data} size="small"  style={{height:"488px"}}/>
  );
};

export default Mtable;