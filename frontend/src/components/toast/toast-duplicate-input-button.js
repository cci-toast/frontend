import React from "react";
import Center from "react-center";
import ToastButton from "./toast-button";
import Style from "style-it";

/*Expects an array and duplicates the "children".  Set maxItems to limit the number of duplicates.  
To pass in value(s) that only need to be shown once refer to toast-show-hide-input. */
class ToastDuplicateInputButton extends React.Component {
  constructor(props) {
    super(props);
    this.duplicateInput = this.duplicateInput.bind(this);
  }

  getClasses() {
    let classes = "";
    if (this.props.maxItems && this.props.maxItems <= this.props.value.length) {
      classes = "hideBtn";
      return classes;
    }
  }

  duplicateInput() {
    if (this.props.maxItems && this.props.maxItems <= this.props.value.length)
      return;
    if (this.props.onDuplicate) this.props.onDuplicate(this.props.fields);
  }

  render() {
    const updateChildrenWithProps = (index, data) => {
      return React.Children.map(this.props.children, (child, i) =>
        React.cloneElement(child, {
          key: i,
          value: data[child.props.name],
          onChange: (e) => {
            const { name, value } = e.target;
            if (this.props.onChange) this.props.onChange(index, name, value);
          },
        })
      );
    };

    const styles = `
    .hideBtn{
      display:none;
    }
    `;

    return Style.it(
      `${styles}`,
      <div>
        {(this.props.value || []).map((data, index) => (
          <div key={index}>{updateChildrenWithProps(index, data)}</div>
        ))}

        <div className={this.getClasses()}>
          <Center>
            <ToastButton
              handleClick={this.duplicateInput}
              tertiary
              label={this.props.label}
            />
          </Center>
        </div>
      </div>
    );
  }
}

export default ToastDuplicateInputButton;
