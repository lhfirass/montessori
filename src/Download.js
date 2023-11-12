import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Modal} from 'react-bootstrap';
import { useState } from 'react';

const Download = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( 
        <>
            <div className="sectionContainer Download">
                <p className="sectionTitle">
                روابط التحميل
                </p>
                <p className="sectionSubTitle">
                “وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم”
                </p>
                <Row className="booksList">
                    <Col sm><img src="pictures/01.png" alt="" onClick={handleShow}/></Col>
                    <Col sm><img src="pictures/02.png" alt="" onClick={handleShow}/></Col>
                    <Col sm><img src="pictures/03.png" alt="" onClick={handleShow}/></Col>
                    <Col sm><img src="pictures/04.png" alt="" onClick={handleShow} /></Col>
                    <Col sm><img src="pictures/05.png" alt="" onClick={handleShow}/></Col>
                    <Col sm><img src="pictures/06.png" alt="" onClick={handleShow}/></Col>
                    <Col sm><img src="pictures/07.png" alt="" onClick={handleShow}/></Col>
                </Row>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Body>variable</Modal.Body>
                </Modal>
                <Button variant='secondary'>السلسلة كاملة</Button>
            </div>
        </>
    );
}
export default Download;