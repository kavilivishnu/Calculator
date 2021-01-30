import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
toast.info("Hello👋😃! If you had REFRESHED (or) RELOADED the page by any chance, click on any of the operators except '=' to continue the calculation. Have a Great day😊!", { autoClose: 6000 })
function Trials() {

    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);
    const [one] = useState(1);
    const [two] = useState(2);
    const [three] = useState(3);
    const [four] = useState(4);
    const [five] = useState(5);
    const [six] = useState(6);
    const [seven] = useState(7);
    const [eight] = useState(8);
    const [nine] = useState(9);
    const [zero] = useState(0);
    const [decimal] = useState(".")
    const [result, setResult] = useState("");
    const [status, setStatus] = useState(0);
    const [final, setFinal] = useState(0);

    let previousValue = parseInt(previous);
    let calculatingValue = parseInt(value);
    let previousValueFloat = parseFloat(previous);
    let calculatingValueFloat = parseFloat(value);

    const handleOne = () => {
        if (value === 0) {
            setValue(one);
        }
        if (value > 0) {
            setValue(`${value}` + one);
            parseInt(value);
        }
    }

    const handleTwo = () => {
        if (value === 0) {
            setValue(two);
        }
        if (value > 0) {
            setValue(`${value}` + two);
            parseInt(value);
        }
    }

    const handleThree = () => {
        if (value === 0) {
            setValue(three);
        }
        if (value > 0) {
            setValue(`${value}` + three);
            parseInt(value);
        }
    }

    const handleFour = () => {
        if (value === 0) {
            setValue(four);
        }
        if (value > 0) {
            setValue(`${value}` + four);
            parseInt(value);
        }
    }

    const handleFive = () => {
        if (value === 0) {
            setValue(five);
        }
        if (value > 0) {
            setValue(`${value}` + five);
            parseInt(value);
        }
    }

    const handleSix = () => {
        if (value === 0) {
            setValue(six);
        }
        if (value > 0) {
            setValue(`${value}` + six);
            parseInt(value);
        }
    }

    const handleSeven = () => {
        if (value === 0) {
            setValue(seven);
        }
        if (value > 0) {
            setValue(`${value}` + seven);
            parseInt(value);
        }
    }

    const handleEight = () => {
        if (value === 0) {
            setValue(eight);
        }
        if (value > 0) {
            setValue(`${value}` + eight);
            parseInt(value);
        }
    }

    const handleNine = () => {
        if (value === 0) {
            setValue(nine);
        }
        if (value > 0) {
            setValue(`${value}` + nine);
            parseInt(value);
        }
    }

    const handleZero = () => {
        setValue(`${value}` + zero);
    }

    const handleDecimal = () => {
        if (value > 0) {
            setResult(decimal);
            setValue(`${value}` + decimal);
            parseFloat(value);
        }
        if (value === 0) {
            setValue(value);
            parseFloat(value);
        }
    }

    const clearStuffPrevious = () => {
        setPrevious(0);
        parseInt(previous);
    }

    const clearBoth = () => {
        setValue(0);
        parseInt(value);
        setPrevious(0);
        parseInt(previous);
        setFinal(0);
        setResult("");
    }

    const clearStuffValue = () => {
        setValue(0);
        parseInt(value);
    }

    const handleSummation = () => {
        if (value === 0) {
            alert("Hello there! Please enter the calculating value. You have left it empty.")
        }
        else {
            // const final = parseInt(previous) + parseInt(value);
            // setPrevious(final);
            setPrevious(value);
            setValue(0);
            setStatus(1);
        }
        // commented out the LINE-136 to make the calculation look optimal by setting 
        // the prvious value and current value, onClick of the operations button. 
        // same reasons for the following statements on the lines - 138, 145, 152, 159 
        // setValue(final);  
    }

    const handleSubtraction = () => {
        if (value === 0) {
            alert("Hello there! Please enter the calculating value. You have left it empty.")
        }
        else {
            // const final = parseInt(previous) - parseInt(value);
            // setPrevious(final);
            setPrevious(value);
            setValue(0);
            setStatus(2);
            // setValue(final);
        }
    }

    const handleMultiplication = () => {
        if (value === 0) {
            alert("Hello there! Please enter the calculating value. You have left it empty.")
        }
        else {
            // const final = parseInt(previous) * parseInt(value);
            // setPrevious(final);
            setPrevious(value);
            setValue(0);
            setStatus(3);
            // setValue(final);
        }
    }

    const handleDivision = () => {
        if (value === 0) {
            alert("Hello there! Please enter the calculating value. You have left it empty.")
        }
        else {
            // const final = parseInt(previous) / parseInt(value);
            // setPrevious(final);
            setPrevious(value);
            setValue(0);
            setStatus(4);
            // setValue(final);
        }
    }

    const handleModulo = () => {
        if (value === 0) {
            alert("Hello there! Please enter the calculating value. You have left it empty.")
        }
        else {
            // const final = parseInt(previous) % parseInt(value);
            // setPrevious(final);
            setPrevious(value);
            setValue(0);
            setStatus(5);
            // setValue(final);
        }
    }

    const handlePower = () => {
        if (value === 0) {
            alert("Hello there! Please enter the calculating value. You have left it empty.")
        }
        else {
            // const final = parseInt(previous) ** parseInt(value);
            // setPrevious(final);
            setPrevious(value);
            setValue(0);
            setStatus(6);
            // setValue(final);
        }
    }

    // The above function is for saving the initial value to the previous value
    // to continue the calculation further. After setting the previous value, we
    // re-write the calculating value to "0" to give chance to enter new value. 
    // If the state of vaue is not set to "0", the numbering we are entering next
    // will get appended on the number that had already been there.

    const handleEqual = () => {
        if (status === 1) {
            // var add = previousValue + calculatingValue;
            if (result === decimal) {
                var addFloat = previousValueFloat + calculatingValueFloat;
                setFinal(addFloat.toFixed(4));
            }
            if (result === "") {
                var add = previousValue + calculatingValue;
                setFinal(add);
            }
            // setFinal(add);
            if (previous > 0 | value > 0) {
                setPrevious(value);
                setValue(final);
            }
        }
        if (status === 2) {
            // var sub = previousValue - calculatingValue;
            if (result === decimal) {
                var subFloat = previousValueFloat - calculatingValueFloat;
                setFinal(subFloat.toFixed(4));
            }
            if (result === "") {
                var sub = previousValue - calculatingValue;
                setFinal(sub);
            }
            // setFinal(sub);
            if (previous > 0 | value > 0) {
                // setFinal(sub)
                setPrevious(value);
                setValue(final);
            }
        }
        if (status === 3) {
            // var mul = previousValue * calculatingValue;
            if (result === decimal) {
                var mulFloat = previousValueFloat * calculatingValueFloat;
                setFinal(mulFloat.toFixed(4));
            }
            if (result === "") {
                var mul = previousValue * calculatingValue;
                setFinal(mul);
            }
            if (final > 0) {
                setValue(previous)
                setPrevious(final)
                var multiply = previousValue * final;
                setFinal(multiply);
            }
            // setFinal(mul);
            // if (previous > 0 | value > 0) {
            //     setValue(mul);
            //     setPrevious(value);
            //     var mul1 = value * mul;
            //     setFinal(mul1);
            // }
            // if (previous > 0 | value > 0) {
            //     setFinal(mul)
            //     // var mul1 = previous * final;
            //     if (final > 0) {
            //         setValue(previous)
            //         setPrevious(final)
            //         var multiply = previousValue * final;
            //         setFinal(multiply);
            //     }
            //     // setValue(previous);
            //     // setPrevious(final);
            // }
        }
        if (status === 4) {
            // var div = previousValue / calculatingValue;
            if (result === decimal) {
                var divFloat = previousValueFloat / calculatingValue;
                setFinal(divFloat.toFixed(4));
            }
            if (result === "") {
                var div = previousValue / calculatingValue;
                setFinal(div);
            }
            // setFinal(div);
            if (previous !== 0 | value !== 0) {
                setPrevious(value);
                setValue(final);
            }
        }
        if (status === 5) {
            // var mod = previousValue % calculatingValue;
            if (result === decimal) {
                var modFloat = previousValueFloat % calculatingValueFloat;
                setFinal(modFloat.toFixed(4));
            }
            if (result === "") {
                var mod = previousValue % calculatingValue;
                setFinal(mod);
            }
            // setFinal(mod);
            if (previous !== 0 | value !== 0) {
                setPrevious(value);
                setValue(final);
            }
        }
        if (status === 6) {
            // var pow = previousValue ** calculatingValue;
            if (result === decimal) {
                var powFloat = previousValueFloat ** calculatingValueFloat;
                setFinal(powFloat.toFixed(4));
            }
            if (result === "") {
                var pow = previousValue ** calculatingValue;
                setFinal(pow);
            }
            // setFinal(pow);
            if (value === 0 || value > 0) {
                setValue(pow);
                setPrevious(value);
                var pow1 = previous ** value;
                setFinal(pow1);
            }
        }
    }

    const handleCurrentValue = () => {
        setFinal(0);
    }

    useEffect(() => {
        setPrevious(JSON.parse(localStorage.getItem("previous")));
        setValue(JSON.parse(localStorage.getItem("value")));
        setFinal(JSON.parse(localStorage.getItem("final")));
    }, [])

    useEffect(() => {
        localStorage.setItem("previous", JSON.stringify(previous));
    }, [previous])

    useEffect(() => {
        localStorage.setItem("value", JSON.stringify(value));
        if (value === Infinity | value === isNaN) {
            setValue(alert("Hello there👋😃! Value cannot go beyond infinity😅. Click 'CLEAR ALL VALUES' to start the new calculation. Have a nice day😊!"));
        }
    }, [value])

    useEffect(() => {
        localStorage.setItem("final", JSON.stringify(final));
    }, [final])

    return (
        <div >
            <br />
            <h1
                style=
                {{
                    fontFamily: "Sansita Swashed"
                }}
            >
                Calculator With Numbers
            </h1>
            <h2 className="heading_2" >
                First Value =
                    <span
                    style=
                    {{
                        fontFamily: "Overlock"
                    }}
                > {previous}
                </span>
                        , Second Value =
                            <span
                    style=
                    {{
                        fontFamily: "Overlock"
                    }}
                > {value}
                </span>
            </h2>
            <button
                className="ripple"
                onClick={(e) => clearStuffPrevious(e)} >
                CLEAR FIRST VALUE
            </button>
            <button
                className="ripple"
                onClick={(e) => clearStuffValue(e)} >
                CLEAR SECOND VALUE
            </button>
            {/* <h2>Click on any operator to get the "Final Value" which will be = {value}</h2> */}
            {/* As per below statement concerns, the "value" constanly changes for calculatin purpose so it's named as new value */}
            <h2 className="heading_2">
                Current Value =
                    <span
                    style=
                    {{
                        fontFamily: "Overlock"
                    }}
                > {final}
                </span>
            </h2>
            <button
                className="ripple"
                onClick={(e) => handleCurrentValue(e)} >
                CLEAR CURRENT VALUE
            </button>
            <br /><br />
            <button
                className="ripple"
                onClick={(e) => handleOne(e)} >
                1
            </button>
            <button
                className="ripple"
                onClick={(e) => handleTwo(e)} >
                2
            </button>
            <button
                className="ripple"
                onClick={(e) => handleThree(e)} >
                3
            </button>
            <button
                className="ripple"
                onClick={(e) => handleFour(e)} >
                4
            </button>
            <button
                className="ripple"
                onClick={(e) => handleFive(e)} >
                5
            </button>
            <button
                className="ripple"
                onClick={(e) => handleSix(e)} >
                6
            </button>
            <button
                className="ripple"
                onClick={(e) => handleSeven(e)} >
                7
            </button>
            <button
                className="ripple"
                onClick={(e) => handleEight(e)} >
                8
            </button>
            <button
                className="ripple"
                onClick={(e) => handleNine(e)} >
                9
            </button>
            <button
                className="ripple"
                onClick={(e) => handleZero(e)} >
                0
            </button>
            <button
                className="ripple"
                onClick={(e) => handleDecimal(e)} >
                •
            </button>
            <br />
            <br />
            <button
                style=
                {{
                    fontSize: "25px",
                    fontWeight: "bolder",
                    fontFamily: "Overlock"
                }}
                className="ripple"
                onClick={(e) => handleSummation(e)} >
                +
            </button>
            <button
                style=
                {{
                    fontSize: "25px",
                    fontWeight: "bolder",
                    fontFamily: "Overlock"
                }}
                className="ripple"
                onClick={(e) => handleSubtraction(e)} >
                -
            </button>
            <button
                style=
                {{
                    fontSize: "25px",
                    fontWeight: "bolder",
                    fontFamily: "Overlock"
                }}
                className="ripple"
                onClick={(e) => handleMultiplication(e)} >
                *
            </button>
            <button
                style=
                {{
                    fontSize: "25px",
                    fontWeight: "bolder",
                    fontFamily: "Overlock"
                }}
                className="ripple"
                onClick={(e) => handleDivision(e)} >
                /
            </button>
            <button
                style=
                {{
                    fontSize: "25px",
                    fontWeight: "bolder",
                    fontFamily: "Overlock"
                }}
                className="ripple"
                onClick={(e) => handleModulo(e)} >
                %
            </button>
            <button
                style=
                {{
                    fontSize: "25px",
                    fontWeight: "bolder",
                    fontFamily: "Overlock"
                }}
                className="ripple"
                onClick={(e) => handlePower(e)} >
                **
            </button>
            <button
                style=
                {{
                    fontSize: "25px",
                    fontWeight: "bolder",
                    fontFamily: "Overlock"
                }}
                className="ripple"
                onClick={(e) => handleEqual(e)} >
                =
            </button>
            <br />
            <br />
            {/* The below button is not required because we're saving the new value in previous value. that is setting the new value to the
                state of previous value */}
            {/* <button className="ripple" onClick={(e) => handleDisplay(e)} >SAVE PREVIOUS VALUE</button> */}
            <button
                className="ripple"
                onClick={(e) => clearBoth(e)} >
                CLEAR ALL VALUES
            </button>
        </div>
    )
}

export default Trials;
