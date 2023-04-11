import { StyledLoading } from "./style"; 

const Loading = () => {
    return (
        <StyledLoading>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </StyledLoading>
    )
}

export default Loading;