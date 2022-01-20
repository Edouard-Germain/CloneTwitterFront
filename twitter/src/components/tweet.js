import styled  from "styled-components"
import {BiTrash} from "react-icons/bi"
import {AiOutlineRetweet} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"
import moment from "moment"

const TweetContainer = styled.div`
    display : flex;
    border-bottom: solid;
    border-color: #d8d8d8;
    width : 100%;
    height : 120px;
    padding-top : 15px;
    column-gap : 15px;
    row-gap : 2px;
    `
const PicContainer = styled.div`
    background-color : blue;
    border-radius : 50px;
    height : 60px;
    width : 60px;
    `
const TextCointainer = styled.div`
    row-gap : 5px;
    `
const UserText = styled.p`
    color : black;
    font-weight : 600;
    margin : 0;`
const UserAt = styled.span`
    color : #b8bdc2;
    font-weight : 400;
    `
const TrashSpan = styled.span`
    margin-left : 250px;
    `


const IconContainer = styled.div`
    display : flex;
    `

const Tweet = (props) =>{
    let retweet = props.props.retweets.length
    let comment = props.props.comments.length
    let id = props.props._id
    let time =  moment(props.props.createdat).format('DD/MM/YY')

    const HandleDelete = () =>{
        console.log(id)
        fetch(`http://localhost:5000/tweets/${id}`,{
            method : 'delete',
        })
        .then (response=>response)

    }

    return (
        <TweetContainer>
            <PicContainer>           
            </PicContainer>
            <TextCointainer>
                <UserText> {props.props.user.username} 
                    <UserAt>@coucou {time}</UserAt>
                    <TrashSpan onClick = {HandleDelete}>
                        <BiTrash/>
                    </TrashSpan>
                </UserText> 
                <p>{props.props.content}</p>
                <IconContainer>
                        <p>{comment}</p><FaRegComment/>
                        <p>{retweet}</p> <AiOutlineRetweet/>      
                </IconContainer>
            </TextCointainer>
            
        </TweetContainer>
    )

}
export default Tweet