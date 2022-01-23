import { useState, useEffect } from "react"
import { useParams } from 'react-router';

import TweetCard from "../components/TweetCard";

const Tweet = () => {
    const [ comments, setComments ] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/tweets/${id}`)
        .then(response => response.json())
        .then(data => setComments([data]))
      }, [])
      console.log("comments",comments)
      console.log('id',id)
    return (
        
            <div>
                <TweetCard props = {comments}/>    
            </div>
        
    )
}
export default Tweet