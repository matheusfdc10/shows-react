import React from "react";
import { InputStyled } from "./style";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {}

const Input = ({children, ...props}: InputProps) => {
    return (
        <InputStyled>
            <input {...props}/>
            {children}
        </InputStyled>
    )
}

export default Input;