import React, { useState } from "react";
import { add_experiences, delete_experiences } from "../js/action/index";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Modifier from "./Modifier";

const PortFolio = () => {
  const dispatch = useDispatch();
  const TabExperiences = useSelector(
    (state) => state.experiences_reducer.TabExperiences
  );
  const [experiences, setExperiences] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [id, setId] = useState("");
  const handleShow = (id) => {
    setShow(true);
    setId(id);
  };

  return (
    <div>
      <div className="formation">
        <Form.Control
          style={{ width: "400px" }}
          type="text"
          placeholder="tapez vos Expereinces"
          onChange={(e) => setExperiences(e.target.value)}
        />
        <Button
          style={{ margin: "5px" }}
          variant="info"
          onClick={() =>
            dispatch(
              add_experiences({ experiences: experiences, id: Math.random() })
            )
          }
        >
          Add
        </Button>
      </div>
      <div className="alias">
        {TabExperiences.map((el) => (
          <Row>
            <Col lg={10}>
              <span>{el.experiences}</span>
            </Col>
            <Col lg={2}>
              <Button
                onClick={() => handleShow(el.id)}
                variant="info"
                style={{ margin: "5px" }}
              >
                Edit
              </Button>
              <Button
                onClick={() => dispatch(delete_experiences(el.id))}
                variant="info"
                style={{ margin: "5px" }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </div>
      <Modifier
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        id={id}
      />
    </div>
  );
};

export default PortFolio;
