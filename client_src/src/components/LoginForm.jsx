import React from "react";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formInfo: []
    };
  }

  render() {
    const loginImg =
      "https://images.pexels.com/photos/4291/door-green-closed-lock.jpg?cs=srgb&dl=closed-coming-soon-door-4291.jpg&fm=jpg";
    const inputStyle = {
      borderRadius: 30
    };
    return (
      <div className="row">
        <div className="col">
          <div className="card Regular shadow">
            <img
              class="card-img-top imageTop"
              src={loginImg}
              alt="Card image cap"
            />
            <form class="m-4">
              <div className="form-group">
                <label for="loginUsername">Username</label>
                <input
                  style={inputStyle}
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Username / Email"
                />
              </div>
              <div className="form-group">
                <label for="loginPassword">Password</label>
                <input
                  style={inputStyle}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remeberMe"
                />
                <label className="form-check-label" for="rememberMe">
                  Save Login Info
                </label>
              </div>
              <button style={inputStyle} type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
