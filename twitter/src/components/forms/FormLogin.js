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

const FormLogin = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const [ isValid, setIsValid ] = useState(false)
   
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
            .required("Ce champ est obligatoire"),
          password: Yup.string()
            .min(8, 'Mot de passe minimum 8 caractères')
            .required("Ce champ est obligatoire")
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
          setIsValid(true) 
        } else {
          alert(response.statusText)
          setIsValid(false) 
        }
    }
     console.log(formik.errors)

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
                            placeholder="Adresse email"
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

export default FormLogin;