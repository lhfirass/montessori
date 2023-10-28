import Modal from './components/Modal';
import Modal2 from './components/Modal2';
import Modal3 from './components/Modal3';
import Modal4 from './components/Modal4';
import Modal5 from './components/Modal5';
import Modal6 from './components/Modal6';
import Modal7 from './components/Modal7';
const About = () => {
    return ( 
        <section className="about">
            <div className="text">
                <p className="t1">من نحن</p>
                <p className="t2">ألبومات مونتيسوري بالعربي للأستاذة رحمة عبد الباقي
هذه السلسلة تجمع مجهوداتي لتسهيل رحلتكم مع تعليم الأطفال بأسلوب مونتيسوري. تجدون في كل كتاب شرحاً مفصلاً لهدف معين وأهميته في تطوير مهارات الطفل، مع أمثلة توضيحية للأنشطة. كما يشمل الكتاب صوراً توضيحية للنشاطات لمساعدتكم في تنفيذها بسهولة.</p>
            </div>
            <div className="books">
                <Modal />
                <Modal2 />
                <Modal3 />
                <Modal4 />
                <Modal5 />
                <Modal6 />
                <Modal7 />
            </div>
        </section>
    );
}

export default About;