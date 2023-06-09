import styled from "styled-components";

export const InputStyled = styled.div`
    flex: 1;
    max-width: 400px;
    background-color: #fff;
    border-radius: 25px;
    padding: 0 12px;
    // height: 32px;
    height: 32px;
    overflow: hidden;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    > input {
        flex: 1;
        height: 100%;
        border: none;
        width: 100%;
        outline: 0px;
        font-size: 18px;
    }

`