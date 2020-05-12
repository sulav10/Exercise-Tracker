import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
class CreateExcercise extends Component {
  state = {
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/excercise" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.data),
        });
      });

    axios.get("http://localhost:5000/user").then((response) => {
      this.setState({
        users: response.data.map((excercise) => {
          return excercise.username;
        }),
      });
    });
  }

  changeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  changeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  changeDuration = (e) => {
    this.setState({
      duration: e.target.value,
    });
  };

  changeDate = (date) => {
    this.setState({
      date: date,
    });
  };

  OnFormSubmit = (e) => {
    e.preventDefault();

    const excercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    axios
      .post(
        "http://localhost:5000/excercise/update/" + this.props.match.params.id,
        excercise
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    window.location = "/";
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.OnFormSubmit}
          style={{
            margin: 30,
          }}
        >
          <div className="form-group">
            <label>UserName:</label>
            <select
              required
              value={this.state.username}
              className="form-control"
              onChange={this.changeUsername}
            >
              {this.state.users.map((item) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              onChange={this.changeDescription}
              type="text"
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <label>Duration:</label>
            <input
              onChange={this.changeDuration}
              type="text"
              className="form-control"
              placeholder="Duration"
            />
          </div>
          <div className="form-group">
            <label style={{ margin: 5 }}>Date</label>
            <DatePicker selected={this.state.date} onChange={this.changeDate} />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Excercise
          </button>
        </form>
      </div>
    );
  }
}

export default CreateExcercise;
