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
            <img onClick={toggleModal} src="books/1.png" alt="math1" />
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <motion.div >
                        <div className="modal-content">
                            <button onClick={toggleModal} className="close-modal">close</button>
                            <h2>مونتيسوري التربية الحسية</h2>
                            <p>يولد جميع الأطفال بنفس مستوى الإحساس لكن مع النمو والتطور نجد إختلاف على مستوى الادراك من شخص لآخر، فالبعض يمتاز بقدرة على الفهم والتحليل بشكل أفضل يتميز هؤلاء بقوة الملاحظة ،إلا أن هذا الإدراك لا يكون جاهز من الولادة بل يتطور كلما استخدمت الحواس بشكل أفضل . تساعد أنشطة مونتيسوري الحسية على رفع القدرة الإدراكية عمدا للطفل من خلال تنمية حواسه السمع والرؤية واللمس والشم والتذوق. باستخدام مواد المجهزة خصيصًا فتساعد في تنمية الطفل بأكمله.

عدد الصفحات 70.</p>
                        </div>
                        </motion.div>
                    </div>
            )}
        </>
        
    )
}

export default Modal;