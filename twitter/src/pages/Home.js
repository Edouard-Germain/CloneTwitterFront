import { useNavigate} from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';
import styled from "styled-components";

import TopBar from "../components/TopBar"
import SideNav from "../components/SideNav";
// import CreateTweet  from "../components/createTweet";
import CardFollowings  from "../components/CardFollowings";
import ResearchBar  from "../components/ResearchBar";
// import Logout from "../components/logout"
import PostTweet from "../components/PostTweet";
import { BsTypeH1 } from 'react-icons/bs';
import TweetCard from "../components/TweetCard";


const CentralContainer = styled.div`
    border-left: 1px solid rgb(239, 243, 244);
    border-right: 1px solid rgb(239, 243, 244);
    border-bottom: none;  
`

const TweetsContainer = styled.div`
    height: calc(100vh - 50px);
    overflow-y: scroll;
`

const Home = () =>{
    const navigate = useNavigate()

     const { 
        user, 
        feed,
        setFeed, 
        page, 
        setPage 
    } = useContext(UserContext)

    useEffect(() => {
        getFeed() 
    }, [])

        const getFeed = async () => {
            const response = await fetch(`http://localhost:5000/feed/`)
            const data = await response.json()
            console.log(data)
            setFeed([...data])
        }
    console.log("user verif", user)
    if (user === null) {
        return <h1>Login</h1>
    } 
    console.log("feed", feed)

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
                            <PostTweet 
                                getFeed={getFeed}
                            />
                            {feed.length > 0 && feed.map((tweet)=>
                                <TweetCard props = {tweet}></TweetCard>
                            )}
                        </TweetsContainer>
                    </div>
                </CentralContainer>
                <div className="col-4">
                    <div className="mx-3">
                        <ResearchBar/>
                        <div className="mt-4">
                            <CardFollowings/>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home