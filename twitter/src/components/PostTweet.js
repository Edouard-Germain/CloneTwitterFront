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
  padding-left: 16px;
  height: 140px;
`
const PicContainer = styled.div`
  background-color : blue;
  border-radius : 50px;
  height : 60px;
  width : 60px;
  margin-right: 10px;
`
const FormGroup = styled.div`
`
const InputTweet = styled.input`
  border: none;
  margin-top: 1.5em;
  width : 100%;

  ::placeholder {
    color: ;
    font-size: 1.5em;
  }
`
const PostTweet = (props) => {
    const navigate = useNavigate()
    const { user, setFeed } = useContext(UserContext)
 
    const formik = useFormik({
        initialValues: {
          content: "",
          user: user._id,
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
    
      if (data) {
        props.getFeed()
      } else {
        alert(response.statusText)
      }
      console.log("data", data)
  }
    
    console.log("form", formik.values)

    return (
      <Container className="container-fluid">
        <Form 
            onSubmit={formik.handleSubmit} 
        >
        <div className="d-flex" >
          <PicContainer className="col-1"/>
          <FormGroup
            className="col-10"
          >
            <InputTweet
              type="text" 
              name='content'
              id= "tweetInput"
              placeholder="What's happening ?"
              value={formik.values.content}
              onChange={formik.handleChange}
            />
          </FormGroup>
        </div>
            <div className="d-flex justify-content-end">
              <div className="col-2">
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