import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context'

const Home = () =>{

    const {userName,setUserName} = useContext(UserContext)
    const [page,setPage] = useState(1)
    const [feed, setFeed] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/feed/?page=${page}&page_size=10&sort=date:desc`)
        .then(response => response.json())
        .then(data => setFeed(m =>[...data, ...feed]))
    }, [page,id])

    return (
        <Container>
            
        </Container>
    )
}
