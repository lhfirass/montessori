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
            <img onClick={toggleModal} src="books/6.png" alt="math1" />
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <motion.div >
                        <div className="modal-content">
                            <button onClick={toggleModal} className="close-modal">close</button>
                            <h2>مونتيسوري الرياضيات - الجزء الثاني</h2>
                            <p>ربما تعلم معظمنا الرياضيات في المدرسة من خلال حفظ الخطوات المطلوبة لحل مشكلة ما على سبيل المثال عند تعلم ” مبدأ الاستعانة أو الإستلاف” في الطرح تعلمنا أن نقطع رقما واحدا ونكتب رقما آخر فوقه ، ونضيف رقما صغيرا واحدا أمام الرقم الموجود على يمينه ثم نتابع المسألة .

تعلم الكثير منا كيفية القيام بذلك دون أن نفهم حقا سبب قيامنا به أو مايعنيه. لكن بالنسبة لطلاب مونتيسوري ، تمثل هذه الرموز الرياضية أفكارا ملموسة جدا يتم التلاعب بها جسديا ، فهم يفهمون تماما ما يقصدونه وكيف يعملون ولماذا .

من خلال كتاب_مونتيسوري_الرياضيات_الجزء_الثاني يتدرب الطفل أكثر على العمليات الحسابية فيتقدم تدريجياً لإستكشاف تركيبات كل عملية حسابية بشكل ملموس ويستمر في التقدم نحو مواد اقل صلابة من أجل حفظ وإتقان حقائق الجمع والطرح وجداول الضرب والقسمة ، فيصير بإمكانه القيام بعمليات حسابية كبيرة وصولا إلى الكسور العددية .

عدد الصفحات 89


</p>
                        </div>
                        </motion.div>
                    </div>
            )}
        </>
        
    )
}

export default Modal;