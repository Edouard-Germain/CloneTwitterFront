import { useContext } from "react";
import { UserContext } from '../../context/context';

import styled from "styled-components";

import PictureProfil from "../PictureProfil";
import Form from "react-bootstrap/Form";

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { 
  ButtonBlue,
} from "../../styles/Button";

const Container = styled.div`
  border-bottom: 1px solid rgb(239, 243, 244);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  height: 140px;
`
const FormGroup = styled.div`
  display: flex;
  align-items: center;
`
const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;

  ::placeholder {
    font-size: 20px;
  }
`
const InputTweet = () => {
  const { 
    user, 
    showTweet,
    setShowTweet,
    getFeed,
  } = useContext(UserContext)

  const formik = useFormik({
      initialValues: {
        content: "",
        user: user._id,
      },
      onSubmit: values => {
        postTweet(values)
        formik.resetForm()
      },
      validateOnChange: false,
      validationSchema: Yup.object({
        tweet: Yup.string()
      })
  })

  const postTweet = async (values) => {
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
      getFeed()
    } else {
      alert(response.statusText)
    }

    if (showTweet) {
      setShowTweet(false)
    }
  }

  return (
    <Container className="container-fluid">
      <Form 
          onSubmit={formik.handleSubmit} 
      >
      <div className="d-flex" >
        <PictureProfil 
          className="col-1"
          size={"50px"}
          marginRight={"15px"}
        />
        <FormGroup
          className="col-10"
        >
          <Input
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
export default InputTweet