import { useContext, useState } from "react";
import { UserContext } from '../../context/context';

import Modal from 'react-bootstrap/Modal';
import {AiOutlineClose} from 'react-icons/ai';

import { 
    ButtonClose,
} from "../../styles/Button";

import InputTweet from "../../components/inputs/InputTweet";

const ModalTweet = (props) => {
    const { 
        showTweet,
        handleCloseTweet,
    } = useContext(UserContext)

    
    return (
        <div>
            <Modal 
                show={showTweet} 
                onHide={handleCloseTweet}
            >
                <div className="d-flex justify-content-start">
                <ButtonClose
                    onClick={props.handleClose}
                >
                    <AiOutlineClose/>
                </ButtonClose>
                </div>
                <Modal.Body>
                    <InputTweet/> 
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalTweet;