import React, { useState } from 'react'
import {delete_competences,add_competences} from '../js/action/index'
import { Button,Form,Col,Row} from 'react-bootstrap'
import Modifieds from  './Modifieds'
import { useDispatch, useSelector } from 'react-redux'

const Compétences = () => {
    const dispatch = useDispatch();
    const TabCompetences = useSelector(state => state.competences_reducer.TabCompetences)
    const [competences, setCompetences] = useState("");
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
        placeholder="tapez vos Compétences"
        onChange={(e) => setCompetences(e.target.value)}
      />
      <Button
      style={{margin:'5px'}}
      variant="info"
        onClick={() =>
          dispatch(add_competences({ competences: competences, id: Math.random() }))
        }
      >
        Add
      </Button>
      </div>
    <div className='alias'>
        {TabCompetences.map(el=><Row>
          <Col lg={10}>
            <span>{el.competences}</span>
            </Col>
            <Col lg={2}>
            <Button onClick={()=>handleShow(el.id)} variant="info"  style={{margin:'5px'}}>Edit</Button>
            <Button onClick={()=>dispatch(delete_competences(el.id))} variant="info" style={{margin:'5px'}}>Delete</Button>
            </Col>
        </Row>
        )}
    </div>
  <Modifieds
    handleClose={handleClose}
    handleShow={handleShow}
     show={show} 
     id={id}/>
    </div>
  );
};
export default Compétences
