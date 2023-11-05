import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from './components/Modal';
import Modal2 from './components/Modal2';
import Modal3 from './components/Modal3';
import Modal4 from './components/Modal4';
import Modal5 from './components/Modal5';
import Modal6 from './components/Modal6';
import Modal7 from './components/Modal7';

const Download = () => {
    return ( 
        <section className="downlaod">
            <Row>
                <p>روابط التحميل</p>
                <p>“وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم”</p>
            </Row>
            <Row className='flex-nowrap'>
                <Col sm> <Modal /> </Col>
                <Col sm> <Modal2 /> </Col>
                <Col sm> <Modal3 /></Col>
                <Col sm> <Modal4 /></Col>
                <Col sm> <Modal5 /></Col>
                <Col sm> <Modal6 /></Col>
                <Col sm> <Modal7 /></Col>
            </Row>
        </section>
    );
}

export default Download;