import styled from "styled-components"

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

export const TextBox = styled.input `
    color: #000000; 
    font-size: 18px;
    width: 400px;
    height: 23px;
    padding: 12px;
    border-radius: 3px;
    border: 1px solid #D0D0D0;
`

export const SuccessSubmitMessage = styled.div`
    font-size: 14px;
    color: #11BA02;
    text-align: right;
    margin-right: 10px;
`   

export const ErrorSubmitMessage = styled.div`
    font-size: 14px;
    color: #F10101;
    text-align: right;
    margin-right: 10px;
`  