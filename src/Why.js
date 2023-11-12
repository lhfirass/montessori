import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Modal} from 'react-bootstrap';
import { useState } from 'react';
const Why = () => {
    return ( 
        <>
            <div className="sectionContainer Why">
                <Row>
                    <Col className='Col'>تعتقد مونتيسوري أنه في فترة العقل الممتص (من الولادة إلى 6 سنوات)، تكون متعة التعلم أكثر وضوحًا وأقل جهدًا من أي مرحلة أخرى من الحياة. ومن خلال الفضول الطبيعي يستوعب الطفل المعلومات ويستوعبها بحواسه ويبني معرفته الخاصة.</Col>
                    <Col className='Col'>تمنح طريقة مونتيسوري التعليمية للأطفال الذين تتراوح أعمارهم بين 3 و6 سنوات فرصًا فريدة للتعلم بشكل أكثر شمولاً وسرعة وكفاءة من خلال الخبرة والتوجيه والممارسة.</Col>
                    <Col className='Col'>يعد معلم مونتيسوري بمثابة الرابط الديناميكي للبيئة، حيث يوفر سياقًا سلميًا ومنظمًا ورعاية لدعم التعلم وتطوير المهارات التي يتم صقلها بطبيعتها في هذه الفترة المهمة من التطوير. كل الطرق تشير إلى الاستقلال والاتصال النشط بالعالم.</Col>
                </Row>
                <Row>
                    <Col className='Col'>تتبنى سلسلة ألبومات مونتيسوري بالعربي هذه الفلسفة وتوفر لك من خلال كل كتاب منها فهمًا سلسا لفلسفة ومنهجية مونتيسوري من حيث صلتها بالأطفال في الفئة العمرية	3-6 سنوات، تتعلم كيفية توجيه الطفل بأكمله نحو إمكاناته التعليمية الحقيقية من خلال إعداد بيئة تعزز منهجًا ملموسًا وعمليًا للتعلم.</Col>
                    <Col className='Col'>مع ألبومات مونتيسوري بالعربي يمكنك تطوير فهم أساسي لأركان منهج مونتيسوري والأنشطة المقدمة بها تؤهلك لدعم اهتمام الطفل بالتعلم أثناء بناء مهاراته ومعرفته.</Col>
                    <Col></Col>
                </Row>
                <Button variant='secondary'>المزيد عن المؤلفة</Button>
            </div>
        </>
    );
}

export default Why;