import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context'

const Home = () =>{

    const {userName,setUserName} = useContext(UserContext)
    const [page,setPage] = useState(1)

}
