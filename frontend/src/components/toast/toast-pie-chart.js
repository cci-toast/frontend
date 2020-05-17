import React from "react";
import Style from "style-it";

import { PieChart, Pie, Legend, Surface } from "recharts";

import { numWithCommas } from "../../utils/plan-utils";

class ToastPieChart extends React.Component {
  constructor(props) {
    super(props);

    this.getLabel = this.getLabel.bind(this);
  }

  getLabel(e) {
    let xValue = e.x;
    if (e.x > 180) {
      xValue = e.x + 15;
    } else if (e.x < 180) {
      xValue = e.x - 15;
    }
    return (
      <text x={xValue} y={e.y} textAnchor="middle">
        {`$${numWithCommas(e.value)}`}
      </text>
    );
  }

  renderCusomizedLegend(props) {
    return (
      <div className="customized-legend">
        {props.payload.map((entry) => {
          const { name, fill } = entry.payload;
          return (
            <span className="legend-item" key={`${name}-1`}>
              <Surface width={40} height={25} key={`${name}-2`}>
                <rect
                  x="0"
                  width="40"
                  height="25"
                  rx="5"
                  fill={fill}
                  key={`${name}-3`}
                />
              </Surface>
              <span className="legend-label" key={`${name}-4`}>
                {name}
              </span>
            </span>
          );
        })}
      </div>
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
            padding: 0 1rem 0 1rem;
        }
    
        .chart {
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--toast-neutral-5);
            padding: 2rem 5rem 5rem 2rem;
            margin: 1.25rem 1rem 2rem 1rem;
            border-radius: 0.5rem;
            height: 47vh;
            width: 44rem;
        }
    
        .top-right {
            align-self: flex-end;
            display: flex;
            align-items: flex-end;
            padding-left: 20rem;
        }

        .subheader {
            margin-top: 0.5rem;
            margin-left: 0.25rem;
        }

        .recharts-sector{
            stroke: none;
            filter: url(#shadow);
        }

        .recharts-pie-label-line{
            d: none;
        }

        .customized-legend {
          display: flex;
          flex-direction: column;
        }

        .legend-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          width: 16rem;
        }

        .legend-label {
          margin-left: 0.5rem;
        }

        .row {
          width: 100%;
          padding-bottom: 1rem;
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
            <p className="subheader">{subheader}</p>
          </div>

          <PieChart
            width={document.documentElement.clientWidth * 0.4}
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
            <Legend
              layout="vertical"
              verticalAlign="bottom"
              align="right"
              content={this.renderCusomizedLegend}
            />
          </PieChart>
        </div>

        <p className="caption">{this.props.caption}</p>
      </div>
    );
  }
}

export default ToastPieChart;
