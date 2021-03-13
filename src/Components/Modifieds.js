import React from 'react'
import { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { edit_competences } from "../js/action/index";

const Modifieds= ({ handleClose, show, id }) => {
    const dispatch = useDispatch();
    const [formModif, setFormModif] = useState("");
    const handleChange = (e) => {setFormModif(e.target.value);
    }
    const edit=(id)=>{
      dispatch(edit_competences({id:id,formModif:formModif}))
    }
    return(
        
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Normal text"
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              edit(id);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Modifieds