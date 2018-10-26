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
    let option = {
      xAxis: {
        type: 'category',
        data: data.datax
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'axis',
      },
      series: [{
        data: data.datay,
        type: 'line',
        itemStyle: {
          color: '#66bb6a'
        },
      }]
    }
    return option
  }

  render() {
    return (
      <ReactEcharts option={this.getOption()}  style={{height:"238px"}}/>
    )
  } 
}
