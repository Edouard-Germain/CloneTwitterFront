import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';

import styled from "styled-components";

import TopBar from "../components/TopBar"
import SideNav from "../components/SideNav";
// import CreateTweet  from "../components/createTweet";
import CardFollowings  from "../components/CardFollowings";
import ResearchBar  from "../components/ResearchBar";
import Tweet from "../components/tweet";
import PostTweet from "../components/PostTweet";


const CentralContainer = styled.div`
    border: 1px solid rgb(239, 243, 244);
    border-bottom: none;
`

const Home = () =>{

    const { user } = useContext(UserContext)
    const [ page, setPage ] = useState(1)
    const [ feed, setFeed ] = useState([])
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
            <div className="row">
                <div className ="col-3 mt-4">
                    <SideNav/>
                </div>
                <CentralContainer className="col-5 m-0">
                    <TopBar
                        title={"Home"}
                    />
                    <div className="row mt-3">
                        <div className="col-8 m-0">
                            <PostTweet/>
                            {feed.map((tweet)=>
                                <Tweet props = {tweet}></Tweet>
                            )}
                        </div>
                    </div>
                </CentralContainer>
                <div className="col-4">
                    <div className="mx-3">
                        {/* <ResearchBar/> */}
                        <CardFollowings/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home