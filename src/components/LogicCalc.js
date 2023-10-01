import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
function LoginCalc(day, month, years){
    const handleChage = (event) => {
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

    }
}

export default LoginCalc;