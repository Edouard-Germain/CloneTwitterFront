import { useContext, useState, useEffect } from "react";
import { UserContext } from '../context/context';
import styled from "styled-components";

const PicContainer = styled.div`
    ${props => !props.picture && "background-color: rgb(29, 155, 240)"}; 
    background-image: url('${props => props.user.pictureUrl}');
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
    margin: 0;
`

const PictureProfil = ( props ) =>{
    const {user} = useContext(UserContext)
    const [isPicture, setIsPicture] = useState(false)

    useEffect(() => {
        if (user.pictureUrl === "") {
            setIsPicture(false)
        } else {
            setIsPicture(true)
        }
    }, [])
    console.log("username Picture", user)
    console.log("username", props)

    return (
        <PicContainer 
            picture={isPicture}
            user={user}
            size={props.size}
            marginRight={props.marginRight}
        >
            {!isPicture && 
            <Letter>{user.username[0].toLowerCase()}</Letter>}
        </PicContainer>
    )
}


export default PictureProfil