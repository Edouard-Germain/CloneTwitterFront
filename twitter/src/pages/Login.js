import { useContext, useEffect, useState } from "react";
import { UserContext } from '../context/context'
import styled from "styled-components";

import { BsTwitter } from "react-icons/bs";

const Img = styled.div`
    background-image: url('https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png');
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const H1Text = styled.h1`
    font-size: 8vh;
    font-weight: bold;
    margin: 1em 0em;
`

const BlackLogo = styled.div`
    background-color: rgb(29, 155, 240)
    cursor: pointer;
    width: 300px;
`

const ButtonBlue = styled.div`
    background-color: rgb(29, 155, 240);
    border: none;
    cursor: pointer;
    width: 300px;
`

const Login = () =>{
    const { userName, setUserName } = useContext(UserContext)

    return (
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-md-5">
                    <Img/>
                </div>
                <div class="col-md-7">
                    <div class="my-5 mx-2">
                        <BsTwitter 
                            color="rgb(29, 155, 240)" 
                            fontSize="2.5em"
                        />
                        <H1Text>Ça se passe <br/> maintenant</H1Text>
                        <p class="fs-3 fw-bold text-start">Rejoignez Twitter dès aujourd'hui.</p>
                        <ButtonBlue>S'inscrire</ButtonBlue>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login;