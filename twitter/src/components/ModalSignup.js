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

const ModalSignup = (props) => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    const [ validated, setValidated ] = useState(false)
 
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
          passwordConfirmation: "",
          username:"",
          name:"",
          picture:"",
          bio:"",
          website:"",
        },
        onSubmit: values => {
          login(values)
        },
        validateOnChange: false,
        validationSchema: Yup.object({
          email: Yup.string()
            .required("Une adresse email est requise."),
          password: Yup.string()
            .required("Un mot de passe est requis."),
          passwordConfirmation: Yup.string()
          .required("Veuillez confirmer votre mot de passe."),
          username: Yup.string()
          .required("Un nom d'utilisateur est requis."),
        })
    })

    const login = async values => {
        const response = await fetch('http://localhost:5000/auth/signup', {
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
                <ModalTitle className="mt-4 text-center">S'inscrire</ModalTitle>
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
                          Mot de passe non valide
                      </Form.Control.Feedback>
                      }
                    </FormGroup>
                    <FormGroup
                      controlId="passwordConfirmationInput"
                    >
                      <FormControl
                        type="password" 
                        name='passwordConfirmation'
                        className="mt-5 mb-1" 
                        placeholder="Confirmez votre mot de passe"
                        value={formik.values.passwordConfirmation}
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.passwordConfirmation}
                        isValid={validated}
                      />
                    </FormGroup>
                    
                    <FormGroup
                      controlId="usernameInput"
                    >
                      <FormControl
                        type="text" 
                        name='username'
                        className="mt-5 mb-1" 
                        placeholder="Nom d'utilisateur"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.username}
                        isValid={validated}
                      />
                    </FormGroup>
                    <FormGroup
                      controlId="pictureFileInput"
                    >
                      <FormControl
                        type="file"
                        name='pictureUrl'
                        className="mt-5 mb-1" 
                        placeholder="Photo de profil"
                        value={formik.values.picture}
                        onChange={formik.handleChange}
                        // isInvalid={formik.errors.p}
                        // isValid={validated}
                      />
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
export default ModalSignup