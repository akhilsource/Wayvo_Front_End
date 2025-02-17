import React from "react";

const Input = ({ placeholder, isDisabled = false }) => {
    return <input type = "text"
    placeholder = { placeholder }
    disabled = { isDisabled }
    />;
};

export default Input;