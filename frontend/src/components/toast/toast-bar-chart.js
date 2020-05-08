import React from "react";
import Style from "style-it";

import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

import { numWithCommas } from "../../utils/plan-utils";

class ToastBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.getLabel = this.getLabel.bind(this);
    this.maxValue = Math.max(...this.props.data.map((d) => d.value));
  }

  getLabel(e) {
    return (
      <text
        x={e.x + e.width / 2}
        y={e.y - 15}
        fill="var(--toast-black)"
        textAnchor="middle"
        dominantBaseline="middle"
      >
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
            padding: 0 1rem 0 1rem;
        }
    
        .chart {
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--toast-neutral-5);
            padding: 2rem 5rem 5rem 5rem;
            margin: 0 1rem 2rem 1rem;
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
              stopColor="var(--toast-blue-1)"
              stopOpacity="1"
            />
          </linearGradient>

          <filter id="shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="4" dy="4" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </svg>

        <div className="chart">
          <div className="top-right">
            <h3>{this.props.header}</h3>
            <p className="subheader">
              / ${numWithCommas(this.props.subheader)}
            </p>
          </div>

          <BarChart
            width={document.documentElement.clientWidth * 0.45}
            height={document.documentElement.clientHeight * 0.35}
            data={this.props.data}
          >
            <XAxis
              dataKey="name"
              stroke="var(--toast-black)"
              tickLine={false}
              axisLine={{
                strokeWidth: 5,
                stroke: "var(--toast-neutral-6)",
              }}
            />
            <YAxis
              hide={true}
              domain={[0, this.maxValue + this.maxValue / 8]}
            />

            <Tooltip
              cursor={{ fill: "var(--toast-neutral-4)" }}
              contentStyle={{ borderRadius: "0.5rem" }}
            />
            <Bar
              dataKey="value"
              radius={[5, 5, 5, 5]}
              label={this.getLabel}
            ></Bar>
          </BarChart>
        </div>

        <p className="caption">{this.props.caption}</p>
      </div>
    );
  }
}

export default ToastBarChart;
