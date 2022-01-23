import {useContext} from 'react';
import {UserContext} from '../context/context';

import styled from "styled-components"
import { BiDotsHorizontalRounded } from "react-icons/bi"

import PictureProfil from "../components/PictureProfil";

import { 
    ButtonBlackSmall,
} from "../styles/Button";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Textcontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Text = styled.p`
    color: black;
    font-size: 16px;
    margin: 0; 
`
const Subtext = styled.p`
    color : rgb(15, 20, 25, 0.5);
    font-size : 16px;
    margin: 0;  
`

const ButtonProfil =() => {
    const {user} = useContext(UserContext)

    return (
        <Container>
            <div className="d-flex flex-row justify-content-start">
                <PictureProfil
                    size={"50px"}
                    marginRight={"15px"}
                />
                <Textcontainer>
                    <Text>{user.username}</Text>
                    <Subtext>@{user.username}</Subtext>
                </Textcontainer>
            </div>
           
            <div>
                <ButtonBlackSmall>Follow</ButtonBlackSmall>
            </div>
        </Container>
    )
}

export default ButtonProfil