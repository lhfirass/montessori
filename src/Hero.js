import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button} from 'react-bootstrap';

const Hero = () => {
    return ( 
        <>
            <div className="containerHero">
                <div className="message">
                    <p className="heading">ألبومات مونتيسوري بالعربي</p>
                    <p className="subHeading">كن ممارسا لمونتيسوري من الآن و ضع الأساس لحب التعلم مدى الحياة.</p>
                    <div className="btns">
                        <Button variant='danger'>تحميل مختصر</Button>
                        <Button variant='warning'>للتواصل</Button>
                    </div>
                </div>
                <div>
                    <img src="hero-pic.png" alt="" className="heroPic" />
                </div>
            </div>
        </>
    );
}

export default Hero;