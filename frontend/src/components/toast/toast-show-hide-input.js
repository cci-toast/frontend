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

    let checkEmpty = React.Children.map(this.props.children, (child, i) => {
      return !!child.props.value;
    });

    for (var x of checkEmpty) if (x) result = false;

    return result;
  }

  showInput() {
    if (this.content.current.classList.contains("hide")) {
      this.content.current.classList.remove("hide");
      this.content.current.classList.add("show");
      this.button.current.classList.remove("show");
      this.button.current.classList.add("hide");
    }
  }

  render() {
    const styles = `
    .hide{
      display:none;
    }
    .show{
      display:block;
    }
    `;

    return Style.it(
      `${styles}`,
      <div>
        <div ref={this.content} className={this.isEmpty() ? "hide" : "show"}>
          {this.props.children}
        </div>

        <div ref={this.button} className={this.isEmpty() ? "show" : "hide"}>
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
