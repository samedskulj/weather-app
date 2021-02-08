import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./Poruka.css";

import {MDBInput, MDBBtn, MDBIcon, MDBTypography} from "mdbreact";
function Poruka() {
    return (
        <div>
            <MDBTypography className = "mojaPoruka" tag='h6' variant="h6">made by Samed</MDBTypography>
        </div>
    )
}

export default Poruka;