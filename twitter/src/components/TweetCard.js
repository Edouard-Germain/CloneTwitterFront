import { Link } from "react-router-dom"
import styled  from "styled-components"
import {BiTrash} from "react-icons/bi"
import {AiOutlineRetweet} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"
import moment from "moment"
import { useContext } from "react"
import {UserContext} from '../context/context';

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
const TrashSpan = styled.span`   
`

const IconContainer = styled.div`
    display : flex;
    `
const TextContainer = styled.div`
`

const TweetCard = (props) =>{
    const { feed, setFeed } = useContext(UserContext)
    let retweet = props.props.retweets.length
    let comment = props.props.comments.length
    let id = props.props._id
    let time =  moment(props.props.createdat).format('DD/MM/YY')

    const HandleDelete   = async () =>{
        try {
            await fetch(`http://localhost:5000/tweets/${id}`,{
                method : 'delete',
            })
                .then (response=>response)
                await fetch ('http://localhost:5000/feed')
                .then(response => response.json())
                .then(data => setFeed([...data]))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Link style={{textDecoration:"none"}} to={`/tweet/${id}`} >
            <TweetContainer>
                <div className="d-flex">
                    <PicContainer>           
                    </PicContainer>
                    <TextContainer>
                        <UserText> {props.props.user.username} 
                            <UserAt>@{props.props.user.username} {time}</UserAt>
                        </UserText> 
                        <p>{props.props.content}</p>
                        <IconContainer>
                                <p>{comment}</p><FaRegComment/>
                                <p>{retweet}</p> <AiOutlineRetweet/>      
                        </IconContainer>
                    </TextContainer>
                </div>
                <TrashSpan onClick = {HandleDelete}>
                    <BiTrash/>
                </TrashSpan>
            </TweetContainer>
        </Link>
    )

}
export default TweetCard