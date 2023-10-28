import React, { useState } from 'react';
import './MyButton.css'

const MyButton = ({ text, color, backgroundColor, onClick }) => {
const [state, setState] = useState({
    text,
    color,
    backgroundColor,
});

const handleChangeText = (event) => {
    setState({
    ...state,
    text: event.target.value,
    });
};

const handleChangeColor = (event) => {
    setState({
    ...state,
    color: event.target.value,
    });
};

const handleChangeBackgroundColor = (event) => {
    setState({
    ...state,
    backgroundColor: event.target.value,
    });
};

return (
    <button className='f-btn'
style={{
        color,
        backgroundColor,
    }}
    onClick={onClick}
    >
    {text}
    </button>
);
};

export default MyButton;
