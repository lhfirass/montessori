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
            <img onClick={toggleModal} src="books/7.png" alt="math1" />
            {/* this method like i understand it always checks the status of a boolean */};
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <motion.div >
                        <div className="modal-content">
                            <button onClick={toggleModal} className="close-modal">close</button>
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod non asperiores et dicta. A quisquam natus repudiandae, quibusdam minima inventore fugiat commodi blanditiis.</p>
                        </div>
                        </motion.div>
                    </div>
            )};
        </>
        
    );
}

export default Modal;