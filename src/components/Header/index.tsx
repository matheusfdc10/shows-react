import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { HeaderStyled } from "./style";

const Header = () => {
    const navigate = useNavigate()

    return (
        <HeaderStyled>
            <div className="container">
                <h1 onClick={() => navigate('')}>SHOWS</h1>
                <Input 
                    placeholder="Pesquisar"
                />
                <button onClick={() => navigate('')}>Home</button>
            </div>
        </HeaderStyled>
    )
}

export default Header;