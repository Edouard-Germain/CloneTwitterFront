import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';
import SideNav from "../components/sideNav";
import styled from "styled-components";
import Logout from "../components/logout"
import CreateTweet  from "../components/createTweet";
import Tweet from "../components/tweet";



const Home = () =>{

    const {userName,setUserName} = useContext(UserContext)
    const [page,setPage] = useState(1)
    const [feed, setFeed] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/feed/`)
        .then(response => response.json())
        .then(data => setFeed(m =>[...data, ...feed]))
    }, [])
    return (
        <div className ="container-fluid p-0">
            <div className ="row">
                <div className ="col-3 mt-3  flex-column">
                    <SideNav/>
                    <div style = {{alignSelf : "end"}}>
                        <Logout />
                    </div>
              </div>
                <div className ="col-9  " >
                    <div className="row">
                        <div className="col-8">
                            <CreateTweet/>
                            {feed.map((tweet)=>
                                <Tweet props = {tweet}></Tweet>
                            )}
                        </div>
                        <div className="col-4 bg-primary">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home