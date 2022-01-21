import styled from "styled-components";

const Container = styled.div`
    background-color: rgb(255, 255, 255, 0.1);
    height: 50px:
    align-items: center;
`

const TitlePage = styled.h4`
    font-family: Helvetica Neue;
    font-size: 10px,
    font-weight: bold;
    margin-top: 10px;
    margin-left: 10px;
`

const TopBar = (props) => {
    return (
        <Container>
            <TitlePage>{props.title}</TitlePage>
        </Container>
    )
}
export default TopBar