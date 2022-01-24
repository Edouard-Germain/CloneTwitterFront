import { useContext, useEffect } from "react";
import { UserContext } from '../context/context';
import styled from "styled-components";

import TopBar from "../components/bars/TopBar"
import InputTweet from "../components/inputs/InputTweet";
import TweetCard from "../components/cards/TweetCard";

const CentralContainer = styled.div`
    border-left: 1px solid rgb(239, 243, 244);
    border-right: 1px solid rgb(239, 243, 244);
    border-bottom: none;
    width: 100%;  
`

const TweetsContainer = styled.div`
    height: calc(100vh - 50px);
    overflow-y: scroll;
`

const CentralHome = () => {
    const { 
        feed,
        getFeed, 
    } = useContext(UserContext)

    useEffect(() => {
        getFeed() 
    }, [])

    return (
        <CentralContainer>
            <TopBar
                title={"Accueil"}
            />
            <TweetsContainer>
                <InputTweet 
                    getFeed={getFeed}
                />
                {feed.length > 0 && feed.map((tweet) =>
                    <TweetCard props = {tweet}></TweetCard>
                )}
            </TweetsContainer>
        </CentralContainer>
    );
};

export default CentralHome;