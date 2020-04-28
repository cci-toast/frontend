import React from "react";
import Style from "style-it";

class ToastToggle extends React.Component {
  constructor(props) {
    super(props);

    this.slider = React.createRef();
    this.sliderLabel = React.createRef();

    this.onSlide = this.onSlide.bind(this);
  }

  onSlide() {
    if (this.slider.current.classList.contains("slider-after")) {
      this.slider.current.classList.remove("slider-after");
      this.sliderLabel.current.innerHTML = this.props.active;
    } else {
      this.slider.current.classList.add("slider-after");
      this.sliderLabel.current.innerHTML = this.props.inactive;
    }
  }

  isActive() {
    //return this.sliderLabel.current.innerHTML === this.props.active;
    return true;
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
        transform: translateX(5.875rem);
      }

      .wrapper {
          height: 1.5rem;
          width: 10rem;
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
          <label ref={this.sliderLabel}>{this.props.active}</label>
        </div>
        <label>{this.props.active}</label>
        <label>{this.props.inactive}</label>
      </div>
    );
  }
}
export default ToastToggle;
