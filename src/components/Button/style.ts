import styled from "styled-components";

export const ButtonStyled = styled.div`
    background-color: #f3f3f3;
    border-radius: 6px;

    > button {
        font-size: 2rem;
        line-height: 2.2rem;
        font-weight: bold;
        width: 100%;
        height: 100%;
        padding: 4px 4px;
        border: none;
        cursor: pointer;
        border-radius: 6px;
        background-color: transparent;
    }

    :hover {
        opacity: 0.9;
    }

    :active {
        transform: scale(0.98);
    }

    // @media (max-width: 420px) {
    //     display: none;
    // }

`