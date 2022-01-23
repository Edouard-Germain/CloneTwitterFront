import { useNavigate} from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';
import styled from "styled-components";

import TopBar from "../components/TopBar"
import SideNav from "../components/SideNav";
import RightBar from "../components/RightBar";
// import Logout from "../components/logout"
import PostTweet from "../components/PostTweet";
import TweetCard from "../components/TweetCard";


const MainContainer = styled.div`
    display: flex;
    justify-content: start;
`

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
        <div className="container mx-5">
            <div className="d-flex">
                <div className ="col-lg-1 col-xl-3">
                    <SideNav/>
                </div>
                <MainContainer className="col-lg-11 col-xl-9">
                    <CentralContainer className="col-7">
                        <TopBar
                            title={"Accueil"}
                        />
                        <TweetsContainer>
                            <PostTweet 
                                getFeed={getFeed}
                            />
                            {feed.length > 0 && feed.map((tweet)=>
                                <TweetCard props = {tweet}></TweetCard>
                            )}
                        </TweetsContainer>
                    </CentralContainer>
                    <div className="col-5">
                         <RightBar/>
                    </div>
                </MainContainer>    
            </div>
        </div>
    )
}

export default Home