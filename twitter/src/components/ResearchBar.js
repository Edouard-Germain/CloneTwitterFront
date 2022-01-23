import styled from "styled-components";

import { FiSearch } from 'react-icons/fi'


const Container = styled.div`
    position: relative; 
    background-color: rgb(247, 249, 249);
    border-radius: 16px;
    margin: 10px 0;
    padding: 10px 20px; 
    width: 100%;
    display: flex;
`

const Text = styled.input`
    color: rgb(133, 133, 133);
    border: none; 
    outline: none;
    margin-left: 10px;
    width: 100%;
    font-size: 15px;
    background-color: transparent;
`


const ResearchBar = () => {
    return(
        <Container>
            <FiSearch
                style = {{
                    fontSize : "1.5em",
                    color: 'rgb(133, 133, 133)',
                }}
            />
            <Text
                placeholder="Search Twitter"
            />
        </Container>  
    )
}

export default ResearchBar