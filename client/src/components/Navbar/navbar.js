import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./navbar.css";
import $ from "jquery";
import Logo from "../img/logo.png";
import Popup from "../Modals";

export default class Navibar extends Component {
  //Navbar Constructor and Functions
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
      showPopup: false //MODAL
    };
  }

  //MODAL
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: true });
  }

  componentDidMount() {
    //Fade out side btns on scroll
    $(window).scroll(function() {
      if ($(window).scrollTop()) {
        $(".nav").addClass("black");
        $(".logo").addClass("shrink");
        $(".logo-text").addClass("shrink");
      } else {
        $(".nav").removeClass("black");
        $(".logo").removeClass("shrink");
        $(".logo-text").removeClass("shrink");
      }
    });
  }

  render() {
    return (
      <div>
        <div className="nav">
          <NavbarBrand className="navbrand">
            <Link to="/">
              <span>
                {<img className="logo" src={Logo} alt="Logo" />}
                <span className="logo-text">The Dental Studio</span>
              </span>
            </Link>
          </NavbarBrand>

          <a className="call-today" href="tel:8008888888">
            CALL TODAY 800.888.8888
          </a>
          <a className="call-today-sm " href="tel:8008888888">
            <i className="fas fa-phone-square  fa-3x" />
          </a>
          <Dropdown
            className="d-inline-block"
            onMouseOver={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle>
              <i className="fas fa-bars fa-2x" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="/">
                <i className="fas fa-home" />&nbsp;&nbsp;&nbsp;Home
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/about#id-about">
                <i className="fas fa-users" />&nbsp;&nbsp;&nbsp;About
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/services#id-services">
                <i className="fas fa-tooth" />&nbsp;&nbsp;&nbsp;Services
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem
                href="https://www.google.com/maps/dir//Westwood+Village,+Los+Angeles,+CA+90024/@34.0617174,-118.4469134,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80c2bc8170138c71:0x79bc03036093b6ba!2m2!1d-118.4447863!2d34.0617664!3e0"
                target="_blank"
              >
                <i className="fas fa-map-marker" />&nbsp;&nbsp;&nbsp;Directions
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/contact#id-contact">
                <i className="fas fa-user" />&nbsp;&nbsp;&nbsp;Contact
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/contact">
                  <i className="fas fa-user" />&nbsp;&nbsp;&nbsp;Contact
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              {this.props.authenticated ? (
                <DropdownItem href="#" onClick={this.props.logout}>
                  <i className="fas fa-sign-in-alt" />&nbsp;&nbsp;&nbsp;Logout
                </DropdownItem>
              ) : (
                <DropdownItem href="#" onClick={this.togglePopup.bind(this)}>
                  <i className="fas fa-sign-in-alt" />&nbsp;&nbsp;&nbsp;Login
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          {this.state.showPopup ? (
            <Popup closePopup={this.togglePopup.bind(this)} />
          ) : null}
        </div>
      </div>
    );
  }
}
