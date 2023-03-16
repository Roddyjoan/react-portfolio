import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage(){

    const [showModal, setShowModal] = useState(false);

    const handleClick = ()=>{
        setShowModal(true);
        console.log('click')
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const acceptButton = <div>
        <Button danger onClick={handleClose}>I accept </Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={acceptButton}> 
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>;
    return <div>
        <Button primary onClick={handleClick} >Open modal</Button> 
        {showModal && modal}
    </div>}


export default ModalPage;