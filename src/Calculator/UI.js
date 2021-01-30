import React from 'react';

function UI(props) {
    const {
        sum,
        subtract,
        multiply,
        division,
        modulo,
        power,
        handleSum,
        handleSubtract,
        handleMultiply,
        handleDivision,
        handleModulo,
        handlePower,
        number,
        handleClear
    } = props;
    return (
        <div>
            <h2
                style=
                {{
                    color: "#24562B",
                    fontFamily: "Philosopher"
                }}
            > Total Value:
                    <span
                    style=
                    {{
                        color: "black",
                        fontFamily: "Overlock"
                    }}
                >
                    {number}
                </span>
            </h2>
            <h2
                style=
                {{
                    color: "#24562B",
                    fontFamily: "Philosopher"
                }}
            >Add:
                ( <span
                    style=
                    {{
                        color: "black",
                        fontFamily: "Overlock"
                    }}
                >
                    {sum}
                </span> )
                to the total value
            </h2>
            <h2
                style=
                {{
                    color: "#24562B",
                    fontFamily: "Philosopher"
                }}
            >Subtract:
                ( <span
                    style=
                    {{
                        color: "black",
                        fontFamily: "Overlock"
                    }}
                >
                    {subtract}
                </span> )
                from the total value
            </h2>
            <h2
                style=
                {{
                    color: "#24562B",
                    fontFamily: "Philosopher"
                }}
            >Multiply:
                ( <span
                    style=
                    {{
                        color: "black",
                        fontFamily: "Overlock"
                    }}
                >
                    {multiply}
                </span> )
                to the total value
            </h2>
            <h2
                style=
                {{
                    color: "#24562B",
                    fontFamily: "Philosopher"
                }}
            >Divide:
                ( <span
                    style=
                    {{
                        color: "black",
                        fontFamily: "Overlock"
                    }}
                >
                    {division}
                </span> )
                to the total value
            </h2>
            <h2
                style=
                {{
                    color: "#24562B",
                    fontFamily: "Philosopher"
                }}
            >Modulo:
                ( <span
                    style=
                    {{
                        color: "black",
                        fontFamily: "Overlock"
                    }}
                >
                    {modulo}
                </span> )
                to the total value
            </h2>
            <h2
                style=
                {{
                    color: "#24562B",
                    fontFamily: "Philosopher"
                }}
            >Power:
                ( <span
                    style=
                    {{
                        color: "black",
                        fontFamily: "Overlock"
                    }}
                >
                    {power}
                </span> )
                to the total value
            </h2>
            <button
                style=
                {{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    fontFamily: "Overlock"
                }}
                className="ripple"
                onClick={(e) => handleSum(e)} >
                +
            </button>
            <button
                style=
                {{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    fontFamily: "Overlock"
                }}
                className="ripple"
                onClick={(e) => handleSubtract(e)} >
                -
            </button>
            <button
                style=
                {{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    fontFamily: "Overlock"
                }}
                className="ripple"
                onClick={(e) => handleMultiply(e)} >
                *
            </button>
            <button
                style=
                {{
                    fontSize: "20px",
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
                    fontSize: "20px",
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
                    fontSize: "20px",
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
                    fontSize: "20px",
                    fontWeight: "bolder",
                    fontFamily: "Overlock"
                }}
                className="ripple"
                onClick={(e) => handleClear(e)} >
                CLEAR
            </button>
        </div>
    )
}

export default UI;
// const [two, setTwo] = useState(0);
// const [three, setThree] = useState(0);
// const [four, setFour] = useState(0);
// const [five, setFive] = useState(0);
// const [six, setSix] = useState(0);
// const [seven, setSeven] = useState(0);
// const [eight, setEight] = useState(0);
// const [nine, setNine] = useState(0);

// const handleOne = () => {
//     setOne(1);
// }


// const handleTwo = () => {
//     setTwo(2);
// }


// const handleThree = () => {
//     setThree(3);
// }


// const handleFour = () => {
//     setFour(4);
// }


// const handleFive = () => {
//     setFive(5);
// }


// const handleSix = () => {
//     setSix(6);
// }


// const handleSeven = () => {
//     setSeven(7);
// }


// const handleEight = () => {
//     setEight(8);
// }


// const handleNine = () => {
//     setNine(9);
// }


// {one}
// {two}
// {three}
// {four}
// {five}
// {six}
// {seven}
// {eight}
// {nine}
// {number}