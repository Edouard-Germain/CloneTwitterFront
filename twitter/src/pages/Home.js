import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';
import styled from "styled-components";

import TopBar from "../components/TopBar"
import SideNav from "../components/SideNav";
// import CreateTweet  from "../components/createTweet";
import CardFollowings  from "../components/CardFollowings";
import ResearchBar  from "../components/ResearchBar";
// import Logout from "../components/logout"
import Tweet from "../components/tweet";
import PostTweet from "../components/PostTweet";


const CentralContainer = styled.div`
    border: 1px solid rgb(239, 243, 244);
    border-bottom: none;
`

const TweetsContainer = styled.div`
    
`

const Home = () =>{

    const { 
        user, 
        feed,
        setFeed, 
        page, 
        setPage 
    } = useContext(UserContext)

    
    const handleTest =()=>{
        console.log("test", feed)
    }
    useEffect(() => {
        fetch(`http://localhost:5000/feed/`)
        .then(response => response.json())
        .then(data => setFeed(m =>[...data, ...feed]))
    }, [])
    console.log('feed',feed)
    
    return (    
        <div className="container-fluid">
            <div className="d-flex my-0">
                <div className ="col-3 mt-4">
                    <SideNav/>
                </div>
                <CentralContainer className="col-5 m-0">
                    <TopBar
                        title={"Accueil"}
                    />
                    <div className="row my-0 mt-3">
                        <div>
                            <PostTweet/>
                            <TweetsContainer>
                            {feed.map((tweet)=>
                                <Tweet props = {tweet}></Tweet>
                            )}
                            </TweetsContainer>
                        </div>
                    </div>
                </CentralContainer>
                <div className="col-4">
                    <div className="mx-3">
                        <ResearchBar/>
                        <CardFollowings/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home