import styled from "styled-components";

const ButtonBlue = styled.button`
    background-color: rgb(29, 155, 240);
    border: none;
    cursor: pointer;
    height: 40px;
    margin-bottom: 5px;
    padding-top: 7px;
    border-radius: 90px;
    text-align: center;
    color: white;
    font-weight: bold;

    :hover {
        transition-property: background-color, box-shadow;
        background-color: rgb(26, 140, 216);
        transition-duration: 0.2s
    }
`

const ButtonWhite = styled.button`
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(207, 217, 222);
    cursor: pointer;
    height: 40px;
    margin-bottom: 5px;
    padding-top: 7px;
    border-radius: 90px;
    text-align: center;
    color: rgb(29, 155, 240);
    font-weight: bold;

    :hover {
        transition-property: background-color, box-shadow;
        background-color: rgb(29, 155, 240, 0.1);
        transition-duration: 0.2s
    }
`

export default {
    ButtonBlue,
    ButtonWhite,
}