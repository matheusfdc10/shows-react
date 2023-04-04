import { CardStyled } from "./style";

interface ShowProps {
    show: {
        title: string,
        url: string
    },
    logo: string,
    onClick: VoidFunction
}

const Card = ({show, logo, onClick}: ShowProps) => {

    return(
        <CardStyled onClick={onClick} title={show.title}>
            <div>
                <img src={logo === 'Lollapalooza 2023'? "/logo_lolla.png" :  "/logo_rio.png"}/>
            </div>
            <h3>{show.title}</h3>
        </CardStyled>
    )
}

export default Card;