import React from 'react'
import ReactEcharts from 'echarts-for-react'

export default class Charts extends React.Component {
  constructor(props) {
    super(props)
  }
  getOption() {
    let option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          itemStyle: {
            color: '#66bb6a'
          },
        },
        {
          data: [120, 200, 150, 80, 70, 110, 130],
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
      <ReactEcharts option={this.getOption()} style={{ height: "238px" }} />
    )
  }
}
