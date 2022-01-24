import { useNavigate } from 'react-router-dom'
import { useContext, useState } from "react";
import { UserContext } from '../../context/context';

import { useFormik } from 'formik'
import * as Yup from 'yup'

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { 
    ButtonBlack,
} from "../../styles/Button";


const FormSignup = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const [ isValid, setIsValid ] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirmation: "",
            username:"",
            name:"",
            pictureUrl:"",
        },
        onSubmit: values => {
            signup(values)
        },
        validateOnChange: false,
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Ce champ est obligatoire"),
            password: Yup.string().min(8, 'Mot de passe minimum 8 caractères')
                .required("Ce champ est obligatoire"),
            passwordConfirmation: Yup.string()
                .min(8, 'Mot de passe minimum 8 caractères')
                .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent être identiques')
                .required("Veuillez confirmer votre mot de passe."),
            username: Yup.string()
                .required("Ce champ est obligatoire."),
        })
    })

    const signup = async values => {
        const response = await fetch('http://localhost:5000/auth/signup', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(values)
        })
    
        const data = await response.json()
     
        if (data) {
            console.log("test data",data)
            setUser(data)
            navigate('/home')
            setIsValid(true)
        } else {
            alert(response.statusText)
        }
      }

    return (
        <div>
            <Form 
                onSubmit={formik.handleSubmit} 
                validated={isValid}
                >
                
                <FormGroup> 
                    <FloatingLabel
                        controlId="emailInput"
                        label="Adresse email"
                    >
                        <FormControl
                            type="email" 
                            name='email'
                            placeholder="name@example.com"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.email}
                            isValid={isValid}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.email}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </FormGroup>
                
                <FormGroup>
                    <FloatingLabel
                        controlId="passwordInput"
                        label="Mot de passe"
                    >
                        <FormControl
                            type="password" 
                            name='password'
                            className="mt-3"  
                            placeholder="Mot de passe"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.password}
                            isValid={isValid}
                        />
                        {!isValid && 
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.password}
                        </Form.Control.Feedback>
                        }
                    </FloatingLabel>
                </FormGroup>
                
                <FormGroup>
                    <FloatingLabel
                        controlId="passwordConfirmationInput"
                        label="Confirmation du mot de passe"
                    >
                        <FormControl
                            type="password" 
                            name='passwordConfirmation'
                            className="mt-3" 
                            placeholder="Confirmation du mot de passe"
                            value={formik.values.passwordConfirmation}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.passwordConfirmation}
                            isValid={isValid}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.passwordConfirmation}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </FormGroup>
                    
                    <FormGroup>
                        <FloatingLabel
                            controlId="usernameInput"
                            label="Nom d'utilisateur"
                        >
                            <FormControl
                                type="text" 
                                name='username'
                                className="mt-3" 
                                placeholder="Nom d'utilisateur"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                isInvalid={formik.errors.username}
                                isValid={isValid}
                            />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.username}
                        </Form.Control.Feedback>
                    </FormGroup>
                    <FormGroup>
                        <FloatingLabel
                            controlId="nameInput"
                            label="Prénom / Nom"
                        >
                            <FormControl
                                type="text" 
                                name='name'
                                className="mt-3" 
                                placeholder="Prénom / Nom"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                isInvalid={formik.errors.name}
                                isValid={isValid}
                            />
                        </FloatingLabel>
                      {/* {user && <p>Email valide</p>}
                      {!user && <ErrorText>Email invalide</ErrorText>} */}
                    </FormGroup>

                    <FormGroup
                      controlId="pictureFileInput"
                    >
                        <FormControl
                            type="file"
                            name='pictureUrl'
                            className="mt-3"  
                            placeholder="Photo de profil"
                            value={formik.values.picture}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.picture}
                            isValid={isValid}
                        />
                    </FormGroup>
                    
                    <ButtonBlack  
                      className="mt-5 mb-3" 
                      type='submit'
                    >
                        Valider
                    </ButtonBlack>
                </Form>
        </div>
    );
};

export default FormSignup;