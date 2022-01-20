import styled  from "styled-components"
import {BiTrash} from "react-icons/bi"

const TweetContainer = styled.div`
    display : flex;
    border-bottom: 1px solid rgb(239, 243, 244);
`

const PicContainer = styled.div`
    background-color : blue;
    border-radius : 50px;
    height : 60px;
    width : 60px;
`

const TextContainer = styled.div`
`

const IconContainer = styled.div`
`

const Tweet = (props) =>{
    return (
        <TweetContainer>
            <PicContainer>           
            </PicContainer>
            <TextContainer>
                <p> @coucou <span><BiTrash/></span></p> 
                <p>{props.props.content}</p>
                <IconContainer>
                    
                </IconContainer>
            </TextContainer>
            
        </TweetContainer>
    )

}
export default Tweet