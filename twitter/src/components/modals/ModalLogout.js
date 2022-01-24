import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from '../../context/context';

import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";


import { 
    ButtonBlack,
    ButtonWhite,
} from "../../styles/Button";

import { BsTwitter } from "react-icons/bs";


const ModalLogout = (props) => {

  const { 
    showLogout,
    handleLogout,
    handleCloseLogout,
  } = useContext(UserContext)

    return (
    <>
        <Modal 
          show={showLogout} 
          onHide={handleCloseLogout}
        >
          <ModalHeader className="d-flex justify-content-start">
            {/* <div style={{marginLeft:'50%'}}> */}
              <BsTwitter 
                  color="rgb(29, 155, 240)" 
                  fontSize="2.5em"
                  style={{marginLeft:'50%'}}
              />
            {/* </div> */}
            </ModalHeader>
            <ModalTitle className="mt-4 text-center">Log out of Twitter?</ModalTitle>
              <ModalBody>
                    <p>You can always log back in at any time. 
                        If you just want to switch accounts, you can do that by adding an existing account
                    </p>
              </ModalBody>
              <ModalFooter className="mt-5">
                <ButtonBlack  
                  className="my-3" 
                  type='submit'
                  onClick={handleLogout}
                >
                    Log out
                </ButtonBlack>
                <ButtonWhite  
                  className="my-3" 
                  type='submit'
                  onClick={handleCloseLogout}
                >
                    Cancel
                </ButtonWhite>
              </ModalFooter>
        </Modal>
    </>
  )
}
export default ModalLogout