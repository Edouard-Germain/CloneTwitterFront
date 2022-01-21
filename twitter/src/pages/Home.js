import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';
import styled from "styled-components";
import Logout from "../components/logout"
import SideNav from "../components/SideNav";
import PostTweet from "../components/PostTweet";
import TweetCard from "../components/TweetCard";

const CentralContainer = styled.div`
    border: 1px solid rgb(239, 243, 244);
`

const Home = () =>{
    const { user,feed, page, setPage } = useContext(UserContext)
    console.log('user',user)
    console.log('feed',feed)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className ="col-3 mt-3  flex-column">

           <SideNav/>

                    <div style = {{alignSelf : "end"}}>
                        <Logout />
                    </div>
              </div>
                <CentralContainer className="col-9">
                    <div className="row">
                        <div className="col-8 p-0">
                            <PostTweet/>
                            {feed.map((tweet)=>
                                <TweetCard props = {tweet}></TweetCard>
                            )}
                        </div>
                        <div className="col-4 bg-primary">
                        </div>
                    </div>
                </CentralContainer>
            </div>
        </div>
    )
}

export default Home