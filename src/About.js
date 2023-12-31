import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Modal} from 'react-bootstrap';
import { useState } from 'react';
const About = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return ( 
        <>
            <div className="sectionContainer">
                <p className="sectionTitle">
                ما هي ألبومات مونتيسوري بالعربي
                </p>
                <p className="sectionSubTitle">
                ألبومات مونتيسوري بالعربي للأستاذة رحمة عبد الباقي
هذه السلسلة تجمع مجهوداتي لتسهيل رحلتكم مع تعليم الأطفال بأسلوب مونتيسوري. تجدون في كل كتاب شرحاً مفصلاً لهدف معين وأهميته في تطوير مهارات الطفل، مع أمثلة توضيحية للأنشطة. كما يشمل الكتاب صوراً توضيحية للنشاطات لمساعدتكم في تنفيذها بسهولة.
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
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>variable</Modal.Body>
            </Modal>
        </>
    );
}

export default About;