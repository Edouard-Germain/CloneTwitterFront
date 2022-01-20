import styled  from "styled-components"
import {BiTrash} from "react-icons/bi"

const TweetContainer = styled.div`
    display : flex;
    border-bottom: solid;
    border-color: #d8d8d8;


    `
const PicContainer = styled.div`
    background-color : blue;
    border-radius : 50px;
    height : 60px;
    width : 60px;
    `
const TextCointainer = styled.div`
    `
const IconContainer = styled.div`
    `

const Tweet = (props) =>{
    return (
        <TweetContainer>
            <PicContainer>           
            </PicContainer>
            <TextCointainer>
                <p>{props.content}</p>
                {/* <p>@{props.user.username}</p> */}
                <BiTrash
                />
                <IconContainer>
                    
                </IconContainer>
            </TextCointainer>
            
        </TweetContainer>
    )

}
export default Tweet