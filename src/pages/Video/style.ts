import styled from "styled-components";

export const VideoStyled = styled.div`
    padding: 0 5%;
    margin-bottom: 50px;

    > h1 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 3.6rem;
        line-height: 3.6rem;
    }

    > video {
        box-shadow: rgb(4 4 4) 0px 0px 15px 0px;
        // box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
        width: 100%;
        height: 100%;
    }

    > .actions {
        margin-top: 16px;
        display: flex;
        justify-content: end;
        gap: 12px;

        > div {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
    }
`