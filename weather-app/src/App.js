
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
      setImeGrada("");
      console.log(data);
  
    });
  }

  return (
    <>
   <Container className = "">
     <Row className = "justify-content-between align-items-center moj-red">
       <Col className = "col-lg-3 col-md-3 col-sm-5 col-xs-3 moja-kolona align-self-center">
       {(typeof vrijeme.main != "undefined") ? (
         <div id = "informacije">
           <p id = "temperatura">Vlaga iznosi: {vrijeme.main.humidity}%</p>
           <p id = "temperatura">Temperatura je: {Math.floor((vrijeme.main.temp - 32) * 5 / 9)}°C</p>
         </div>
          ): ("")}
       </Col>
       <Col className = "col-lg-6 col-md-6 col-sm-6 col-xs-6  moja-kolona">
       <Form>
     <Form.Group controlId="formBasic">
    <Form.Label id = "lokacija">Lokacija</Form.Label>
    <Form.Control type="text" placeholder="Npr. London..." onChange = {e => setImeGrada(e.target.value)} />
    <Form.Text className="text-muted">
      Molimo Vas upišite ime lokacije!
    </Form.Text>
  </Form.Group>
  </Form>
  <Button id = "dugme1" variant="outline-info" onClick = {fetchVremena}>Pritisnite</Button>
  </Col>
     </Row>
   </Container>
    </>
   
  );
}

export default App;
