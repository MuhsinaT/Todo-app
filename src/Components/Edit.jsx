import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Edit({project}) {
      const [show, setShow] = useState(false);

      const [updated,setUpdated]=useState(project)

      const handleSave = () => {
        if (!updated.project.task || !updated.project.status || !updated.project.deadline) {
          alert("Please fill out all fields.");
          return;
        }
    
        const updated = [...todos];
        updated[index] = updated;
    
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    
        handleClose();
      };

      
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
  return (
    <>

<Button variant="" className="ms-2" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="editTask" label="Task">
            <Form.Control
              type="text"
              name="task"
              defaultValue={project.task}
              placeholder="Edit Task"
              onChange={(e)=>(setUpdated({...updated,task:e.target.value}))}
            />
          </FloatingLabel>

          <FloatingLabel controlId="editStatus" label="Status" className="mt-2">
            <Form.Control
              type="text"
              name="status"
              defaultValue={project.status}
              placeholder="Edit Status"
              onChange={(e)=>(setUpdated({...updated,status:e.target.value}))}
            />
          </FloatingLabel>

          <FloatingLabel controlId="editDeadline" label="Deadline" className="mt-2">
            <Form.Control
              type="text"
              name="deadline"
              defaultValue={project.deadline}
              placeholder="Edit Deadline"
              onChange={(e)=>(setUpdated({...updated,deadline:e.target.value}))}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>    
    </>
  )
}

export default Edit
