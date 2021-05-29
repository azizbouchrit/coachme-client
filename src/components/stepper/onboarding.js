import React from "react";
import { Helmet } from "react-helmet";
import MasterForm from "./stepper";
import { Container, Row, Col } from "reactstrap";
import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";


function On() {
    return (
    
    <div className="App">
        <Helmet>
        {/* <style>{"body { background-color: lightgray; }"}</style> */}
        </Helmet>
        <Container>
        <Row>
            <Col>
            <MasterForm />
            </Col>
        </Row>
        </Container>
    </div>
    );
}

export default On;