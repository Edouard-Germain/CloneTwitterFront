import { useContext, useState, useEffect } from "react";
import { UserContext } from '../context/context';
import styled from "styled-components";

import TopBar from "../components/bars/TopBar"
import InputTweet from "../components/inputs/InputTweet";
import UsertweetsCard from "../components/cards/UsertweetsCard";
import PictureProfil from "./avatars/PictureProfil";

import { 
    ButtonWhiteSmall,
} from "../styles/Button";


const CentralContainer = styled.div`
    border-left: 1px solid rgb(239, 243, 244);
    border-right: 1px solid rgb(239, 243, 244);
    border-bottom: none;
    width: 100%;  
`
const ScrollContainer = styled.div`
    height: calc(100vh - 50px);
    overflow-y: scroll;
`
const Header = styled.div`
    border-bottom: 1px solid rgb(239, 243, 244);
`
const PictureBackground = styled.div`
    z-index:1;
    background-color: rgb(207, 217, 222);
    padding-bottom: 33%;
`
const Informations = styled.div`
    padding: 10px; 
    height: 200px;
`
const PositionAbsolute = styled.div`
    position: absolute;
    z-index:3;
`
const RowEdit = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
const Picture = styled.div`   
`
const Button = styled.div`
    width: 110px;
`

const CentralUser = () => {
    const { user } = useContext(UserContext)
    const [ userTweet, setUserTweet ] = useState(null)

    const identity = user._id

    useEffect(() => {
        fetch(`http://localhost:5000/users/${identity}`)
        .then(response => response.json())
        .then(data => setUserTweet(data))
    }, [])

    if (userTweet == null){
        return <p>Probleme</p>
    }

    const Ufeed = userTweet.tweets
    console.log("U", Ufeed)
  
    return (
        <CentralContainer>
            <TopBar
                title={user.username}
                tweets={userTweet}
            />
            <div>
            <ScrollContainer>
                <Header>
                    <PictureBackground/>
                    <PositionAbsolute>
                            <RowEdit>
                                <Picture>
                                    <PictureProfil
                                        size={"60px"}
                                    />
                                </Picture>
                                <Button>
                                    <ButtonWhiteSmall>Edit profile</ButtonWhiteSmall>
                                </Button>  
                            </RowEdit>         
                        </PositionAbsolute>
                    <Informations>
                    </Informations>
                </Header>
                
                <InputTweet/>
                {Ufeed.map((tweet)=>
                    <UsertweetsCard props={tweet}></UsertweetsCard> 
                )}
            </ScrollContainer>
            </div>  
        </CentralContainer>
    );
};

export default CentralUser;