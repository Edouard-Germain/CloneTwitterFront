import CardFollowings  from "../components/CardFollowings";
import ResearchBar  from "../components/ResearchBar";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-left: 5%;
`

const RightBar = () => {

    return (
        <Container>
            <ResearchBar/>
            <div className="mt-4">
                <CardFollowings/>
            </div> 
        </Container>
    
    )
}

export default RightBar
