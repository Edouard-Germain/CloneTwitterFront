import {BiHomeSmile} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {IoIosLogOut} from 'react-icons/io'
import { BsTwitter } from "react-icons/bs";

import styled from "styled-components";
import { 
    ButtonBlue,
} from "../styles/Button";

import ButtonProfil from "./ButtonProfil"

const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20%;
    padding-right: 10%;
    row-gap: 20px;
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
`

const SideNav = ()=>{

    return (
        <Container>
            <div>
                <BsTwitter
                    style={{
                        fontSize : "2.5em",
                        color : "rgb(29, 155, 240)"
                    }}
                />
                <Logocontainer>
                    <BiHomeSmile
                        style = {{
                            fontSize : "1.8em",
                        }} 
                    />
                    <Text>Accueil</Text>
                </Logocontainer>
                <Logocontainer>
                    <FiUser
                        style = {{
                            fontSize : "1.8em",
                        }}
                    />
                    <Text>Profil</Text>
                </Logocontainer>     
                <Logocontainer>
                    <FiUsers
                        style = {{
                            fontSize : "1.8em",
                        }}
                    />
                    <Text>Utilisateurs</Text>
                </Logocontainer>
                <Logocontainer>
                    <IoIosLogOut
                        style = {{
                            fontSize : "1.8em",
                        }}
                    />
                    <Text>Logout</Text>
                </Logocontainer> 
                <div className="mt-4">
                    <ButtonBlue>Tweet</ButtonBlue>
                </div>
            </div>
            <ButtonProfil/>
        </Container>
    )
}
export default SideNav