import React from 'react'
import ReactEcharts from 'echarts-for-react'
const PropTypes = require('prop-types')

export default class Charts extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }; 
  constructor(props) {
    super(props)
  }
  getOption() {
    let {data} =this.props;
    let datetime=data.dataup.map((i,index)=>index)
    let option = {
      xAxis: {
        type: 'category',
        data: datetime
      },
      yAxis: {
        type: 'value'
      },
      grid: {
        top: "12%",
        left: "3%",
        right: "4%",
        bottom: "5%",
        containLabel: true
      },
      legend: {
        data: ['上游', '下游']
      },
      tooltip: {
        trigger: 'axis',
      },
      series: [
        {
          name: '上游',
          data: data.dataup,
          type: 'bar',
          itemStyle: {
            color: '#66bb6a'
          },
        },
        {
          name: '下游',
          data: data.datadown,
          type: 'bar',
          itemStyle: {
            color: '#0099ff'
          },
        }
      ]
    }
    return option
  }

  render() {
    return (
      <ReactEcharts option={this.getOption()} style={{ height: "165px" }} />
    )
  }
}
