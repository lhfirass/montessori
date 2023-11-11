import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button} from 'react-bootstrap';

const Hero = () => {
    return ( 
        <>
            <Container>
                <Row>
                    <Col sm>
                        <p>Title one</p>
                        <p>Subtitle</p>
                        <Row>
                            <Col>
                                <Button>btn red</Button>
                            </Col>
                            <Col>
                                <Button>btn yellow</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm>
                        <img className='HeroPic' src="hero-pic.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Hero;