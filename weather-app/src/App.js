
import React, {useState} from "react"
import './App.css';
import {Button, Container, Form, FormControl, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import cloudy from "./slike/cloudy.png";

function App() {


  const[imeGrada, setImeGrada] = useState("");
  const[vrijeme, setVrijeme] = useState({});


  function fetchVremena() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${imeGrada}&APPID=07b663c40260196298d7045ac1f80f5c`)
    .then(response => response.json())
    .then(data => {
      setVrijeme(data)
      setImeGrada("");
      console.log(data);
    });
  }

  return (
    <>
   <Container className = "">
     <Row className = "justify-content-between align-items-center moj-red">
       <Col className = "col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 moja-kolona align-self-center">
       {(typeof vrijeme.main != "undefined") ? (
         <div id = "informacije">
           <p id = "temperatura2">{Math.floor((vrijeme.main.temp - 273.19))}°c</p>
           <p id = "imegrada1" className = "align-self-center ml-2 mt-2">{vrijeme.name}</p>
           <img src = {cloudy} className = "align-self-center mr-1 ml-2 mb-2" height = "30px"></img>
         </div>
          ): ("")}
       </Col>
       <Col className = "col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 moja-kolona1">
      <Form id = "forma1">
     <Form.Group controlId="formBasic">
    <Form.Label id = "lokacija">Lokacija</Form.Label>
    <Form.Control type="text" placeholder="Npr. London..." value = {imeGrada} onChange = {e => setImeGrada(e.target.value)} />
    <Form.Text className="text-muted">
      Molimo Vas upišite ime lokacije!
    </Form.Text>
  </Form.Group>
  </Form>
  <Button id = "dugme1" variant="info" className = "mb-4" onClick = {fetchVremena}>Pritisnite</Button>
  </Col>
     </Row>
   </Container>
    </>
   
  );
}

export default App;
