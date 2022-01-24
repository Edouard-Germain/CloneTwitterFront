import styled from "styled-components";
import {AiOutlineClose} from 'react-icons/ai';
import FormSignup from '../forms/FormSignup'

import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

import { 
    ButtonClose
} from "../../styles/Button";

import { BsTwitter } from "react-icons/bs";

const ErrorText = styled.p`
    font-size: 10px;
    color: red;
    padding-left: 10px;
`

const ModalSignup = (props) => {
 
  return (
    <>
      <Modal 
        show={props.show} 
        onHide={props.handleClose}
      >
        <ModalHeader className="d-flex justify-content-start">
          <ButtonClose
              onClick={props.handleClose}
          >
              <AiOutlineClose/>
          </ButtonClose>
          <div style={{marginLeft:'30%'}}>
            <BsTwitter 
                color="rgb(29, 155, 240)" 
                fontSize="2.5em"
            />
          </div>
          </ModalHeader>
          <ModalTitle className="mt-4 text-center">S'inscrire</ModalTitle>
          <ModalBody>
            <FormSignup/>
          </ModalBody>
      </Modal>
    </>
  )
}
export default ModalSignup