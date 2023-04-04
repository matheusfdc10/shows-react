import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { HeaderStyled } from "./style";
import Button from "../Button";
import {BiSearch} from 'react-icons/bi'

const Header = () => {
    const navigate = useNavigate()

    return (
        <HeaderStyled>
            <div className="container">
                <h1 onClick={() => navigate('')}>SHOWS</h1>
                <Input 
                    placeholder="Pesquisar"
                >
                    <BiSearch/>
                </Input>
                <Button className="btn" bg="#fff" onClick={() => navigate('')}>Home</Button>
            </div>
        </HeaderStyled>
    )
}

export default Header;