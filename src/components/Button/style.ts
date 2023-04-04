import styled from "styled-components";

export const ButtonStyled = styled.div`
    background-color: #f3f3f3;
    border-radius: 6px;

    > button {
        font-size: 1.6rem;
        width: 100%;
        height: 100%;
        padding: 4px 5px;
        border: none;
        cursor: pointer;
        border-radius: 6px;
        background-color: transparent;
    }

    :hove {
        opacity: 0.9;
    }

    :active {
        transform: scale(0.98);
    }

    @media (max-width: 420px) {
        display: none;
    }

`