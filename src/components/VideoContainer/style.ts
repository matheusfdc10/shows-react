import styled from "styled-components";

export const VideoContainerStyle = styled.div`
    margin: 12px 18px 12px 18px;

    > h1 {
        margin-top: 25px;
        margin-bottom: 10px;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap:  24px;
        margin: 0 auto;

        @media (max-width: 420px) {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        }
    }
`