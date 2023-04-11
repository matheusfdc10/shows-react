import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { VideoStyled } from "./style";
import {FcLike} from 'react-icons/fc'
import {AiTwotoneLike} from 'react-icons/ai'
import Button from "../../components/Button";

type ShowsProps = {
    id: string,
    title: string,
    url: string,
    like: number,
    love: number
}


const Video = () => {
    const [show, setShow] = useState<ShowsProps | null>(null)
    const { themaID, id } = useParams()

    useEffect(() => {
        handleGetVideo()
    }, [])

    const handleGetVideo = async () => {
        const results = await api.getVideo(id!)
        setShow(results)
    }

    const handleLikeLove = async (type: 'love' | 'like') => {
        await api.loveLive(show!, type, themaID!)
        handleGetVideo()
    }

    if(!show){
        return <h1>Carregando...</h1>
    }

    return (
        <VideoStyled>
            <h1>{show.title}</h1>
            <video controls controlsList="nodownload" 
            // autoPlay
            >
                <source src={show.url} type="video/mp4" />
            </video>
            <div className="actions">
                <div>
                    <Button bg="black" onClick={() => handleLikeLove('love')}>
                        <FcLike/>
                    </Button>
                    <span>{show.love ? show.love : 0}</span>
                </div>
                <div>
                    <Button bg="black" onClick={() => handleLikeLove('like')}>
                        <AiTwotoneLike color="white"/>
                    </Button>
                    <span>{show.like ? show.like : 0}</span>
                </div>
            </div>
        </VideoStyled>
    )
}

export default Video;