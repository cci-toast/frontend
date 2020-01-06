
import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import Center from 'react-center';
import {
  Link
} from 'react-router-dom';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./logo.png"

class Login extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="col-md-6 blue-purple-gradient" >
            <div style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Center>
                <img src={Logo} rel="icon" alt="" style={{ width: '30%', paddingTop: '40px' }} />
              </Center>

              <Center>
                <h3 className="white-text">toast</h3>
              </Center>
              <Center>
                <h6 className="white-text">Financial planning made easier</h6>
              </Center>
            </div>

          </Col>

          <Col className="col-md-6" >

            <form onSubmit={this.submitHandler}>
              <Col className="mb-3">
                <h4 className="black-text" style={{ fontWeight: "bold" }}>Sign In </h4>

                <br />
                <label className="black-text">Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <input type="email" className="form-control" name="email" placeholder="Type in your email" required />
                </div>
              </Col>
              <br />
              <Col className="mb-3">
                <label className="black-text"> Password</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                  </div>
                  <input type="password" className="form-control" name="password" placeholder="Type in your password" required />
                </div>
              </Col>
              <br />
              <Center>
                <Link to="/clientform">
                  <button className="btn blue-purple-gradient white-text" type="submit" >Sign In</button>
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