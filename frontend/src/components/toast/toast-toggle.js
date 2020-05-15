import React from "react";
import Style from "style-it";

class ToastToggle extends React.Component {
  constructor(props) {
    super(props);

    this.slider = React.createRef();
    this.sliderLabel = React.createRef();

    this.onSlide = this.onSlide.bind(this);

    if (this.props.actionItems) {
      this.width = "8rem";
      this.transform = "5.25rem";
    } else {
      this.width = "10rem";
      this.transform = "5.875rem";
    }

    this.props.activeLabel(this.props.active);
  }

  onSlide() {
    if (this.slider.current.classList.contains("slider-after")) {
      this.slider.current.classList.remove("slider-after");
      this.sliderLabel.current.innerHTML = this.props.active;
      this.props.activeLabel(this.sliderLabel.current.innerHTML);
    } else {
      this.slider.current.classList.add("slider-after");
      this.sliderLabel.current.innerHTML = this.props.inactive;
      this.props.activeLabel(this.sliderLabel.current.innerHTML);
    }
  }

  render() {
    const styles = `
      .slider {
        position: absolute;
        background-color: var(--toast-white);
        border-radius: 10rem;
        color: var(--toast-black);
        padding: calc(0.75rem - 0.5px) 2rem;
        margin-left: -1.5rem;
        border: 1px solid var(--toast-neutral-4);
        cursor: pointer;
        -webkit-transition: 0.6s;
        transition: 0.6s;
      }

      .slider-after {
        transform: translateX(${this.transform});
      }

      .wrapper {
          height: 1.5rem;
          width: ${this.width};
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1.5rem;
          border-radius: 10rem;
          background-color: var(--toast-neutral-4);
          box-shadow: inset 0 0 10px var(--toast-neutral-3);
          color: var(--toast-neutral-1);
          font-size: 0.75rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
      }

      label {
        cursor: pointer;
      }
    `;

    return Style.it(
      `${styles}`,
      <div className="wrapper" onClick={this.onSlide}>
        <div ref={this.slider} className="slider">
          <label ref={this.sliderLabel} title={this.props.active}>
            {this.props.active}
          </label>
        </div>
        <label>{this.props.active}</label>
        <label title={this.props.inactive}>{this.props.inactive}</label>
      </div>
    );
  }
}
export default ToastToggle;
