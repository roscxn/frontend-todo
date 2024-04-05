import styled from "styled-components";

export const DisplayContainer = styled.div`
    max-height: 350px;
    width: 520px;
    overflow-y: auto;
`

export const DisplayTaskBox = styled.div`
    font-size: 17px;
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    width: 485px;
    height: 50px;
    margin-top: 30px;
`

export const LineThroughText = styled.span`
    text-decoration: line-through;
`

export const CheckboxInput = styled.input`
    width: 30px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
`