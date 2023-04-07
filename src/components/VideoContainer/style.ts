import styled from "styled-components";

export const VideoContainerStyle = styled.div`
    margin: 0 18px;

    > h1 {
        font-size: 3.2rem;
        line-height: 3.2rem;
        margin-top: 25px;
        margin-bottom: 10px;
    }

    .container {
        display: grid;
        // grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        grid-template-columns: repeat(6, minmax(180px, 1fr));
        gap: 24px;
        // margin: 0 auto;


        @media (max-width: 1230px) {
            grid-template-columns: repeat(5, minmax(180px, 1fr));
        }

        @media (max-width: 1030px) {
            grid-template-columns: repeat(4, minmax(180px, 1fr));
        }

        @media (max-width: 830px) {
            grid-template-columns: repeat(3, minmax(180px, 1fr));
        }


        @media (max-width: 630px) {
            grid-template-columns: repeat(2, minmax(180px, 1fr));
        }
        
        @media (max-width: 420px) {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        }
    }
`