import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Center from "react-center";
import { Link } from "react-router-dom";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./logo.png";

import PrimaryButton from "./Components/PrimaryButton";


class Login extends Component {
  render() {
    const leftContent = {
      justifyContent: "center",
      alignItems: "center"
    };

    const logo = {
      width: "30%",
      paddingTop: "2.5rem"
    };

    const bluePurpleGradient = {
      background: "linear-gradient(45deg, #721ebe, #3260b3)",
      borderRadius: "0rem 5rem 0rem 0rem",
      marginLeft: "-0.9375rem",
      marginTop: "1.25rem",
      height: '97vh',
      paddingTop: "5rem"
    };


    const paddingTop = {
      paddingTop: "5rem"
    }


    return (
      <div>
        <Row>
          <Col md="6" style={bluePurpleGradient}>
            <div style={leftContent}>
              <Center>
                <img src={Logo} rel="icon" alt="" style={logo} />
              </Center>

              <Center>
                <h3 className="white-text">toast</h3>
              </Center>
              <Center>
                <h6 className="white-text">Financial planning made easier</h6>
              </Center>
            </div>
          </Col>

          <Col md="6" style={paddingTop}>
            <form onSubmit={this.submitHandler}>
              <Col className="mb-3">
                <h4>
                  Sign In
                </h4>

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
                <Link to="/clientform">
                  <PrimaryButton label="Sign In" />
                </Link>
              </Center>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Login;
