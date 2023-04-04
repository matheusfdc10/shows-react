import { useNavigate } from "react-router-dom";
import Card from "../Card";
import { VideoContainerStyle } from "./style";

interface ListShowsProps {
    listShows: {
        id: string,
        title: string,
        shows: {
            id: string
            title: string
            url: string
        }[]
    }
}

const VideoContainer = ({listShows}: ListShowsProps) => {
    const navigate = useNavigate()

    return (
        <VideoContainerStyle>
            <h1 title={listShows.title}>{listShows.title}</h1>
            <div className="container">
                {listShows.shows.map(show => (
                    <Card key={show.title} show={show} logo={listShows.title} onClick={() => navigate(`show/${show.id}`)}/>
                ))}
            </div>
        </VideoContainerStyle>       
    )
}

export default VideoContainer;