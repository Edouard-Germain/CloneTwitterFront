import styled from "styled-components";

const Container = styled.div`
    background-color: rgb(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    position: "sticky";
    padding: 15px 16px 10px 16px;
`

const TitlePage = styled.h5`
    font-family: Helvetica Neue;
    font-size: 10px,
`

const TopBar = (props) => {
    return (
        <Container>
            <div>
                <TitlePage>{props.title}</TitlePage>
            </div>
        </Container>
    )
}
export default TopBar