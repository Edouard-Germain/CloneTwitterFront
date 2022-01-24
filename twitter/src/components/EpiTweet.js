import moment from 'moment'
import styled from 'styled-components'

import {AiOutlineRetweet} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"


const TweetContainer = styled.div`
display : flex;
justify-content: space-between;
border-bottom: 1px solid rgb(239, 243, 244);
width : 100%;
padding: 10px 16px;
`
const PicContainer = styled.div`
background-color : blue;
border-radius : 50px;
height : 60px;
width : 60px;
margin-right: 10px;
`
const UserText = styled.p`
color : black;
font-weight : 600;
margin : 0;
`
const UserAt = styled.span`
color : #b8bdc2;
font-weight : 400;
`
const IconContainer = styled.div`
display : flex;
`
const TextContainer = styled.div`
`
const Content = styled.p`
font-size : 28px;
`

const EpiTweet = (props) => {
    let time =  moment(props.props.createdAt).format('DD/MM/YY')
    console.log('props', props)
    let retweet = props.props.retweets.length
    let comment = props.props.comments.length
    
    return (
        <TweetContainer>
            <div className="d-flex">
                <PicContainer>           
                </PicContainer>
                <TextContainer>
                    <UserText> {props.props.user.username} 
                        <UserAt>@{props.props.user.username} {time}</UserAt>
                    </UserText> 
                    <Content>{props.props.content}</Content>
                    <IconContainer>
                            <p>{comment}</p><FaRegComment/>
                            <p>{retweet}</p> <AiOutlineRetweet/>      
                    </IconContainer>
                </TextContainer>
            </div>
        </TweetContainer>
    )
}

export default EpiTweet