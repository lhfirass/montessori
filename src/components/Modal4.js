import { useState } from "react";
import "./Modal.css";
import { motion, useAnimation  } from "framer-motion";

const Modal = () => {
    const [modal, setModal] = useState(false);
    // ? reverse the status of a modal.... (i need to undertand this more)..
    // I can assue this is a one way function so when modal is closed, it will be opened .
    const toggleModal = () => {
        setModal(!modal);
    }
    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }
    
    return ( 
        <>
            <img onClick={toggleModal} src="books/4.png" alt="math1" />
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <motion.div >
                        <div className="modal-content">
                            <button onClick={toggleModal} className="close-modal">close</button>
                            <h2>فلسفة مونتيسوري</h2>
                            <p>

ماريا مونتيسيري ، المولودة عام 1870 ، كانت أول طبيبة في إيطاليا. درست أيضا علم النفس والانثربولوجيا كانت ماري مونتيسوري رائدة في طريقة جديدة لتعليم الأطفال ، حيث ابتعدت عن أساليب التدريس التقليدية القائمة على الأقسام الدراسية إلى التعلم من خلال تسخير الطبيعة الفضولية الطبيعية للطفل وتعليمه من خلال اللعب. انتشر هذا المنهج الرائع في جميع القارات منذ بداية القرن العشرين . تعرف أكثر عن فلسفة ماريا مونتيسوري من خلال هذا الكتاب.

عدد الصفحات 45
</p>
                        </div>
                        </motion.div>
                    </div>
            )}
        </>
        
    )
}

export default Modal;