import { useContext, useState } from "react";
import {UserContext} from '../context/context';
import styled from "styled-components";

const PicContainer = styled.div`
   
    border-radius : 50px;
    height : 60px;
    width : 60px;
`

const PictureUser = (props) =>{
    const { user } = useContext(UserContext)
    const {picture, setPicture} = (false)

    if (user.picture === "") {
        setPicture(false)
    } else {
        setPicture(true)
    }

    return (
        <PicContainer 
            picture={picture}>
        </PicContainer>
    )
}


export default PictureUser 