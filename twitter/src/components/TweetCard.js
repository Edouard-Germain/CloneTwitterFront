import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from '../context/context';
import styled  from "styled-components"

import {BiTrash} from "react-icons/bi"
import {AiOutlineRetweet} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"
import moment from "moment"

import PictureProfil from "./PictureProfil"

const TweetContainer = styled.div`
    display : flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(239, 243, 244);
    width : 100%;
    padding: 10px 16px;

    :hover {
        transition-property: background-color, box-shadow;
        background-color: rgb(247, 249, 249);
        transition-duration: 0.2s
    }
`
const UserText = styled.p`
    color : black;
    font-weight : 600;
    margin : 0;
`
const UserAt = styled.span`
    color : #b8bdc2;
    font-weight : 400;
    margin-left: 5px;
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
        <Link 
            to={`/tweet/${id}`}
            style={{
                textDecoration:"none", 
                color:"black"
            }}  
        >
            <TweetContainer>
                <div className="d-flex">
                    <PictureProfil
                      size={"50px"}
                      marginRight={"15px"}
                    />           
                    <TextContainer>
                        <UserText> {props.props.user.username} 
                            <UserAt>@{props.props.user.username} {time}</UserAt>
                        </UserText> 
                        <p>{props.props.content}</p>
                        <IconContainer>
                                <div className= "d-flex me-5">
                                    <p>{comment}</p>
                                    <FaRegComment
                                        style = {{
                                            marginLeft: "10px",
                                            marginTop: "5px"
                                        }}
                                    />
                                </div>
                                <div className= "d-flex">
                                    <p>{retweet}</p>    
                                    <AiOutlineRetweet
                                        style = {{
                                            marginLeft: "10px",
                                            marginTop: "5px"
                                        }}
                                    />  
                                </div>
                                 
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