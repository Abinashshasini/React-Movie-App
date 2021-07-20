import React from "react";
//Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, callBack }) => (
  <Wrapper type="button" onClick={callBack}>
    {text}
  </Wrapper>
);
export default Button;
