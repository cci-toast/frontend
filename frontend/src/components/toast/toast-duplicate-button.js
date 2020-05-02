import React from "react";
import Center from "react-center";
import ToastButton from "./toast-button";

class ToastDuplicateButton extends React.Component {
  constructor(props) {
    super(props);
    console.log("value:", this.props.value);
    this.duplicateInput = this.duplicateInput.bind(this);
  }

  duplicateInput(event) {
    event.preventDefault();
    if (this.props.maxItems && this.props.maxItems <= this.props.value.length)
      return;
    if (this.props.onDuplicate) this.props.onDuplicate(this.props.fields);
  }

  render() {
    const updateChildrenWithProps = (idx, d) => {
      return React.Children.map(this.props.children, (child, i) => {
        return React.cloneElement(child, {
          key: i,
          value: d[child.props.name],
          onChange: (e) => {
            const { name, value } = e.target;
            if (this.props.onChange) this.props.onChange(idx, name, value);
          },
        });
      });
    };

    return (
      <div>
        {(this.props.value || []).map((data, idx) => (
          <div key={idx}>{updateChildrenWithProps(idx, data)}</div>
        ))}

        <Center>
          <ToastButton
            handleClick={this.duplicateInput}
            tertiary
            label={this.props.label}
          />
        </Center>
      </div>
    );
  }
}

export default ToastDuplicateButton;
