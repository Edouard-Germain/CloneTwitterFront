import { useContext, useEffect, useState } from "react";
import { UserContext } from '../context/context'
import styled from "styled-components";

import { BsTwitter } from "react-icons/bs";

const ImgContainer = styled.div`
    background-image: url('https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png');
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const Img = styled.img`
    padding: 32px;
`
const H1Text = styled.h1`
    font-size: 8vh;
    font-weight: bold;
    margin: 1em 0em;
`
const H3Text = styled.h3`
    font-size: 4vh;
    font-weight: bold;
    margin: 1em 0em;
`
const ConditionText = styled.p`
    font-size: 1.5vh;
`
const Form = styled.form`
    width: 300px;
`
const Button = styled.div`
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    cursor: pointer;
    height: 40px;
    margin-bottom: 5px;
    padding-top: 7px;
    border-radius: 90px;
    text-align: center;
    color: ${props => props.color};
    font-weight: bold;
`

const Login = () =>{
    const { userName, setUserName } = useContext(UserContext)

    return (
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-md-5">
                    <ImgContainer>
                        <BsTwitter 
                            color="rgb(255, 255, 255)" 
                            fontSize="25em"
                            style={{ margin: "10vh 10vh"}}
                        />
                    </ImgContainer>
                </div>
                <div class="col-md-7">
                    <div class="my-5 mx-2">
                        <BsTwitter 
                            color="rgb(29, 155, 240)" 
                            fontSize="2.5em"
                        />
                        <H1Text>Ça se passe <br/> maintenant</H1Text>
                        <H3Text>Rejoignez Twitter dès aujourd'hui.</H3Text>
                        <Form>
                            <Button 
                                role="link"
                                color="white"
                                backgroundColor="rgb(29, 155, 240)"
                                border="none"
                            >
                                <span>S'inscrire</span>
                            </Button>
                            <ConditionText>En vous inscrivant, vous acceptez les Conditions d'Utilisation et la Politique de Confidentialité, incluant l'Utilisation de Cookies.</ConditionText>
                            <div class="mt-5">
                                <p class="fs-6 fw-bold">Vous avez déjà un compte ?</p>
                                <Button role="link"
                                    color="rgb(29, 155, 240)"
                                    backgroundColor="rgb(255, 255, 255)"
                                    border="1px solid rgb(207, 217, 222)"
                                >
                                    <span>S'inscrire</span>
                                </Button>
                            </div>
                            
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login;