import React from "react";
import ReactEcharts from "echarts-for-react";
const PropTypes = require("prop-types");

export default class Charts extends React.Component {
  static propTypes = {
    data: PropTypes.object
  };
  constructor(props) {
    super(props);
  }
  getOption() {
    let { data } = this.props;
    let datetime=data.map((i,index)=>index)
    let option = {
      xAxis: {
        type: "category",
        data: datetime
      },
      yAxis: {
        type: "value"
      },
      grid: {
        top: "8%",
        left: "3%",
        right: "4%",
        bottom: "5%",
        containLabel: true
      },
      tooltip: {
        trigger: "axis"
      },
      series: [
        {
          data: data,
          type: "line",
          itemStyle: {
            color: "#66bb6a"
          }
        }
      ]
    };
    return option;
  }

  render() {
    return (
      <ReactEcharts option={this.getOption()} style={{ height: "165px" }} />
    );
  }
}
