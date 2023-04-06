import { useNavigate, useLocation } from "react-router-dom";
import Input from "../Input";
import { HeaderStyled } from "./style";
import Button from "../Button";
import {BiSearch} from 'react-icons/bi'
import { useContext } from "react";
import { SearchContext } from "../../contexts/Search";

const Header = () => {
    const { Search, SetSearch } = useContext(SearchContext);
    const {pathname} = useLocation()
    const navigate = useNavigate()

    return (
        <HeaderStyled>
            <div className="container">
                <h1 onClick={() => navigate('')}>SHOWS</h1>
                {pathname !== '/' ||
                    <Input 
                        placeholder="Pesquisar"
                        onChange={(e) => SetSearch(e.target.value)}
                        value={Search}
                    >
                        <BiSearch/>
                    </Input>
                }
                <Button className="btn" bg="#fff" onClick={() => navigate('')}>Home</Button>
            </div>
        </HeaderStyled>
    )
}

export default Header;