import { useContext } from 'react';
import { UserContext } from '../../context/context';

import styled from "styled-components"
import { 
    ButtonBlackSmall,
} from "../../styles/Button";

// import { BiDotsHorizontalRounded } from "react-icons/bi"
import PictureProfil from "../avatars/PictureProfil";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
  
    :hover {
        transition-property: background-color, box-shadow;
        background-color: rgb(15, 20, 25, 0.1);
        border-radius: 90px;
        transition-duration: 0.2s
    }
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

const ButtonProfil = (props) => {
    const {
        user,
        handleShowLogout,
    } = useContext(UserContext)
    
    return (
        <Container>
            <div className="d-flex flex-row justify-content-start align-items-center">
                <PictureProfil
                    size={"40px"}
                    marginRight={"10px"}
                />
                <Textcontainer>
                    <Text>{user.username}</Text>
                    <Subtext>@{user.username}</Subtext>
                </Textcontainer>
            </div>
           
           <div>
                <ButtonBlackSmall
                    type="button"
                    onClick={handleShowLogout}
                >
                    <span>Logout</span>
                </ButtonBlackSmall>
            </div>
        </Container>
    )
}

export default ButtonProfil