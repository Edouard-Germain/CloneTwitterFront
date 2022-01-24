import { useContext } from "react";
import { UserContext } from '../../context/context';

import styled from "styled-components"

import PictureFollow from "../PictureFollow";

import { 
    ButtonBlackSmall,
} from "../../styles/Button";

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

const ItemFollow = (props) => {
    const { putFollowing } = useContext(UserContext)
    console.log("propsFollow", props)
    
    if (!props) {
        return <p>Chargement</p>
    }

    return (
        <Container>
            <div className="d-flex flex-row justify-content-start">
                <PictureFollow
                    size={"50px"}
                    marginRight={"15px"}
                    pictureUrl={props.pictureUrl}
                    username={props.username}
                    id={props.id}
                />
                <Textcontainer>
                    <Text>{props.username}</Text>
                    <Subtext>@{props.username}</Subtext>
                </Textcontainer>
            </div>
           
            <div>
                <ButtonBlackSmall
                    onClick={putFollowing}
                >
                    Follow
                </ButtonBlackSmall>
            </div>
        </Container>
    )
}

export default ItemFollow