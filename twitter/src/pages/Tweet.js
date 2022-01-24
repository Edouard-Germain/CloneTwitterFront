import { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router';
import styled from "styled-components";

import EpiTweet from "../components/EpiTweet";
import TopBar from "../components/bars/TopBar"
import SideNav from "../components/bars/SideNav";
import FollowsCard  from "../components/cards/FollowsCard";
import ResearchBar  from "../components/bars/ResearchBar";
import CommentCard from "../components/CommentCard"
import InputComment from "../components/inputs/InputComment"
import { UserContext } from "../context/context";


const CentralContainer = styled.div`
    border-left: 1px solid rgb(239, 243, 244);
    border-right: 1px solid rgb(239, 243, 244);
    border-bottom: none;  
`

const TweetsContainer = styled.div`
    height: calc(100vh - 50px);
    overflow-y: scroll;
`


const Tweet = () => {
    const {id} = useParams()
    const {comments, setComments} = useContext(UserContext)

    useEffect(() => {
        fetch(`http://localhost:5000/tweets/${id}`)
        .then(response => response.json())
        .then(data => setComments(data))
      }, [])
    //   console.log('id',id)


    if (comments == null ){
        return null
    }
    return (
        <div className="container-fluid m-0">
        <div className="d-flex">
            <div className ="col-md-1 col-xl-3 mt-4">
                <SideNav/>
            </div>
            <CentralContainer className="col-md-7 col-xl-5">
                <TopBar
                    title={"Accueil"}
                />
                <div className="row mt-3">
                    <TweetsContainer>
                        <EpiTweet props = {comments}/>
                        <InputComment props = {id}/>
                        {comments.comments.map((comment)=>
                            <CommentCard props={comment}/>)}
                        {/* {feed.length > 0 && feed.map((tweet)=>
                            <TweetCard props = {tweet}></TweetCard>
                        )} */}
                    </TweetsContainer>
                </div>
            </CentralContainer>
            <div className="col-4">
                <div className="mx-3">
                    <ResearchBar/>
                    <div className="mt-4">
                        <FollowsCard/>
                    </div>  
                </div>
            </div>
        </div>
    </div>     
    )
}
export default Tweet