import { useNavigate } from 'react-router-dom'
import { useContext, useState } from "react";
import { UserContext } from '../context/context';

import styled from "styled-components";
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";

import { 
    ButtonBlack,
    ButtonClose
} from "../styles/Button";

import { BsTwitter } from "react-icons/bs";

const ErrorText = styled.p`
    font-size: 10px;
    color: red;
    padding-left: 10px;
`

const ModalLogin = (props) => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    const [ validated, setValidated ] = useState(false)
 
    const formik = useFormik({
        initialValues: {
          email: "benoit@benoit.io",
          password: "temptemp"
        },
        onSubmit: values => {
          login(values)
        },
        validateOnChange: false,
        validationSchema: Yup.object({
          email: Yup.string()
            .required("Une adresse email est requise"),
          password: Yup.string()
            .required("Un mot de passe est requis")
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
          setValidated(true) 
        } else {
          alert(response.statusText)
        }
    
      }
      console.log(formik.errors.password)
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
                <Form 
                  onSubmit={formik.handleSubmit} 
                  validated={validated}
                >
                  <ModalBody>
                    <FormGroup
                      controlId="emailInput"
                    >
                      <FormControl
                        type="email" 
                        name='email'
                        className="mt-5 mb-1" 
                        placeholder="Adresse email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.email}
                        isValid={validated}
                      />
                      {/* {user && <p>Email valide</p>}
                      {!user && <ErrorText>Email invalide</ErrorText>} */}
                    </FormGroup>
                    <FormGroup
                      controlId="passwordInput"
                    >
                      <FormControl
                        type="password" 
                        name='password'
                        className="mt-5 mb-1" 
                        placeholder="Mot de passe"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.password}
                        isValid={validated}
                      />
                      {!validated && 
                      <Form.Control.Feedback type="invalid">
                          Mot de passe invalide
                      </Form.Control.Feedback>
                      }
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
                </Form>
            </Modal>
        </>
    )
}
export default ModalLogin