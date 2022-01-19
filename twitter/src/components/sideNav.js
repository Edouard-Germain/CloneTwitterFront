import {BiHomeSmile} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {IoIosLogOut} from 'react-icons/io'
import { BsTwitter } from "react-icons/bs";

import styled from "styled-components";


const ButtonBlue = styled.div`
    background-color: rgb(29, 155, 240);
    border: none;
    cursor: pointer;
    width: 300px;
`
const sideNav = ()=>{

    return (
        <div>
            <BsTwitter
            />
            <BiHomeSmile
            />
            <FiUser
            />
            <FiUsers
            />
            <IoIosLogOut
            />
            <ButtonBlue> tweeter</ButtonBlue>
        </div>
    )
}
export default sideNav