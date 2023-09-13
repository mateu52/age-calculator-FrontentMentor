import React, { useRef, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles/style.css';
function Calculator(){
    const [sum, setSum] =useState("--");
    const dayRef = useRef();
    const monthRef = useRef();
    const yearRef = useRef();
    return(
    <div style={styles}>
        <Container className="container">
            <Row className="d-flex clex-center row">
                <Col className="">Day</Col>
                <Col>Month</Col>
                <Col>Year</Col>
            </Row>
            <Row className="d-flex clex-center row">
                <Col><input ref={dayRef}/></Col>
                <Col><input ref={monthRef}/></Col>
                <Col><input ref={yearRef}/></Col>
            </Row>
            <button><img src={require("../assets/icon-arrow.svg")} alt="img"/></button>
            <Row className="row-sum d-flex">
                {sum}<p>years</p>
            </Row>
            <Row className="row-sum d-flex">
                {sum}<p>month</p>
            </Row>
            <Row className="row-sum d-flex">
                {sum}<p>days</p>
            </Row>
        </Container>
    </div>
    )
};

export default Calculator;