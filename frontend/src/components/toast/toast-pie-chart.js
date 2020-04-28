import React from "react";
import Style from "style-it";

import { PieChart, Pie } from "recharts";
import ToastToggle from "./toast-toggle";

import { numWithCommas } from "../../utils/plan-utils";

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
            margin: 0 3rem 3rem 3rem;
            border-radius: 0.5rem;
        }
    
        .top-right {
            align-self: flex-end;
            padding-bottom: 4rem;
            display: flex;
            align-items: flex-end;
        }
 
      
        .subheader {
            margin-top: 0.5rem;
            margin-left: 0.25rem;
        }
        
        .recharts-bar-rectangle .recharts-rectangle {
            filter: url(#shadow);
        }
    
        .recharts-cartesian-axis-line {
            stroke-linecap: round;
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
            <div className="top-right">
              <h3>{this.props.header}</h3>
              <p className="subheader">
                / ${numWithCommas(this.props.subheader)}
              </p>
            </div>
          </div>

          <PieChart width={400} height={400}>
            <Pie
              data={this.props.data}
              cx={200}
              cy={200}
              outerRadius={150}
              label={this.getLabel}
            />
          </PieChart>
        </div>

        <p className="caption">{this.props.caption}</p>
      </div>
    );
  }
}

export default ToastPieChart;
