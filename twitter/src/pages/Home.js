import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';
import SideNav from "../components/sideNav";
import styled from "styled-components";
import Logout from "../components/logout"
import CreateTweet  from "../components/createTweet";



const Home = () =>{

    const {userName,setUserName} = useContext(UserContext)
    const [page,setPage] = useState(1)
    const [feed, setFeed] = useState([])
    const handleTest =()=>{
        console.log("test", feed)
    }
    useEffect(() => {
        fetch(`http://localhost:5000/feed/`)
        .then(response => response.json())
        .then(data => setFeed(m =>[...data, ...feed]))
        // .then(data=>setFeed(data))
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
                <div className ="col-9 bg-danger " >
                    <div className="row">
                        <div className="col-8 bg-primary">
                            <CreateTweet/>
                            <p>twitter is zee best</p>
                            <button onClick ={handleTest}></button>
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