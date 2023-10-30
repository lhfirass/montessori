import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from "react-bootstrap";

const ShitFile = () => {
    let [color, setColor] = useState('red');
    let handleClick = (color) => {
        setColor(color)
    }
    return ( 
        <>
            <Button variant="warning" size="sm">shit content</Button>
        </>
    );
}

export default ShitFile;