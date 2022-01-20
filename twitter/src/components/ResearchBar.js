import styled from "styled-components";


const ResearchInput = styled.input`
    background-color: rgb(247, 249, 249);
    border-radius: 16px;
    border: none; 
    margin: 10px 0;
    padding: 10px 20px; 
`

const Text = styled.h5`
    color: rgb(133, 133, 133);
    font-size: 15px;
`

const ResearchBar = (props) => {
    return(
    
        <ResearchInput>
            <Text >Search Twitter</Text >
        </ResearchInput>
    
        
    )
}

export default ResearchBar