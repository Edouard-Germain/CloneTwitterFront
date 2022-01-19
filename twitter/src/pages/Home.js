import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';
import { BsTwitter } from "react-icons/bs";


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
    })
    return (
        <div class ="container-fluid p-0">
            <div class ="row">
                <div class ="col-4 pl-3 mt-3 bg-primary">
                    <BsTwitter 
                        color="rgb(29, 155, 240)" 
                        fontSize="2em"
                    />
                </div>
                <div class ="col-8 bg-danger " >
                    <p>twitter is zee best</p>
                    <button onClick ={handleTest}></button>
                </div>
            </div>
        </div>
    )
}

export default Home