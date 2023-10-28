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
            <img onClick={toggleModal} src="books/2.png" alt="math1" />
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <motion.div >
                        <div className="modal-content">
                            <button onClick={toggleModal} className="close-modal">close</button>
                            <h2>الثقافيات</h2>
                            <p>

ركن الثقافيات في المونتيسوري متنوع ومثير للاهتمام للغاية يشتمل كتاب مونتيسوري الثقافيات عدة اقسام : علم النبات وعلم الحيوان والجغرافيا والتاريخ والتجارب العلمية. الهدف منها إثارة اهتمام الطفل بالطبيعة وغرس فيه قيمة احترام أجزاءها، فمن خلال الأنشطة المذهلة يجيب بنفسه عن العديد من التساؤلات المحيطة به وتشعل فيه الرغبة في الإستكشاف والبحث و معرفة المزيد عن العالم من حوله، تنطلق من مواد حسية ملموسة لتنتهي بأدوات ومفاهيم مجردة فعقل العالم يصنع ولا يلقن.

عدد الصفحات 125.
</p>
                        </div>
                        </motion.div>
                    </div>
            )}
        </>
        
    )
}

export default Modal;