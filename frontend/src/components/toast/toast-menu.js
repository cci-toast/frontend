import React from "react";
import Style from "style-it";

import ToastIcon from "./toast-icon";

import { connect } from "react-redux";
import { setProfileValue } from "../../redux/actions";

class ToastMenu extends React.Component {
  constructor(props) {
    super(props);
    this.onTrigger = this.onTrigger.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.setClient = this.setClient.bind(this);
    this.setClose = this.setClose.bind(this);

    this.close = true;
  }

  onTrigger(e) {
    e.preventDefault();
    e.currentTarget.previousSibling.classList.remove("hidden");
    e.currentTarget.previousSibling.children[0].focus();
  }

  onBlur(e) {
    if (this.close) {
      this.closeMenu();
    }
  }

  setClose() {
    this.close = false;
  }

  setClient() {
    this.props.setProfileValue("firstName", this.props.firstName);
    this.props.setProfileValue("middleName", this.props.middleName);
    this.props.setProfileValue("lastName", this.props.lastName);
  }

  createMenu() {
    var numbers = [...Array(this.props.labels.length).keys()];
    return (
      <div className="card" tabIndex="-1" onBlur={this.onBlur}>
        {numbers.map((num) => (
          <a
            href={`/${this.props.links[num]}`}
            key={`${this.props.links[num]}`}
            onMouseDown={this.setClose}
            onClick={this.setClient}
          >
            <div className="list-item">
              <div className="icon-text">
                <ToastIcon
                  name={this.props.iconNames[num]}
                  width={24}
                  height={24}
                  stroke="var(--toast-neutral-1)"
                  strokeWidth={2}
                />
                <label>{this.props.labels[num]}</label>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }

  closeMenu() {
    let menus = document.getElementsByClassName("menu");
    for (let i = 0; i < menus.length; i++) {
      menus[i].classList.add("hidden");
    }
  }

  render() {
    const styles = `
    .card {
        position: inherit;
        background-color: var(--toast-white);
        border-radius: 1rem;
        box-shadow: 0px 10px 20px 5px var(--toast-neutral-3-transparent-2);
        margin: 9.5rem -2rem 2rem 0;
        width: 10rem;
        max-height: 10rem;
        padding: 1rem 0;
        outline: none;
    }

    .hidden {
        visibility: hidden;
    }

    .menu {
        position: relative;
        z-index: 2;
    }

    .trigger-menu {
        display: flex;
        align-items: center;
    }

    .trigger {
        z-index: 1;
    }

    .list-item:hover {
        cursor: pointer;
        background-color: var(--toast-blue-2-transparent);
    }

    .icon-text {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
    }

    label {
        margin-left: 0.5rem;
        cursor: pointer;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="trigger-menu">
        <div className="menu hidden">{this.createMenu()}</div>
        <div className="trigger" onClick={this.onTrigger}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(null, {
  setProfileValue,
})(ToastMenu);
