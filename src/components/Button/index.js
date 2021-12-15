import React from "react";
// Styles

/* eslint-disable react/prop-types */
import { Wrapper } from "./Button.styles";

const Button = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

export default Button;
