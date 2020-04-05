import React from "react";
import Style from "style-it";

import { connect } from "react-redux";

import { setActiveTitle } from "../../redux/actions";

import { getProfileTitlesList } from "../../redux/selectors";
import { getFactorsTitlesList } from "../../redux/selectors";
import { getActiveTitle } from "../../redux/selectors";

class ToastPageNav extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.profile) {
      this.titlesList = this.props.profileTitlesList;
    } else {
      this.titlesList = this.props.factorsTitlesList;
    }

    this.props.setActiveTitle(this.titlesList[0]);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.setActiveTitle(event.target.innerHTML);
  }

  isActive(link) {
    return this.props.activeTitle === link ? "active" : "";
  }

  getTitles() {
    let titlesHTML = this.titlesList.map((title) => {
      return (
        <h3
          className={this.isActive(`${title}`)}
          key={title}
          onClick={this.handleClick}
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

    if (this.props.activeTitle !== this.titlesList[0]) {
      for (let i = 0; i < this.titlesList.length; i++) {
        if (this.props.activeTitle === this.titlesList[i]) {
          if (document.getElementById(`${this.titlesList[i]}`) !== null) {
            let currentHeight =
              document.getElementById(`${this.titlesList[i]}`).offsetHeight /
              pxToRem;

            heightSum = heights.reduce((a, b) => a + b);

            // 0.5rem margin on each h3 + height of previous h3 elements + 1/2 of current
            height.height = `${String(
              heights.length * 0.5 + heightSum + 0.5 * currentHeight
            )}rem`;
          }
        }

        if (document.getElementById(`${this.titlesList[i]}`) !== null) {
          heights.push(
            document.getElementById(`${this.titlesList[i]}`).offsetHeight /
              pxToRem
          );
        }
      }
    }

    return <div className={classes.join(" ")} style={height}></div>;
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
        width: 14rem;
    }

    .hidden {
      visibility: hidden;
    }
    `;

    function getClasses(props) {
      let classes = ["wrapper"];

      if (props.hidden) {
        classes.push("hidden");
      }

      return classes.join(" ");
    }

    return Style.it(
      `${styles}`,
      <div className={getClasses(this.props)}>
        {this.getBar()}
        {this.getTitles()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTitle: getActiveTitle(state),
  profileTitlesList: getProfileTitlesList(state),
  factorsTitlesList: getFactorsTitlesList(state),
});

export default connect(mapStateToProps, { setActiveTitle })(ToastPageNav);
