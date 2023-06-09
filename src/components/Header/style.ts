import styled from "styled-components";

export const HeaderStyled = styled.header`
    background-color: #000;
    box-shadow: 0px 4px 5px rgba(5, 59, 75, 0.06);
    /* min-height: 70px; */
    /* min-height: 7rem; */
    padding: 18px 18px;

    position: fixed;
    width: 100%;
    z-index: 10;
    
    > .container {
        height: 100%;
        max-width: 1440px;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;

        @media (max-width: 420px) {
            > :nth-child(3){
                display: none;
            }
        }


        > h1 {
            color: #fff;
            font-size: 3.6rem;
            line-height: 3.6rem;
            cursor: pointer;

            // @media (max-width: 420px) {
            //     font-size: 2.6rem;
            // }
        }
    }
`