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

    if (this.props.readOnly) {
      for (let i = 0; i < this.props.maxItems; i++) {
        this.duplicateInput();
      }
    }
  }

  deleteSelection(i) {
    if (
      window.confirm("Are you sure you want to delete this item?") &&
      this.props.onDelete &&
      !this.props.readOnly
    ) {
      this.props.onDelete(i);
    }
  }

  getClasses() {
    let classes = [];
    if (
      (this.props.maxItems && this.props.maxItems <= this.props.value.length) ||
      this.props.readOnly
    ) {
      classes.push("hide-btn");
    } else {
      classes.push("button");
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

  getDeleteButtonClasses() {
    let classes = ["wrapper"];

    if (this.props.readOnly) {
      classes.push("hide-btn");
    }

    return classes.join(" ");
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
      display: flex;
      justify-content: space-between;
    }
    `;

    return Style.it(
      `${styles}`,
      <div>
        {(this.props.value || []).map((data, index) => (
          <div key={index}>
            <div className={this.getDeleteButtonClasses()}>
              <h4>
                {index !== 0
                  ? this.props.label.substr(3) + " " + (index + 1)
                  : this.props.label.substr(3)}
              </h4>
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
