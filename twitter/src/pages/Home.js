import { useContext } from "react";
import { UserContext } from '../context/context';

import SideNav from "../components/bars/SideNav";
import RightBar from "../components/bars/RightBar";
import CentralHome from "../components/CentralHome";


const Home = () =>{
    const { 
        user,
    } = useContext(UserContext)

    if (user === null) {
        return <h1>Login</h1>
    } 
    
    return (    
        <div className="mx-5">
            <div className="d-flex">
                <div className ="col-lg-1 col-xl-3">
                    <SideNav/>
                </div>
                <div className="col-lg-11 col-xl-9 d-flex justify-content-between">
                    <div className="col-7">
                        <CentralHome/>
                    </div>
                    <div className="col-5">
                        <RightBar/>
                    </div>  
                </div>    
            </div>
        </div>
    )
}

export default Home