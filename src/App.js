import "./App.css";
import Header from "./MyComponents/Header.js";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodos } from "./MyComponents/AddTodos";

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const addTodos = (title, desc) => {
    console.log("Arre", title, desc);
  };
  const onDelete = (todo) => {
    console.log("I clicked on Delete", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      name: "hey",
    },
    {
      sno: 2,
      name: "hey2",
    },
    {
      sno: 3,
      name: "hey3",
    },
  ]);
  return (
    <>
      <Router>
        <Header title="Hi Bye" searchBar={false} />
        <AddTodos addTodos={addTodos} />
        <Todos todo={todos} onDelete={onDelete} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
