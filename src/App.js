import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateUSer from "./Components/CreateUser";
import CreateExcercise from "./Components/CreateExcercise";
import EditExcercise from "./Components/EditExcercise";
import ExcerciseList from "./Components/ExcerciseList";
import NavBar from "./Components/NavBAr";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <br />
        <Route path="/" exact component={ExcerciseList} />
        <Route path="/edit/:id" exact component={EditExcercise} />
        <Route path="/create" exact component={CreateExcercise} />
        <Route path="/user" exact component={CreateUSer} />
      </Router>
    </div>
  );
}

export default App;
