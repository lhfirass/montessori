import { useState } from "react";
import "./Modal.css";

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
            <img onClick={toggleModal} src="books/7.png" alt="math1" />
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    
                        <div className="modal-content">
                            <button onClick={toggleModal} className="close-modal">close</button>
                            <h2> مونتيسوري الرياضيات - الجزء الأول </h2>
                            <p>ربما يتفق الأغلبية على أن مادة الرياضيات هي من أصعب المواد في المسار الدراسي إلا أن الرياضيات المونتيسوري مممتعة للغاية بل تجعل الطفل يتعلق بالرياضيات من خلال تطوير مهاراته الرياضية عن طريق اللعب بأدوات شيقة تجعل تعلمها مسليا يكتسب من خلالها مفاهيم مثل القيمة المكانية والترقيم والكسور والنظام العشري والعمليات البسيطة الجمع ، الضرب ،الطرح والقسمة…يتم ترتيب جميع الأنشطة في ركن الرياضيات بالمونتيسوري من البسيط إلى المعقد ، ومن الملموس إلى المجرد.</p>
                        </div>
                        
                    </div>
            )}
        </>
        
    )
}

export default Modal;