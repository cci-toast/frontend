import React from "react";
import Style from "style-it";

import { connect } from "react-redux";

import { setStep } from "../../redux/actions";

import { getCurrentStep } from "../../redux/selectors";

class ToastPageNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.props.enabled === undefined || this.props.enabled) {
      this.props.setStep(parseInt(event.target.getAttribute("name")));
    } else {
      window.alert(
        "Please fill out all required fields with an asterisk (*) beside it before continuing with the form."
      );
    }
  }

  isActive(title) {
    return this.props.currentStep === this.props.titlesList.indexOf(title)
      ? "active"
      : "";
  }

  getTitles() {
    let titlesHTML = this.props.titlesList.map((title) => {
      return (
        <h3
          className={this.isActive(`${title}`)}
          key={title}
          onClick={this.handleClick}
          name={this.props.titlesList.indexOf(title)}
          title={title}
          id={title}
        >
          {title}
        </h3>
      );
    });

    return <div className="titles">{titlesHTML}</div>;
  }

  // height matches middle of active h3
  getBar() {
    let classes = ["bar"];
    let heights = [];
    let heightSum = 0;
    const pxToRem = 16;

    const height = {
      height: "1rem",
    };

    if (this.props.currentStep !== 0) {
      for (let i = 0; i < this.props.titlesList.length; i++) {
        if (this.props.currentStep === i) {
          if (document.getElementById(this.props.titlesList[i]) !== null) {
            let currentHeight =
              document.getElementById(this.props.titlesList[i]).offsetHeight /
              pxToRem;

            heightSum = heights.reduce((a, b) => a + b);

            // 0.5rem margin on each h3 + height of previous h3 elements + 1/2 of current
            height.height = `${String(
              heights.length * 0.5 + heightSum + 0.5 * currentHeight
            )}rem`;
          }
        }

        if (document.getElementById(this.props.titlesList[i]) !== null) {
          heights.push(
            document.getElementById(this.props.titlesList[i]).offsetHeight /
              pxToRem
          );
        }
      }
    }

    return <div className={classes.join(" ")} style={height}></div>;
  }

  getClasses() {
    let classes = ["wrapper"];

    if (this.props.hidden) {
      classes.push("hidden");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    h3 {
      color: var(--toast-neutral-2);
      cursor: pointer;
      transition: color 0.5s;
    }

    .active {
      color: var(--toast-black);
    }

    .wrapper {
        display: flex;
    }

    .bar {
        width: 1rem;
        height: 1rem;
        background: var(--toast-gradient-1);
        border-radius: 1rem;
        margin-right: 1rem;
        margin-top: 0.75rem;
        transition: height 0.5s;
    }

    .titles {
        min-width: 14rem;
    }

    .hidden {
      visibility: hidden;
    }
    `;

    return Style.it(
      `${styles}`,

      <div className={this.getClasses()}>
        {this.getBar()}
        {this.getTitles()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentStep: getCurrentStep(state),
});

export default connect(mapStateToProps, { setStep })(ToastPageNav);
