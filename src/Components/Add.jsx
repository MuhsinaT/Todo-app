
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Edit from "./Edit";
import './Add.css';

function Add() {
  const [show, setShow] = useState(false);
  const [todo, setTodo] = useState({
    task: "",
    status: "",
    deadline: "",
  });

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    if (!todo.task || !todo.status || !todo.deadline) {
      alert("Please fill out all fields.");
      return;
    }
    const updatedTodos = [...todos, todo];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
    setTodo({ task: "", status: "", deadline: "" });
    handleClose();
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <>
      <button className="btn btn-outline-info mt-4" onClick={handleShow}>
        Add Todo
      </button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTask" label="Task">
            <Form.Control
              type="text"
              name="task"
              value={todo.task}
              placeholder="Enter Task"
              onChange={(e) => setTodo({ ...todo, task: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingStatus" label="Status" className="mt-2">
            <Form.Control
              type="text"
              name="status"
              value={todo.status}
              placeholder="Status"
              onChange={(e) => setTodo({ ...todo, status: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingDeadline" label="Deadline" className="mt-2">
            <Form.Control
              type="text"
              name="deadline"
              value={todo.deadline}
              placeholder="Enter Deadline"
              onChange={(e) => setTodo({ ...todo, deadline: e.target.value })}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Todo
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="mt-4">
        <h3>Todo List</h3>
        {todos.length === 0 ? (
          <p>No todos available.</p>
        ) : (
          <ul className="list-group">
            {todos.map((item, index) => (
              <li key={index} className="list-group-item">
                <div className="list-card">
                  <strong>Task:</strong> {item.task} <br />
                  <strong>Status:</strong> {item.status} <br />
                  <strong>Deadline:</strong> {item.deadline}

                  <div className="d-flex">
                    <Edit project={item} />
                    <button
                      className="delete btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Add;
