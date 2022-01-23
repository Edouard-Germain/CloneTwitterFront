import {Link} from 'react-router-dom'
import {useContext} from 'react';
import {UserContext} from '../context/context';
import MediaQuery from 'react-responsive'
import styled from "styled-components";
import { 
    ButtonBlueLarge,
} from "../styles/Button";

import ButtonProfile from "./buttons/ButtonProfile";

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
    padding-right: 10%;
    padding-top: 15px;
    padding-bottom: 15px;
`
const List = styled.ul`
    padding-top: 20px;
    padding-inline-start: 0;
`

const ListItem = styled.li`
    display: flex;
    margin: 15px 0px;
    padding: 10px 16px;

    :hover {
        transition-property: background-color, box-shadow;
        background-color: rgb(15, 20, 25, 0.1);
        border-radius: 90px;
        transition-duration: 0.2s
    }
`
const Text = styled.div`
    color: black;
    font-size: 20px;
    font-weight: 400;
    padding-left: 20px;

    @media (max-width: 1204px) {
        display: none;
    }
`

const SideNav = () => {
    const {user} = useContext(UserContext)
    const isConnected = user ==! null

    return (
        <>
        <Container>
            <div>
                <div className="ms-3">
                    <BsTwitter
                        style={{
                            fontSize: "2em",
                            color: "rgb(29, 155, 240)",
                        }}
                    />
                </div>
                <List >
                    <Link 
                        style={{textDecoration:"none"}} 
                        to={'/home'}>
                        <ListItem>
                            <BiHomeSmile
                                style = {{
                                    fontSize: "1.8em",
                                    color: 'black',
                                }} 
                            />
                            <Text>Accueil</Text>
                        </ListItem>
                    </Link>
                    <Link 
                        style={{textDecoration:"none"}} 
                        to = {`/${user.username}`}
                    >
                        <ListItem>
                            <FiUser
                                style = {{
                                    fontSize : "1.8em",
                                    color: 'black',
                                }}
                            />
                            <Text>Profil</Text>
                        </ListItem>
                    </Link>
                    <Link 
                        style={{textDecoration:"none"}} 
                        to = {'/:username'}
                    >
                        <ListItem>
                            <FiUsers
                                style = {{
                                    fontSize : "1.8em",
                                    color: 'black',
                                }}
                            />
                            <Text>Utilisateurs</Text>
                        </ListItem>
                    </Link>
                    <Link 
                        style={{textDecoration:"none"}} 
                        to={'/login'}
                    >
                        <ListItem>
                            <IoIosLogOut
                                style = {{
                                    fontSize : "1.8em",
                                    color: 'black',
                                }}
                            />
                            <Text>Logout</Text>
                        </ListItem> 
                    </Link>
                </List >

                <MediaQuery minWidth={1224}>
                    <div className="mt-4">
                        <ButtonBlueLarge>Tweet</ButtonBlueLarge>
                    </div>
                </MediaQuery>
            
            </div>
            <MediaQuery minWidth={1224}>
                <ButtonProfile/>
            </MediaQuery>
            
        </Container>
        </>  
    )
}

export default SideNav