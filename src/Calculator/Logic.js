import React, { useState } from 'react';
import UI from './UI';

function Logic() {
    const [sum, setSum] = useState(1);
    const [subtract, setSubtract] = useState(1);
    const [multiply, setMultiply] = useState(1);
    const [division, setDivision] = useState(1);
    const [modulo, setModulo] = useState(1);
    const [power, setPower] = useState(1);
    const [number, setNumber] = useState(1);
    // const [value, setValue] = useState("");
    const [clear, setClear] = useState("");
    // const [digit, setDigit] = useState(0);

    const handleSum = () => {
        setSum(sum + number);
        setNumber(sum);
    }

    const handleSubtract = () => {
        setSubtract(number - subtract);
        setNumber(subtract);
    }

    const handleMultiply = () => {
        setMultiply(multiply * number);
        setNumber(multiply);
    }

    const handleDivision = () => {
        setDivision(division / number);
        setNumber(division);
    }

    const handleModulo = () => {
        setModulo(modulo % number);
        setNumber(modulo);
    }

    const handlePower = () => {
        setPower(number ** power);
        setNumber(power);
    }

    // const handleNumber = () => {
    //     setSum(number);
    //     setSubtract(number);
    //     setMultiply(number);
    //     setDivision(number);
    //     setModulo(number);
    // }

    // const handleValue = () => {
    //     setValue(number);
    // }

    const handleClear = () => {
        setNumber(1);
        setClear(clear);
        setSum(1);
        setSubtract(1);
        setDivision(1);
        setMultiply(1);
        setModulo(1);
        setPower(1);
    }

    // const handleDigit = () => {
    //     setDigit(digit);
    // }

    return (
        <div>
            <h1 style={{ fontFamily: "Sansita Swashed" }} >Calculator without Numbers</h1>
            <UI
                sum={sum}
                handleSum={handleSum}
                subtract={subtract}
                handleSubtract={handleSubtract}
                multiply={multiply}
                handleMultiply={handleMultiply}
                division={division}
                handleDivision={handleDivision}
                modulo={modulo}
                handleModulo={handleModulo}
                number={number}
                // value={value}
                // setValue={setValue}
                // handleValue={handleValue}
                clear={clear}
                handleClear={handleClear}
                power={power}
                handlePower={handlePower}
            // digit={digit}
            // setDigit={setDigit}
            // handleDigit={handleDigit}
            />
        </div>
    )
}

export default Logic;
