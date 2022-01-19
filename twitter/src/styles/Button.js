import styled from "styled-components";

const ButtonBlue = styled.button`
    background-color: rgb(29, 155, 240);
    border: none;
    cursor: pointer;
    height: 40px;
    width: 100%;
    margin-bottom: 5px;
    padding-top: 2px;
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
    width: 100%;
    margin-bottom: 5px;
    padding-top: 2px;
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

const ButtonBlack = styled.button`
    background-color: rgb(0, 0, 0);
    border: none;
    cursor: pointer;
    height: 40px;
    width: 100%;
    margin-bottom: 5px;
    padding-top: 2px;
    border-radius: 90px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-weight: bold;

    :hover {
        transition-property: background-color, box-shadow;
        background-color: rgb(0, 0, 0, 0.1);
        transition-duration: 0.2s
    }
`

const ButtonClose = styled.button`
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    height: 40px;
    width: 40px;
    margin-bottom: 5px;
    padding-top: 2px;
    text-align: center;
    color: rgb(0, 0, 0);
    font-weight: bold;
    border: none;

    :hover {
        transition-property: background-color, box-shadow;
        background-color: rgb(0, 0, 0, 0.1);
        border-radius: 40px;
        transition-duration: 0.2s
    }
`

export {
    ButtonBlue,
    ButtonWhite,
    ButtonBlack,
    ButtonClose,
}