import { useNavigate } from 'react-router-dom'
import { useContext, useState } from "react";
import { UserContext } from '../context/context';
// import PictureProfil from "../components/PictureProfil";

import styled from "styled-components";
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Form from "react-bootstrap/Form";

import { 
    ButtonBlue,
} from "../styles/Button";

const Container = styled.div`
  border-bottom: 1px solid rgb(239, 243, 244);
`

const PicContainer = styled.div`
  background-color : blue;
  border-radius : 50px;
  height : 60px;
  width : 60px;
`

const FormGroup = styled.div`
`

const InputTweet = styled.input`
  border: none;
  width: 100%;
  padding-top: 1.5em;

  ::placeholder {
    color: ;
    font-size: 1.5em;
  }
  
`

const PostTweet = (props) => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
 
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
        } else {
          alert(response.statusText)
        }
    
      }
    return (
      <Container className="container-fluid">
        <Form 
            onSubmit={formik.handleSubmit} 
        >
        <div className="row">
          <PicContainer className="col-1"/>
          <FormGroup
            className="col-10"
          >
            <InputTweet
              type="text" 
              name='tweet'
              id= "tweetInput"
              placeholder="What's happening ?"
              value={formik.values.tweet}
              onChange={formik.handleChange}
            />
          </FormGroup>
        </div>
            <div className="d-flex justify-content-end">
              <div className="col-3">
                <ButtonBlue  
                  className="my-3" 
                  type='submit'
                >
                    Tweet
                </ButtonBlue>
              </div>
            </div>

          </Form>
      </Container>
    )
}
export default PostTweet