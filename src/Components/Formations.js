import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_formation, delete_formation } from "../js/action/index";
import Modified from "./Modified";
import { Button,Form, Row, Col} from 'react-bootstrap'

const Formations = () => {
  const dispatch = useDispatch();
  const tabFormation = useSelector(state => state.formation_reducer.tabFormation)
  const [formation, setFormation] = useState("");
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const [id, setId] = useState('')
    const handleShow = (id) => {
        setShow(true);
        setId(id)
    }
  return (
    <div>
        <div className='formation'>
      <Form.Control
      style={{width:'400px'}}
        type="text"
        placeholder="tapez vos Formations"
        onChange={(e) => setFormation(e.target.value)}
      />
      <Button
      style={{margin:'5px'}}
      variant="info"
        onClick={() =>
          dispatch(add_formation({ formation: formation, id: Math.random() }))
        }
      >
        Add
      </Button>
      </div>
    <div className='alias'>
        {tabFormation.map(el=><Row>
          <Col lg={10}>
            <span>{el.formation}</span>
          </Col>
          <Col lg={2}>
            <Button onClick={()=>handleShow(el.id)} variant="info"  style={{margin:'5px'}}>Edit</Button>
            <Button onClick={()=>dispatch(delete_formation(el.id))} variant="info" style={{margin:'5px'}}>Delete</Button>
          </Col>
            
        </Row>
        )}
    </div>
  <Modified 
    handleClose={handleClose}
    handleShow={handleShow}
     show={show} 
     id={id}/>
    </div>
  );
};

export default Formations;
