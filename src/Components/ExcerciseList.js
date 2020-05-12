import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Excercise = (props) => {
  return (
    <tr>
      <td>{props.excercise.username}</td>
      <td>{props.excercise.description}</td>
      <td>{props.excercise.duration}</td>
      <td>{props.excercise.date}</td>
      <td>
        <Link to={"/edit/" + props.excercise._id}>Edit</Link>|
        <a
          href="#"
          onClick={() => {
            props.onDelete(props.excercise._id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

class ExcerciseList extends Component {
  state = {
    excercises: [""],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/excercise").then((response) => {
      this.setState({
        excercises: response.data.map((item) => {
          return item;
        }),
      });
    });
  }

  onItemDelete = (id) => {
    axios.delete("http://localhost:5000/excercise/delete/" + id).then((res) => {
      console.log(res.data);

      this.setState({
        excercises: this.state.excercises.filter((el) => {
          return el._id !== id;
        }),
      });
    });
  };

  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">UserName</th>
            <th scope="col">Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.excercises.map((item) => {
            return <Excercise onDelete={this.onItemDelete} excercise={item} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default ExcerciseList;
