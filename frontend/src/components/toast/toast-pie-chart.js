import React from "react";
import Style from "style-it";

import { PieChart, Pie, Legend } from "recharts";

import { numWithCommas } from "../../utils/plan-utils";
import ToastToggle from "./toast-toggle";

class ToastPieChart extends React.Component {
  constructor(props) {
    super(props);

    this.getLabel = this.getLabel.bind(this);
  }

  getLabel(e) {
    return (
      <text x={e.x - 1.5} y={e.y} textAnchor="middle">
        {`$${numWithCommas(e.value)}`}
      </text>
    );
  }

  render() {
    if (this.props.subheader) {
      var subheader = "/ $" + numWithCommas(this.props.subheader);
    }
    const styles = `
        .hidden {
            visibility: hidden;
            max-height: 0px;
        }
    
        .caption {
            padding: 0 3rem 0 3rem;
        }
    
        .chart {
            display: flex;
      align-items: center;
      flex-direction: column;
      background-color: var(--toast-neutral-5);
      padding: 2rem 5rem 5rem 5rem;
      margin: 1.25rem 3rem 3rem 3rem;
      border-radius: 0.5rem;
      height: 47vh;
      width: 44rem;
        }
    
        .top-right {
            align-self: flex-end;
            padding-bottom: 4rem;
            display: flex;
            align-items: flex-end;
            padding-left:20rem;
        }
    

        .subheader {
            margin-top: 0.5rem;
            margin-left: 0.25rem;
        }
        .recharts-sector{
            stroke:none;
        }

        .recharts-pie-label-line{
            d:none;
        }
        .recharts-legend-wrapper{
            padding-left:20rem;
            
        }
        `;
    return Style.it(
      `${styles}`,
      <div>
        <svg className="hidden">
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              stopColor="var(--toast-purple-2)"
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor="var(--toast-blue-2)"
              stopOpacity="1"
            />
          </linearGradient>
        </svg>

        <div className="chart">
          <div className="row">
            <ToastToggle active="Target" inactive="Current" />

            <div className="top-right">
              <h3>{this.props.header}</h3>
              <p className="subheader">{subheader}</p>
            </div>
          </div>

          <PieChart
            width={document.documentElement.clientWidth * 0.35}
            height={document.documentElement.clientHeight * 0.4}
          >
            <Pie
              dataKey="value"
              data={this.props.data}
              cx={200}
              cy={200}
              outerRadius={150}
              label={this.getLabel}
            />
            <Legend layout="vertical" verticalAlign="bottom" align="right" />
          </PieChart>
        </div>

        <p className="caption">{this.props.caption}</p>
      </div>
    );
  }
}

export default ToastPieChart;
