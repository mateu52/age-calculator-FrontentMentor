import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
function LoginCalc(day, month, years){
        console.log(day);
        const [inputDate, setInputDate] = useState('');
        const [result, setResult] = useState(null);

        const calculateDateDifference = () => {
        const inputDateObj = new Date(inputDate);
        const today = new Date();

        if (isNaN(inputDateObj.getTime())) {
        setResult('Nieprawidłowa data');
        } else {
        const timeDifference = today - inputDateObj;

        const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
        const months = today.getMonth() - inputDateObj.getMonth() + (12 * (today.getFullYear() - inputDateObj.getFullYear()));
        const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

        setResult(`Minęło ${years} lat, ${months} miesięcy i ${days} dni.`)
        }}
    return(
        // <Container>
        //     <Row>
        //         <p>aa</p>
        //     </Row>
        //     <Row>
        //         <p>2</p>
        //     </Row>
        //     <Row>
        //         <p>2</p>
        //     </Row>
        // </Container>
        <div>
        <input
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
        />
        <button onClick={calculateDateDifference}>Oblicz różnicę</button>
        {result && <p>{result}</p>}
        </div>
    
    )
}

export default LoginCalc;