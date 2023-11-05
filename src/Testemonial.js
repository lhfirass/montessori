import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from "react-bootstrap";

const Testemonial = () => {
    return ( 
        <>  
            <section className="client"> 
                <p className="tstHeader">أراء العملاء</p>
                <Container className='content'>
                    <Row className='r'>
                        <Col sm><p>أحسن مجموعة كتب من حيث الاخراج و الجودة مبارك عليكم الجزء الثاني، أسأل الله لكم التوفيق و انجاز أعمال أخرى إن شاء الله.
الطيار الصغير المبتسم.</p></Col>
                        <Col sm><p>وصلتني طلبيتي، كتب جد قيمة رائعة فعلا شكرا جزيلا بارك الله فيك.
أميرة</p></Col>
                    </Row>

                    <Row className='r'>
                        <Col sm><p>رائعة و الله استفدت بطريقة مبهرة، أكملت قراءة و فهم كتاب فلسلفة مونتيسوري، و حابة نكملهم كامل، روعة المحتوى و جودة الطباعة.
أسماء.</p></Col>
                        <Col sm><p>سلسلة كتب ممتازة مليئة بالتفكير القوي و أمثلة لما يبدو عليه التعليم حقا، قراءة ثاقبة للغاية خول ما يستلزمه التعليم الحقيقي.
أم لينة.</p></Col>
                    </Row>
                </Container>
            </section>
        </>

    );
}

export default Testemonial;