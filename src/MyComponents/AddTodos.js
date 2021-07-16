import React, { useState } from "react";

export const AddTodos = ({ addTodos }) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be blank");
    }
    addTodos(title, desc);
  };
  return (
    <>
      <form className="container my-3" onSubmit={submit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Todo Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </>
  );
};
