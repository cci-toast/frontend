import React from "react";
import Center from "react-center";
import ToastButton from "./toast-button";
import Style from "style-it";

class ToastShowHideInput extends React.Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.button = React.createRef();
    this.showInput = this.showInput.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  isEmpty() {
    let result = true;

    let checkEmpty = React.Children.map(
      this.props.children,
      (child) => !!child.props.value
    );

    for (var x of checkEmpty) {
      if (x) {
        result = false;
      }
    }

    return result;
  }

  getContentClasses() {
    let classes = [""];

    if (this.isEmpty()) {
      classes.push("hide");
    } else {
      classes.push("show");
      classes.push("inputs");
    }

    return classes.join(" ");
  }

  getButtonClasses() {
    let classes = [""];

    if (this.isEmpty()) {
      classes.push("show");
    } else {
      classes.push("hide");
    }

    return classes.join(" ");
  }

  showInput() {
    if (this.content.current.classList.contains("hide")) {
      this.content.current.classList.remove("hide");
      this.content.current.classList.add("show");
      this.content.current.classList.add("inputs");
      this.button.current.classList.remove("show");
      this.button.current.classList.add("hide");
    }
  }

  render() {
    const styles = `
    .hide {
      display: none;
    }

    .show {
      display: block;
    }

    .inputs {
      display: flex;
      flex-wrap: wrap;
    }

    .button {
      display: flex;
      justify-content: center;
      margin-left: -1rem;
    }
    `;

    return Style.it(
      `${styles}`,
      <div>
        <div ref={this.content} className={this.getContentClasses()}>
          {this.props.children}
        </div>

        <div ref={this.button} className={this.getButtonClasses()}>
          <Center>
            <ToastButton
              handleClick={this.showInput}
              tertiary
              label={this.props.label}
            />
          </Center>
        </div>
      </div>
    );
  }
}

export default ToastShowHideInput;
