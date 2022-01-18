import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';
import { BsTwitter } from "react-icons/bs";


const Home = () =>{

    const {userName,setUserName} = useContext(UserContext)
    const [page,setPage] = useState(1)
    const [feed, setFeed] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/feed/`)
        .then(response => response.json())
        .then(data => setFeed(m =>[...data, ...feed]))
        .then (console.log(feed))
    })

    return (
        <div class ="ontainer-fluid p-0">
            <div class ="row">
                <div class ="col-3 mt-3 bg-primary">
                    <BsTwitter 
                        color="rgb(29, 155, 240)" 
                        fontSize="2em"
                    />
                </div>
                <div class ="col-6 bg-danger" ><p>twitter is zee best</p></div>
                <div class="col-3 bg-primary"></div>
            </div>
        </div>
    )
}

export default Home