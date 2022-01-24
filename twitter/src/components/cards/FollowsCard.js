import { useContext, useEffect } from "react";
import { UserContext } from '../../context/context';

import styled from "styled-components";
import lodash from 'lodash';

import ItemFollow from "./ItemFollow";

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

const FollowsCard  = () => {
    const { users, getUsers } = useContext(UserContext)
    const randomUsers = lodash.shuffle(users)

    useEffect(() => {
        getUsers() 
    }, [])

    console.log("randomUsers ", randomUsers )

    return (
        <Card className="card">
            <CardTitle>
                Who to follow
            </CardTitle>
            <List>
                {randomUsers.map((randomUser, index)=>
                    <ListItem>
                        <ItemFollow 
                            key={"randomUser", index}
                            username={randomUser.username}
                            pictureUrl={randomUser.pictureUrl}
                            id={randomUser._id}
                        />
                    </ListItem>
                )}
            </List>
        </Card>
    )
}
export default FollowsCard 

