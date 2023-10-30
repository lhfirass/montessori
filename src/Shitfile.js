import { useState, useEffect } from "react";
const ShitFile = () => {
    let [color, setColor] = useState('red');
    let handleClick = (color) => {
        setColor(color)
    }
    return ( 
        <>
            <div className="prd">
                <span className="prd" id={color}></span>
            </div>
            <button onClick={() => handleClick("red")}>
                <span id="red"></span>
            </button>
            <button onClick={() => handleClick("blue")}>
                <span id="blue"></span>
            </button>
            <button onClick={() => handleClick("green")}>
                <span id="green"></span>
            </button>
        </>
    );
}

export default ShitFile;