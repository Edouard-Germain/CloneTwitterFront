import FollowsCard  from "../../components/cards/FollowsCard";
import ResearchBar  from "../bars/ResearchBar";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-left: 30px;
`

const RightBar = () => {

    return (
        <Container>
            <ResearchBar/>
            <div className="mt-4">
                <FollowsCard />
            </div> 
        </Container>
    
    )
}

export default RightBar
