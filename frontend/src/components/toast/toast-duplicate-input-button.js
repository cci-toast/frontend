import React from "react";
import ToastButton from "./toast-button";
import ToastDeleteButton from "./toast-delete-button";
import Style from "style-it";

/* Expects an array and duplicates the "children".  Set maxItems to limit the number of duplicates.  
To pass in value(s) that only need to be shown once refer to toast-show-hide-input. */
class ToastDuplicateInputButton extends React.Component {
  constructor(props) {
    super(props);
    this.duplicateInput = this.duplicateInput.bind(this);
    this.deleteSelection = this.deleteSelection.bind(this);
  }

  deleteSelection(i) {
    if (window.confirm("Are you sure you want to delete this item?")) {
      if (this.props.onDelete) {
        this.props.onDelete(i);
      }
    } else {
      return;
    }
  }

  getClasses() {
    let classes = ["button"];
    if (this.props.maxItems && this.props.maxItems <= this.props.value.length) {
      classes.push("hide-btn");
    }
    return classes.join(" ");
  }

  duplicateInput() {
    if (this.props.maxItems && this.props.maxItems <= this.props.value.length) {
      return;
    }
    if (this.props.onDuplicate) {
      this.props.onDuplicate(this.props.fields);
    }
  }

  render() {
    const updateChildrenWithProps = (index, data) => {
      return React.Children.map(this.props.children, (child, i) =>
        React.cloneElement(child, {
          key: i,
          value: data[child.props.name],
          onChange: (e) => {
            const { name, value } = e.target;

            if (this.props.onChange) {
              this.props.onChange(index, name, value);
            }
          },
        })
      );
    };

    const styles = `
    .hide-btn { 
      display: none;
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

    .wrapper {
      justify-content: flex-end;
      padding-bottom: 2.3rem;
    }
    `;

    return Style.it(
      `${styles}`,
      <div>
        {(this.props.value || []).map((data, index) => (
          <div key={index}>
            <div className="wrapper">
              <ToastDeleteButton
                handleClick={() => {
                  this.deleteSelection(index);
                }}
              />
            </div>
            <div className="inputs">{updateChildrenWithProps(index, data)}</div>
          </div>
        ))}

        <div className={this.getClasses()}>
          <ToastButton
            handleClick={this.duplicateInput}
            tertiary
            label={this.props.label}
          />
        </div>
      </div>
    );
  }
}

export default ToastDuplicateInputButton;
