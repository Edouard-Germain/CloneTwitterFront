import { useContext, useEffect, useState } from "react";
// import { UserContext } from '../context/context'
import styled from "styled-components";
import ModalLogin from "../components/ModalLogin";
// import ModalSignup from "../components/ModalSignup";

import { 
    ButtonBlue,
    ButtonWhite 
} from "../styles/Button";

import { BsTwitter } from "react-icons/bs";

const ImgContainer = styled.div`
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


const Login = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-md-5">
                    <ImgContainer>
                        <BsTwitter 
                            color="rgb(255, 255, 255)" 
                            fontSize="20em"
                            style={{ margin: "15vh 15vh"}}
                        />
                    </ImgContainer>
                </div>
                <div className="col-md-7">
                    <div className="my-5 mx-2">
                        <BsTwitter 
                            color="rgb(29, 155, 240)" 
                            fontSize="2.5em"
                        />
                        <H1Text>Ça se passe <br/> maintenant</H1Text>
                        <H3Text>Rejoignez Twitter dès aujourd'hui.</H3Text>
                        <Form>
                            <ButtonBlue
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#loginModal"
                            ><span>S'inscrire</span></ButtonBlue> 
                            <ConditionText>En vous inscrivant, vous acceptez les Conditions d'Utilisation et la Politique de Confidentialité, incluant l'Utilisation de Cookies.</ConditionText>
                            <div className="mt-5">
                                <p className="fs-6 fw-bold">Vous avez déjà un compte ?</p>
                                <ButtonWhite
                                    type="button" 
                                    onClick={handleShow}
                                >
                                    <span>Se connecter</span>
                                </ButtonWhite> 
                                <ModalLogin
                                    show={show}
                                    handleClose={handleClose}
                                />
                            </div>                     
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login;