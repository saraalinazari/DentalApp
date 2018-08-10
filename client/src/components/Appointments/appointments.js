import React, { Component } from "react";
import fb from "../img/logos/facebook.png";
import gl from "../img/logos/google.png";
import tw from "../img/logos/twitter.png";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

//Popup Modal
class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner text-center">
          <h6 className="h6-white">Please Login</h6>
          <div className="login-bg">
            <br />
            <a href="#">
              {<img className="login-logo" src={fb} alt="Facebook" />}
            </a>
            <br />
            <a href="#">
              {<img className="login-logo" src={gl} alt="Google" />}
            </a>
            <br />
            <a href="#">
              {<img className="login-logo" src={tw} alt="Twitter" />}
            </a>
            <br />

            <Form className="login-form text-center">
              <FormGroup row>
                <Col>
                  <Label for="UserName">User Name</Label>
                  <Input
                    type="email"
                    name="email"
                    id="username"
                    placeholder="your-email@email.com"
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
                  />
                </Col>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
            <br />
            <span className="modal-footer">
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

export default class Appointments extends Component {
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
  render() {
    return (
      <div>
        <h1>Appointments</h1>
        <button onClick={this.togglePopup.bind(this)}>show popup</button>
        {this.state.showPopup ? (
          <Popup closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}
