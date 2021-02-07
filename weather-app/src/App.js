
import React, {useState} from "react"
import './App.css';
import {Button, Container, Form, FormControl, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  const[imeGrada, setImeGrada] = useState("");
  const[vrijeme, setVrijeme] = useState({});


  function fetchVremena() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${imeGrada}&APPID=07b663c40260196298d7045ac1f80f5c`)
    .then(response => response.json())
    .then(data => {
      setVrijeme(data)
      console.log(data);
    });

  }
  

  return (
    <>
   <Container>
     <Row className = "justify-content-between align-items-center moj-red">
       <Col className = "col-3 moja-kolona align-self-center">
         <div>
           <p>{vrijeme.main.humidity}</p>
           <p id = "temperatura">{vrijeme.main.temp}</p>
         </div>
       </Col>
       <Col className = "col-6 moja-kolona">
       <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label id = "lokacija">Lokacija</Form.Label>
    <Form.Control type="text" placeholder="Npr. London..." onChange = {e => setImeGrada(e.target.value)} />
    <Form.Text className="text-muted">
      Molimo Vas upišite ime lokacije!
    </Form.Text>
  </Form.Group>
  </Form>
  <Button onClick = {fetchVremena}>Pritisnite</Button>
  </Col>
     </Row>
   </Container>
    </>
   
  );
}

export default App;
