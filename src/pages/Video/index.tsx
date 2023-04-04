import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { VideoStyled } from "./style";

type ShowsProps = {
    id: string,
    title: string,
    url: string
}

const Video = () => {
    const [show, setShow] = useState<ShowsProps | null>(null)
    const { id } = useParams()

    useEffect(() => {
        handleGetVideo()
    }, [])

    const handleGetVideo = async () => {
        const results = await api.getVideo(id!)
        setShow(results)
    }

    if(!show){
        return <h1>Carregando...</h1>
    }

    return (
        <VideoStyled>
            <h1>{show.title}</h1>
            <video controls controlsList="nodownload" autoPlay>
                <source src={show.url} type="video/mp4" />
            </video>
        </VideoStyled>
    )
}

export default Video;