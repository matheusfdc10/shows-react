import styled from "styled-components";

export const CardStyled = styled.div`
    // max-width: 248px;
    cursor: pointer;
    transition: 300ms;

    @media (max-width: 420px){
        max-width: none;
    }

    > div {
        border-radius: 12px 12px 0 0;
        box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
        background-color: #000;
        padding: 16px;
        margin-bottom: 4px;

        > img {
            width: 100%;
            height: 100%;
        }
    }

    > h3 {
        font-size: 2.6rem;
        text-align: center;
        line-height: 2.6rem;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        overflow: hidden;

        @media (max-width: 420px) {
            font-size: 1.8rem;
            line-height: 1.8rem;
        }
    }

    :hover {
        transform: scale(1.1);
        opacity: 90%;
    }

    :active {
        transform: scale(1.075);
    }

`