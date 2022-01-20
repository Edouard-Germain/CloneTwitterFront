import {BiHomeSmile} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {IoIosLogOut} from 'react-icons/io'
import { BsTwitter } from "react-icons/bs";

import styled from "styled-components";

// import { 
//     ButtonBlue,
// } from "../styles/Button";

const Container = styled.div`
    display : flex;
    flex-direction : column;
    padding-left : 120px;
    row-gap : 20px;
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

const SideNav = ()=>{

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
             <Text>Accueil</Text>

            </Logocontainer>
            <Logocontainer>
                <FiUser
                    style = {{fontSize : "1.8em",
                    marginBottom : "4px"
                  }}
                />
                <Text>Profil</Text>
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
            
        </Container>
    )
}
export default SideNav