import React from "react";
import Style from "style-it";

import PageTemplate from "../page-template";

class Profile extends React.Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <PageTemplate user="client" page="profile"></PageTemplate>
      </React.Fragment>
    );
  }
}

export default Profile;
