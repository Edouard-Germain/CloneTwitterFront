import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';

import styled from "styled-components";

import Logout from "../components/logout"
import SideNav from "../components/bars/SideNav";
import InputTweet from "../components/inputs/InputTweet";
import UsertweetsCard from "../components/cards/UsertweetsCard";
import RightBar  from "../components/bars/RightBar";

const CentralContainer = styled.div`
    border: 1px solid rgb(239, 243, 244);
`

const User = () =>{

    const { user, getUser } = useContext(UserContext)
    const [ userTweet, setUserTweet ] = useState(null)

    const identity = user._id

    useEffect(() => {
        fetch(`http://localhost:5000/users/${identity}`)
        .then(response => response.json())
        .then(data => setUserTweet(data))
      }, [])

    if (userTweet== null){
        return null
    }
    const Ufeed = userTweet.tweets
    console.log("U", Ufeed)


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
<<<<<<< HEAD
                            {user.tweets.map((tweet)=>
                                <TweetCardUser props = {tweet}></TweetCardUser>
=======
                            {Ufeed.map((tweet)=>
                                <UsertweetsCard props={tweet}></UsertweetsCard> 
>>>>>>> ba566aca86e99ea9560e2c2c2f695abd35ca565b
                            )}
                        </div>
                        <div className="col-5">
                            <RightBar/>
                        </div>  
                    </div>
                </CentralContainer>
            </div>
        </div>
    )
}

export default User