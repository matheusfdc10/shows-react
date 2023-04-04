import { InputStyled } from "./style";

const Input = ({...props}) => {
    return (
        <InputStyled>
            <input {...props}/>
            <span>X</span>
        </InputStyled>
    )
}

export default Input;