import React from "react";
import Style from "style-it";

import ToastInput from "./toast-input";

import { connect } from "react-redux";
import { setSearchTerm } from "../../redux/actions";
import { getSearchTerm } from "../../redux/selectors";

class ToastSearch extends React.Component {
  constructor(props) {
    super(props);

    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.props.setSearchTerm("");
  }

  setSearchTerm(e) {
    this.props.setSearchTerm(e.target.value);
  }
  render() {
    const styles = `
    .wrapper {
        display: flex;
        justify-content: flex-end;
        margin: 0.5rem 3rem 0.5rem 0;
        width: 20rem;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="wrapper">
        <ToastInput
          type="text"
          placeholder="Search for a client"
          defaultValue={this.props.searchTerm}
          onChange={this.setSearchTerm}
          iconName="search"
          search
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchTerm: getSearchTerm(state),
});

export default connect(mapStateToProps, {
  setSearchTerm,
})(ToastSearch);
