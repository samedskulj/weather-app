import React, { useState } from "react";
import "./App.css";
import ErrorUnos from "./components/ErrorUnos";
import {
  Button,
  Container,
  Form,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import cloudy from "./slike/cloudy.png";
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import Poruka from "./components/Poruka";
import sifraAPI from "./zastita/api_key";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  let mojBody = document.querySelector("#temperatura2");
  const [imeGrada, setImeGrada] = useState("");
  const [vrijeme, setVrijeme] = useState({});
  const [error, setError] = useState("");

  function fetchVremena() {
    if (imeGrada === "" || imeGrada === undefined) {
      setError("Molimo Vas upisite grad!!");
    } else {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${imeGrada}&APPID=${sifraAPI}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return Promise.reject({
              status: response.status,
              statusText: response.statusText,
            });
          }
        })
        .then((data) => {
          setVrijeme(data);
          setImeGrada("");
          setError("");
          console.log(data);
        })
        .catch((error) => {
          if (error.status === 404) {
            setError("Grad koji ste upisali ne postoji!!");
          }
        });
    }
  }
  return (
    <>
      <Container className="">
        <Row className="justify-content-between align-items-center moj-red">
          <Col className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 moja-kolona align-self-center">
            {typeof vrijeme.main != "undefined" ? (
              <AnimatePresence>
                <motion.div
                  id="informacije"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p id="temperatura2">
                    {Math.floor(vrijeme.main.temp - 273.19)}°c
                  </p>
                  <p id="imegrada1" className="align-self-center ml-2 mt-2">
                    {vrijeme.name}
                  </p>
                  <img
                    src={cloudy}
                    className="align-self-center mr-1 ml-2 mb-2"
                    height="30px"
                  ></img>
                </motion.div>
              </AnimatePresence>
            ) : (
              ""
            )}
          </Col>

          <Col className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 moja-kolona1">
            <h6 className="errorText">{error}</h6>
            <MDBInput
              label="Npr London..."
              id="inputGrada"
              value={imeGrada}
              onChange={(e) => setImeGrada(e.target.value)}
            />

            <MDBBtn
              id="dugme1"
              icon="sun "
              rounded
              color="blue"
              className="mb-5"
              onClick={() => fetchVremena()}
            >
              Izaberite
            </MDBBtn>
          </Col>
          <main>
            <div></div>
          </main>
        </Row>
      </Container>
    </>
  );
}

export default App;
