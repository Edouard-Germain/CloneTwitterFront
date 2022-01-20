import { useContext, useState } from "react";
import { UserContext } from '../context/context';

import styled from "styled-components";
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";

import { 
    ButtonBlue,
} from "../styles/Button";

const PicContainer = styled.div`
    background-color : blue;
    border-radius : 50px;
    height : 60px;
    width : 60px;
`

const InputTweet = (props) => {
    const { user, setUser } = useContext(UserContext)
    const [ validated, setValidated ] = useState(false)
 
    const formik = useFormik({
        initialValues: {
          tweet: "",
        },
        onSubmit: values => {
          postTweet(values)
        },
        validateOnChange: false,
        validationSchema: Yup.object({
          tweet: Yup.string()
            // .required("Une adresse email est requise"),
        })
    })

    const postTweet = async values => {
        const response = await fetch('http://localhost:5000/tweets', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(values)
        })

        const data = await response.json()
        console.log(user)
    
        if (data) {
          setUser(data)
          navigate('/home')
          setValidated(true) 
        } else {
          alert(response.statusText)
        }
    
      }
    return (
        <>
                <Form 
                  onSubmit={formik.handleSubmit} 
                  validated={validated}
                >
                  <PicContainer/>
                  <FormGroup
                    controlId="tweetInput"
                  >
                    <FormControl
                      type="text" 
                      name='tweet'
                      className="mt-5 mb-1" 
                      placeholder="What's happening ?"
                      value={formik.values.tweet}
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.postTweet}
                      isValid={validated}
                    />
                    {/* {user && <p>Email valide</p>}
                    {!user && <ErrorText>Email invalide</ErrorText>} */}
                  </FormGroup>

                  <ButtonBlue  
                    className="my-3" 
                    type='submit'
                  >
                      Tweet
                  </ButtonBlue>
                </Form>
       
        </>
    )
}
export default ModalLogin