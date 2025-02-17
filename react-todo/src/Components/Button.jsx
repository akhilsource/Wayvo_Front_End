import React from "react";
import './Button.css'
function Button({text,onClick}){
        return (
            <>
            <button type="submit" onClick={onClick}>{text}</button>
            </>
        )
}
export default Button