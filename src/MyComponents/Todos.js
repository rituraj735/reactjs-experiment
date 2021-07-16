import React from "react";
import { Todo } from "../MyComponents/Todo";

export const Todos = (props) => {
  return (
    <div>
      <h3>Todo list</h3>
      {props.todo.length === 0
        ? "No todos to display"
        : props.todo.map((todoes) => {
            return (
              <Todo todo={todoes} key={todoes.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
