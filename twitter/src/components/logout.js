import styled from "styled-components"
import {BiDotsHorizontalRounded} from "react-icons/bi"

const Container = styled.div`
    display : flex;
    padding-left : 120px;
    `
const Picture = styled.div`
    background-color : blue;
    border-radius : 50px;
    height : 60px;
    width : 60px;
    `
const Textcontainer = styled.div`
    display : flex;
    flex-direction: column;
    `
const Text = styled.p`
    color : black;
    font-size : 14px;
    font-weight : 500;
    `
const Subtext = styled.p`
    color : #D3D3D3;
    font-size : 10px;
    margin-bottom : 5px;
    font-weight : 400;

    `
const logout =() => {

    return (
        <Container>
            <Picture/>
            <Textcontainer>
                <Text>Booba</Text>
                <Subtext>@92I</Subtext>
            </Textcontainer>
            <BiDotsHorizontalRounded
                style = {{marginLeft: "10px", marginTop : "5px"}}          
            />
            

        </Container>
    )
}

export default logout 