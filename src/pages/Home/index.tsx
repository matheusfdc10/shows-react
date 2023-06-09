import { useEffect, useState } from "react"
import api from "../../api"
import VideoContainer from "../../components/VideoContainer"
import Loading from "../../components/Loading"

type ListProps = {
    id: string
    title: string,
    shows: {
        id: string,
        title: string,
        url: string
    }[]
}[]

const Home = () => {
    const [playList, setPlayList] = useState<ListProps | null>(null)

    useEffect(() => {
        handlePlayList()
    }, [])

    const handlePlayList = async () => {
        const results = await api.getPlayList()
        setPlayList(results)
    }

    if(!playList) {
        return <Loading />
    }

    return (
        <>
            {playList.map(data => (
                <VideoContainer key={data.id} listShows={data} themaID={data.id}/>
            ))}
        </>
    )
}

export default Home;