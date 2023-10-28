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
            <img onClick={toggleModal} src="books/5.png" alt="math1" />
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <motion.div >
                        <div className="modal-content">
                            <button onClick={toggleModal} className="close-modal">close</button>
                            <h2>مونتيسوري اللغة العربية </h2>
                            <p>

يبدأ تطور اللغة لدى الطفل منذ الولادة، وحسب الدكتورة ماريا مونتيسوري منذ الولادة وحتى سن السادسة يكون الطفل في مرحلة العقل الممتص. يمتص الطفل اللغة من أي بيئة يتواجد فيها. تعمل أدوات وأنشطة تعلم اللغة العربية بكتاب مونتيسوري اللغة العربية و المجهزة خصيصًا على تعزيز تعلم اللغة وتطوير مهارة الكتابة والقراءة لدى الطفل بطريقة مسلية وبأقل جهد.

عدد الصفحات 62. 
</p>
                        </div>
                        </motion.div>
                    </div>
            )}
        </>
        
    )
}

export default Modal;