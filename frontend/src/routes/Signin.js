import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Center from "react-center";
import { Link } from "react-router-dom";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./logo.png";

import PrimaryButton from "./Components/PrimaryButton";

class Signin extends Component {
  render() {
    const centerContent = {
      justifyContent: "center",
      alignItems: "center"
    };

    const logo = {
      width: "30%",
      paddingTop: "2.5rem"
    };

    const bluePurpleGradient = {
      background: "var(--toast-gradient-2)",
      borderRadius: "0rem 5rem 0rem 0rem",
      marginLeft: "-0.9375rem",
      marginTop: "1.25rem",
      height: "calc(100vh - 1.25rem)",
      paddingTop: "5rem"
    };

    const signinSpacer = {
      paddingTop: "5rem"
    };

    const toastHeader = {
      color: "var(--toast-white)",
      fontFamily: "Libra Baskerville"
    };

    const toastTagLine = {
      color: "var(--toast-white)",
      fontStyle: "italic"
    };

    return (
      <div>
        <Row>
          <Col md="6" style={bluePurpleGradient}>
            <div style={centerContent}>
              <Center>
                <img src={Logo} rel="icon" alt="" style={logo} />
              </Center>

              <Center>
                <h1 style={toastHeader}>toast</h1>
              </Center>
              <Center>
                <p style={toastTagLine}>Financial planning made easier</p>
              </Center>
            </div>
          </Col>

          <Col md="6" style={signinSpacer}>
            <form onSubmit={this.submitHandler}>
              <Col className="mb-3">
                <h2>Sign In</h2>

                <br />
                <label>Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Type in your email"
                    required
                  />
                </div>
              </Col>
              <br />
              <Col mb="3">
                <label> Password</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Type in your password"
                    required
                  />
                </div>
              </Col>
              <br />
              <Center>
                <Link to="/clientprofile">
                  <PrimaryButton round label="Sign In" />
                </Link>
              </Center>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Signin;
