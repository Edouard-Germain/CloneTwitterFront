import { useContext, useEffect, useState } from "react";
import {UserContext} from '../context/context';

import styled from "styled-components";

const Card = styled.div`
    background-color: rgb(247, 249, 249);
    border-radius: 16px;
    border: none;  
`
const CardTitle = styled.h4` 
    padding: 10px 20px;  
`
const List = styled.ul`
    padding: 0; 
`
const ListItem = styled.li`
    border: none;
    list-style: none;
    padding: 10px 20px; 
`


const CardFollowings = () => {
    const { user } = useContext(UserContext)

    return (
        <Card className="card">
            <CardTitle>
                You follow
            </CardTitle>
            <List>
                <ListItem>An item</ListItem>
                <ListItem>A second item</ListItem>
                {/* <li class="list-group-item">A third item</li>
                <li class="list-group-item">A third item</li> */}
            </List>
        </Card>
    )
}
export default CardFollowings

