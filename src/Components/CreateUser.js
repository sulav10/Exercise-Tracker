import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  state = {
    username: "",
  };

  changeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onUserSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    axios
      .post("http://localhost:5000/user/add", user)
      .then(
        this.setState({
          username: "",
        })
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <form
        onSubmit={this.onUserSubmit}
        style={{
          margin: 30,
        }}
      >
        <label
          style={{
            padding: 10,
          }}
        >
          UserName:
        </label>
        <input
          onChange={this.changeUsername}
          className="form-control"
          type="text"
          value={this.state.username}
        ></input>
        <button
          style={{
            marginTop: 20,
          }}
          type="submit"
          className="btn btn-primary"
        >
          Create User
        </button>
      </form>
    );
  }
}

export default CreateUser;
