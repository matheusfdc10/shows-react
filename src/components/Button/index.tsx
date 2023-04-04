import React, {DetailedHTMLProps} from "react";
import { ButtonStyled } from "./style";

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    bg?: string 
}

const Button = ({children, bg = "#f3f3f3", ...props}:ButtonProps) => {
    return (
        <ButtonStyled style={{backgroundColor: bg}}>
            <button {...props}>
                {children}
            </button>
        </ButtonStyled>
    )
}

export default Button;