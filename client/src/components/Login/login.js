import React, { Component } from "react";
import TwitterLogin from "react-twitter-auth";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import config from "./config.json";

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

class LoginUser extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      user: null,
      token: ""
    };
  }

  logout = () => {
    this.setState({ isAuthenticated: false, token: "", user: null });
  };

  onFailure = error => {
    alert(error);
  };

  twitterResponse = response => {
    const token = response.headers.get("x-auth-token");
    response.json().then(user => {
      if (token) {
        this.setState({ isAuthenticated: true, user, token });
      }
    });
  };

  facebookResponse = response => {
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: response.accessToken }, null, 2)],
      { type: "application/json" }
    );
    const options = {
      method: "POST",
      body: tokenBlob,
      mode: "cors",
      cache: "default"
    };
    fetch("http://localhost:4000/api/v1/auth/facebook", options).then(r => {
      const token = r.headers.get("x-auth-token");
      r.json().then(user => {
        if (token) {
          this.setState({ isAuthenticated: true, user, token });
        }
      });
    });
  };

  googleResponse = response => {
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: response.accessToken }, null, 2)],
      { type: "application/json" }
    );
    const options = {
      method: "POST",
      body: tokenBlob,
      mode: "cors",
      cache: "default"
    };
    fetch("http://localhost:4000/api/v1/auth/google", options).then(r => {
      const token = r.headers.get("x-auth-token");
      r.json().then(user => {
        if (token) {
          this.setState({ isAuthenticated: true, user, token });
        }
      });
    });
  };

  render() {
    let content = !!this.state.isAuthenticated ? (
      <div>
        <p>Authenticated</p>
        <div>{this.state.user.name}</div>
        <div>
          <button onClick={this.logout} className="button">
            Log out
          </button>
        </div>
      </div>
    ) : (
      <div>
        <TwitterLogin
          loginUrl="http://localhost:4000/api/v1/auth/twitter"
          onFailure={this.onFailure}
          onSuccess={this.twitterResponse}
          requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
        />
        <FacebookLogin
          appId={config.FACEBOOK_APP_ID}
          autoLoad={false}
          fields="name,email,picture"
          callback={this.facebookResponse}
        />
        <GoogleLogin
          clientId={config.GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={this.googleResponse}
          onFailure={this.onFailure}
        />
      </div>
    );

    return <div className="App">{content}</div>;
  }
}

export default LoginUser;

// import React, { Component } from "react";
// import FacebookLogin from "react-facebook-login";
// import "./login.css";

// export default class Facebook extends Component {
//   state = {
//     isLoggedIn: false,
//     userID: "",
//     name: "",
//     email: "",
//     picture: ""
//   };

//   responseFacebook = response => {
//     // console.log(response);
//     this.setState({
//       isLoggedIn: true,
//       userID: response.userID,
//       name: response.name,
//       email: response.email,
//       picture: response.picture.data.url
//     });
//   };

//   componentClicked = () => console.log("clicked");

//   render() {
//     let fbContent;

//     if (this.state.isLoggedIn) {
//       fbContent = (
//         <div
//           style={{
//             width: "200px",
//             margin: "auto",
//             background: "#f4f4f4",
//             padding: "20px"
//           }}
//         >
//           <img src={this.state.picture} alt={this.state.name} />
//           <h2>Welcome {this.state.name}</h2>
//           Email: {this.state.email}
//         </div>
//       );
//     } else {
//       fbContent = (
//         <FacebookLogin
//           appId="929702273883725"
//           autoLoad={true}
//           fields="name,email,picture"
//           onClick={this.componentClicked}
//           callback={this.responseFacebook}
//         />
//       );
//     }

//     return <div>{fbContent}</div>;
//   }
// }
