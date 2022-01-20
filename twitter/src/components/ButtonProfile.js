import styled from "styled-components"
import {BiDotsHorizontalRounded} from "react-icons/bi"

const Container = styled.div`
    display: flex;
    margin-bottom: 30px;
`
const Picture = styled.div`
    background-color: blue;
    margin-right: 10px;
    border-radius: 50px;
    height: 50px;
    width: 50px;
`
const Textcontainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Text = styled.p`
    color: black;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
`
const Subtext = styled.p`
    color : #D3D3D3;
    font-size : 16px;
    font-weight : 400;
`
const ButtonProfil =() => {

    return (
        <Container>
            <Picture/>
            <Textcontainer>
                <Text>Booba</Text>
                <Subtext>@92I</Subtext>
            </Textcontainer>
            <BiDotsHorizontalRounded
                style = {{
                    marginLeft: "10px", 
                    marginTop : "5px"
                }}          
            />
        </Container>
    )
}

export default ButtonProfil