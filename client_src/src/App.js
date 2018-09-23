import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
