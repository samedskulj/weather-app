
import React, {useState} from "react"
import './App.css';
import {Button, Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [alarm, setAlert] = useState();

  return (
    <>
   <Container fluid className = "d-flex justify-content-center align-items-center w-25 pt-3">
     <Button>Zdravo!</Button>
   </Container>
    </>
   
  );
}

export default App;
