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
            <img onClick={toggleModal} src="books/3.png" alt="math1" />
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <motion.div >
                        <div className="modal-content">
                            <button onClick={toggleModal} className="close-modal">close</button>
                            <h2>مونتيسوري الحياة العملية</h2>
                            <p>

يتضمن ألبوم الحياة العملية على أكثر من 96 نشاطًا! ترشد يرشد ألبوم الحياة العملية الطفل إلى كيفية الاعتناء بنفسه وبالعالم من حوله. تعتبر هذه العروض التقديمية مهمة أيضًا لأنها تجهز اليد حتى يتمكن الطفل من تعلم الكتابة والتعامل مع الأشياء. تشمل هذه العروض: تمارين النعمة والمجاملة، اليد الكاملة، تدوير المعصم، الإمساك بثلاثة أصابع، العناية بالبيئة الداخلية، العناية بالبيئة الخارجية، العناية بالنفس، تحضير القطع، تحضير الكتابة، إعداد الطعام، الأعمال اليدوية.

عدد الصفحات 87.
</p>
                        </div>
                        </motion.div>
                    </div>
            )}
        </>
        
    )
}

export default Modal;