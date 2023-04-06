import { useState } from "react";
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
    const [videoPreview, setVideoPreviw] = useState<boolean>(false)

    return(
        <CardStyled
            title={show.title} 
            onClick={onClick} 
            onMouseEnter={() => setVideoPreviw(old => old = true)} 
            onMouseLeave={() => setVideoPreviw(old => old = false)}
        >
            {videoPreview ?
                    <video autoPlay>
                        <source src={show.url} type="video/mp4" />
                    </video>
                : 
                <>
                    {/* <div>
                        <img src={logo === 'Lollapalooza 2023'? "/logo_lolla.png" :  "/logo_rio.png"}/>
                    </div>
                    <h3>{show.title}</h3> */}
                </>
            }
            <div>
                <img src={logo === 'Lollapalooza 2023'? "/logo_lolla.png" :  "/logo_rio.png"}/>
            </div>
            <h3>{show.title}</h3>
        </CardStyled>
    )
}

export default Card;