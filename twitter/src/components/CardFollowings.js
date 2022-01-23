import { useContext} from "react";
import {UserContext} from '../context/context';

import styled from "styled-components";

import ItemFollow from "../components/ItemFollow";

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

    :hover {
        transition-property: background-color, box-shadow;
        background-color: rgb(15, 20, 25, 0.1);
        transition-duration: 0.2s
    }
`


const CardFollowings = () => {
    const { user } = useContext(UserContext)

    return (
        <Card className="card">
            <CardTitle>
                You follow
            </CardTitle>
            <List>
                <ListItem><ItemFollow/></ListItem>
                <ListItem><ItemFollow/></ListItem>
                <ListItem><ItemFollow/></ListItem>
            </List>
        </Card>
    )
}
export default CardFollowings

