import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';

import styled from "styled-components";

import Logout from "../components/logout"
import SideNav from "../components/bars/SideNav";
import InputTweet from "../components/inputs/InputTweet";
import TweetCard from "../components/cards/TweetCard";

const CentralContainer = styled.div`
    border: 1px solid rgb(239, 243, 244);
`

const User = () =>{

    const { user, feed, setFeed, page, setPage } = useContext(UserContext)
    const [ userTweet, setUserTweet ] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/feed/${user._id}`)
        .then(response => response.json())
        .then(data => setUserTweet(data))
      }, [])
    if (userTweet=== null){
        return null
    }
    
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
                            <InputTweet/>
                            {userTweet.map((tweet)=>
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

export default User