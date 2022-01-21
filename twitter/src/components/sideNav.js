import {Link } from 'react-router-dom'
import { useContext,useState } from 'react';
import {UserContext} from '../context/context';

import styled from "styled-components";
import { 
    ButtonBlue,
} from "../styles/Button";

import ButtonProfile from "./ButtonProfile";

import {BiHomeSmile} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {IoIosLogOut} from 'react-icons/io'
import {BsTwitter} from "react-icons/bs";


const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20%;
    padding-right: 10%;
`

const Logocontainer = styled.div`
    display: flex;
    padding-top: 20px;
`

const Text = styled.div`
    color: black;
    font-size: 18px;
    font-weight: 400;
    padding-left: 10px;

    @media (max-width: 1024px) {
        display: none;
    }
`

const SideNav = ()=>{
    const {user} = useContext(UserContext)
    const isConnected = user ==! null

    console.log (user)

    return (
        <>
        <Container>
            <div>
                <BsTwitter
                    style={{
                        fontSize: "2.5em",
                        color: "rgb(29, 155, 240)"
                    }}
                />
                <Link 
                    style={{textDecoration:"none"}} 
                    to={'/home'}>
                    <Logocontainer>
                        <BiHomeSmile
                            style = {{
                                fontSize: "1.8em",
                                color: 'black',
                            }} 
                        />
                        <Text>Accueil</Text>
                    </Logocontainer>
                </Link>
                <Link 
                    style={{textDecoration:"none"}} 
                    to = {`/${user.username}`}
                >
                    <Logocontainer>
                        <FiUser
                            style = {{
                                fontSize : "1.8em",
                                color: 'black',
                            }}
                        />
                        <Text>Profil</Text>
                    </Logocontainer>
                </Link>
                <Link 
                    style={{textDecoration:"none"}} 
                    to = {'/:username'}
                >
                    <Logocontainer>
                        <FiUsers
                            style = {{
                                fontSize : "1.8em",
                                color: 'black',
                            }}
                        />
                        <Text>Utilisateurs</Text>
                    </Logocontainer>
                </Link>
                <Link 
                    style={{textDecoration:"none"}} 
                    to={'/login'}
                >
                    <Logocontainer>
                        <IoIosLogOut
                            style = {{
                                fontSize : "1.8em",
                                color: 'black',
                            }}
                        />
                        <Text>Logout</Text>
                    </Logocontainer> 
                </Link>
                <div className="mt-4">
                    <ButtonBlue>Tweet</ButtonBlue>
                </div>
            
            </div>
            <ButtonProfile/>
        </Container>
        </>  
    )
}

export default SideNav