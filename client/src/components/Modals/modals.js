//Add to parent component
/*
constructor(props) {
    super(props);
    this.state = {
      showPopup: false //MODAL
    };
  }

  //MODAL
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }


  //Add this button inside return
<button onClick={this.togglePopup.bind(this)}>show popup</button>
//Add this to the same section of the button
{this.state.showPopup ? (
            <Popup closePopup={this.togglePopup.bind(this)} />
          ) : null}
*/

import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
// import fb from "../img/logos/facebook.png";
// import gl from "../img/logos/google.png";
// import tw from "../img/logos/twitter.png";
// import fbmb from "../img/logos/facebook-mb.png";
// import glmb from "../img/logos/google-mb.png";
// import twmb from "../img/logos/twitter-mb.png";
import "./modals.css";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Login from "../Login";
// import Signup from "../Signup";

//Popup Modal
class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner text-center">
          <h6 className="h6-white">Please Login</h6>
          <div className="login-bg">
            <br />
            <Login />
            <br />

            {/*Custom buttons*/}
            {/* <a href="#">
              {<img className="login-logo" src={fb} alt="Facebook" />}
              <Login />
            </a>
            <a href="#">
              {<img className="login-logo" src={gl} alt="Google" />}
            </a>
            <a href="#">
              {<img className="login-logo" src={tw} alt="Twitter" />}
            </a>

            <Row className="col-12 ml-auto mr-auto ">
              <Col className="col-3 m-1">
                <a href="#">
                  {<img className="login-logomb" src={fbmb} alt="Facebook" />}
                </a>
              </Col>
              <Col className="col-3 m-1">
                <a href="#">
                  {<img className="login-logomb" src={glmb} alt="Google" />}
                </a>
              </Col>
              <Col className="col-3 m-1">
                <a href="#">
                  {<img className="login-logomb" src={twmb} alt="Twitter" />}
                </a>
              </Col> 
            </Row>*/}
            <Form className="login-form text-center">
              <FormGroup row>
                <Col>
                  <Label for="UserName">User Name</Label>
                  <Input
                    type="email"
                    name="email"
                    id="username"
                    placeholder="your-email@email.com"
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label for="Password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    required
                  />
                </Col>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
            <br />
            <span className="modal-footer">
              <a
                className="signup"
                href="/signup#user-reg"
                onClick={this.props.closePopup}
              >
                Register
              </a>
              <Button color="danger" onClick={this.props.closePopup}>
                Close
              </Button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
//End Popup Modal
export default Popup;
