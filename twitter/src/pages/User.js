import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';

import styled from "styled-components";

import Logout from "../components/logout"
import SideNav from "../components/bars/SideNav";
import InputTweet from "../components/inputs/InputTweet";
import TweetCardUser from "../components/cards/TweetCardUser";

const CentralContainer = styled.div`
    border: 1px solid rgb(239, 243, 244);
`

const User = () =>{

    const { user, getUser } = useContext(UserContext)
    const [ userTweet, setUserTweet ] = useState(null)

    useEffect(() => {
        getUser()
    }, [])

    if (user === null){
        return <p>Erreur de login</p>
    }

    console.log("user", user)
    
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
                            {user.tweets.map((tweet)=>
                                <TweetCardUser props = {tweet}></TweetCardUser>
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