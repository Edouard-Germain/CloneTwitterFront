import { useState, useEffect } from "react";
import styled from "styled-components";

const PicContainer = styled.div`
    background-color: rgb(29, 155, 240); 
    background-image: url('${props => props.pictureUrl}');
    background-position: bottom;
    background-size: cover;
    border-radius : ${props => props.size};
    height : ${props => props.size};
    width : ${props => props.size};
    margin-right: ${props => props.marginRight};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Letter = styled.h3`
    text-align: center;
    color: white;
    margin-bottom: 5px;
`

const PictureFollow = ( props ) =>{
    const [isPicture, setIsPicture] = useState(false)

    useEffect(() => {
        if (props.pictureUrl === "") {
            setIsPicture(false)
        } else {
            setIsPicture(true)
        }
    }, [])
    
    console.log("props", props)

    console.log("props.username", props.username)

    return (
        <PicContainer 
            picture={isPicture}
            pictureUrl={props.pictureUrl}
            size={props.size}
            marginRight={props.marginRight}
        >
            {!isPicture && 
            <Letter>{props.username[0].toLowerCase()}</Letter>}
        </PicContainer>
    )
}


export default PictureFollow