import { StyledButton } from "./Button.style";
import React from "react";
import { IButtonProps } from "../../types/Button.type";

export const Button = (props: IButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>;
};
