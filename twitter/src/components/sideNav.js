import {BiHomeSmile} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {IoIosLogOut} from 'react-icons/io'
import { BsTwitter } from "react-icons/bs";

import styled from "styled-components";

const Container = styled.div`
    display : flex;
    flex-direction : column;
    padding-left : 120px;
    row-gap : 20px;
    `
const ButtonBlue = styled.div`
    color : white; 
    background-color: rgb(29, 155, 240);
    padding-top : 10px;
    padding-bottom: 10px;
    margin-left : -30px;
    border: none;
    border-radius : 30px;
    cursor: pointer;
    width: 200px;
    display: flex;
    justify-content : center;
    `
const Logocontainer = styled.div`
    display : flex;
    column-gap: 20px;
    `
const Text = styled.div`
    color : black;
    font-size : 18px;
    font-weight : 400;
    `

const sideNav = ()=>{

    return (
        <Container>

            <BsTwitter
                style={{
                        fontSize : "2.5em",
                        paddingTop : "10px",
                        color : "rgb(29, 155, 240)"
                    }}

            />

            <Logocontainer>
                <BiHomeSmile
                    style = {{fontSize : "1.8em",
                              marginBottom : "4px"
                            }}
                    
                />
             <Text>Acceuil</Text>

            </Logocontainer>
            <Logocontainer>
                <FiUser
                    style = {{fontSize : "1.8em",
                    marginBottom : "4px"
                  }}
                />
                <Text>Profile</Text>
            </Logocontainer>
            <Logocontainer>
                <FiUsers
                    style = {{fontSize : "1.8em",
                    marginBottom : "4px"
                  }}
                />
                <Text>Utilisateurs</Text>
            </Logocontainer>
            <Logocontainer>
                <IoIosLogOut
                    style = {{fontSize : "1.8em",
                    marginBottom : "4px"
                  }}
                />
                <Text>Logout</Text>
            </Logocontainer>
                <ButtonBlue> tweeter</ButtonBlue>
        </Container>
    )
}
export default sideNav