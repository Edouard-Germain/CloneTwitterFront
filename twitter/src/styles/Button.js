import styled from "styled-components";

const ButtonBlue = styled.button`
    background-color: rgb(29, 155, 240);
    border: none;
    cursor: pointer;
    height: 40px;
    width: 100%;
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

const ButtonBlueLarge = styled.button`
    background-color: rgb(29, 155, 240);
    border: none;
    cursor: pointer;
    height: 50px;
    width: 100%;
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

const ButtonWhiteSmall = styled.button`
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(207, 217, 222);
    cursor: pointer;
    height: 30px;
    width: 100%;
    border-radius: 90px;
    text-align: center;
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 14px;

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

const ButtonBlackSmall = styled.button`
    background-color: rgb(0, 0, 0);
    border: none;
    cursor: pointer;
    height: 30px;
    width: 100%;
    padding: 0 20px;
    border-radius: 90px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 14px;

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
    margin-top: 10px;
    margin-left: 16px;
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
    ButtonBlueLarge,
    ButtonWhite,
    ButtonWhiteSmall,
    ButtonBlack,
    ButtonBlackSmall,
    ButtonClose,
}