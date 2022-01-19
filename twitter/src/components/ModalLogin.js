import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { UserContext } from '../context/context';

// import styled from "styled-components";
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
// import FormControlFeedback from "react-bootstrap/FormControlFeedback";


import { 
    ButtonBlack,
    ButtonClose
} from "../styles/Button";

import { BsTwitter } from "react-icons/bs";


const ModalLogin = (props) => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
          email: "",
          password: ""
        },
        onSubmit: values => {
          login(values)
        },
        validateOnChange: false,
        validationSchema: Yup.object({
          email: Yup.string()
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
        })
    })

    const login = async values => {
        const response = await fetch('http://localhost:5000/auth/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(values)
        })

        const user = await response.json()
        console.log(user)
    
        if (user) {
          setUser(user)
          navigate('/home')
        } else {
          alert(response.statusText)
        }
    
      }

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
                  X
                </ButtonClose>
                <div style={{marginLeft:'40%'}}>
                  <BsTwitter 
                      color="rgb(29, 155, 240)" 
                      fontSize="2.5em"
                  />
                </div>
                </ModalHeader>
                <ModalTitle className="mt-4 text-center">Se connecter</ModalTitle>
                <form onSubmit={formik.handleSubmit}>
                  <ModalBody>
                    <FormGroup
                      controlId="validationFormikEmail"
                    >
                      <FormControl
                        type="email" 
                        name='email'
                        className="my-5" 
                        id="emailInput" 
                        placeholder="Adresse email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        isValid={formik.errors.email}
                      />
                      {/* <FormControlFeedback type="invalid" tooltip>
                        {formik.errors.email}
                      </FormControlFeedback> */}
                    </FormGroup>
                    <FormGroup
                      controlId="validationFormikPassword"
                    >
                      <FormControl
                        type="password" 
                        name='password'
                        className="my-5" 
                        id="passwordInput" 
                        placeholder="Mot de passe"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        isValid={formik.errors.password}
                      />
                      {/* <FormControlFeedback type="invalid" tooltip>
                        {formik.errors.password}
                      </FormControlFeedback> */}
                    </FormGroup>
                  </ModalBody>
                  <ModalFooter className="mt-5">
                    <ButtonBlack  
                      className="my-3" 
                      type='submit'
                    >
                        Valider
                    </ButtonBlack>
                  </ModalFooter>
                </form>
            </Modal>
        </>
    )
}
export default ModalLogin