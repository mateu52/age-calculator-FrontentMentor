import React, { useRef, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles/style.css';
import ArrowIcon from '../assets/icon-arrow.svg'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Calculator(){
    const [validated, setValidated] = useState(false);
    const [day, setDay] =useState("--");
    const [month, setMonth] =useState("--");
    const [year, setYear] =useState("--");
    const dayRef = useRef();
    const monthRef = useRef();
    const yearRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const day = dayRef.current.value;
        const month = monthRef.current.value;
        const year = yearRef.current.value;
        if(month>0 && month<13){
            if(day>0 && day<32){
                const today = new Date();
                const inputDate = new Date(`${year}-${month}-${day}`)
                const timeDifference = today - inputDate;
                const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
                const months = today.getMonth() - inputDate.getMonth() + (12 * (today.getFullYear() - inputDate.getFullYear()));
                const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
                if((days && month && year)){
                    setDay(days);
                    setMonth(months)
                    setYear(years);
                }
            }
        }
        const form = event.currentTarget;
        console.log(event)
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    
        setValidated(true);
    }
    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     console.log(event)
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    
    //     setValidated(true);
    // };
    return(
    <div style={styles} className="container">
        <Container>
            <Form  validated={validated} onSubmit={handleSubmit}>
                <Row className="row">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label className="col">Day</Form.Label>
                        <Form.Control className="input"
                            required
                            type="text"
                            placeholder="DD"
                            ref={dayRef}
                        />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label className="col">Month</Form.Label>
                    <Form.Control className="input"
                        required
                        type="text"
                        placeholder="MM"
                        ref={monthRef}
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label className="col">Year</Form.Label>
                    <Form.Control className="input"
                        required
                        type="text"
                        placeholder="YYYY"
                        ref={yearRef}
                    />
                </Form.Group>
                </Row>

                {/* <Row className="d-flex flex-center row">
                    <Col className="col"><Form.Label>Day</Form.Label></Col>
                    <Col className="col"><Form.Label>Month</Form.Label></Col>
                    <Col className="col"><Form.Label>Year</Form.Label></Col>
                </Row>
                <Row className="d-flex clex-center row">
                    <Col className="col"><Form.Label>
                        <input ref={dayRef}/></Form.Label>
                    </Col>
                    <Col className="col"><Form.Label>
                        <input ref={monthRef}/></Form.Label>
                    </Col>
                    <Col className="col"><Form.Label>
                        <input ref={yearRef}/></Form.Label>
                    </Col>
                </Row> */}
            <button onClick={handleSubmit} className="button" type="submit">
                <img src={ArrowIcon} className="arrowImg" alt="img" />
            </button>
            </Form>
            <Row className="row-sum">
                <p className="text">{year}</p><p>years</p>
            </Row>
            <Row className="row-sum">
                <p className="text">{month}</p><p >month</p>
            </Row>
            <Row className="row-sum">
                <p className="text">{day}</p><p>days</p>
            </Row>
        </Container>
    </div>
    )
};

export default Calculator;