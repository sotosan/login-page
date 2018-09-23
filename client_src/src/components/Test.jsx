import React from "react";
import axios from "axios";

export default class Test extends React.Component {
  state = {
    dataRes: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/useremails/1")
      .then(res => {
        const dataRes = res.data;
        this.setState({ dataRes });
        console.log(this.state.dataRes);
      })
      .catch(err => {
        window.location = "https://google.com";
      });
  }
  render() {
    return <div>Hello</div>;
  }
}
