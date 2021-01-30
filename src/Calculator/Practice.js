import React, { useState } from 'react'

function Practice() {
    const [box, setBox] = useState("");
    const [btn, setBtn] = useState("");
    const handleClick = () => {
        setBtn(`${btn}${1}`);
        setBox(btn);
    }

    const handlePlus = () => {
        setBtn(`${btn}${"+"}`);
        setBox(btn);
    }

    const handleClick2 = () => {
        setBtn(`${btn}${2}`);
        setBox(btn);
    }

    return (
        <div>
            <button onClick={(e) => handleClick(e)} >1</button>
            <button onClick={(e) => handlePlus(e)} >+</button>
            <button onClick={(e) => handleClick2(e)} >2</button>
            <input value={btn} />
        </div>
    )
}

export default Practice;
