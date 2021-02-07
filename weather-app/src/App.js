
import React, {useState} from "react"
import './App.css';
import {Button, Container, InputGroup, FormControl, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [alarm, setAlert] = useState();

  return (
    <>
   <Container>
     <Row className = "justify-content-between align-items-center moj-red">
       <Col className = "col-3 moja-kolona align-self-start">made by Samed</Col>
       <Col className = "col-6 moja-kolona">
         <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <Button>Pritisnite</Button>
  </Col>
     </Row>
   </Container>
    </>
   
  );
}

export default App;
