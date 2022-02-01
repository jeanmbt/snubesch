import { StyledButton } from "./Button.style";
import React from "react";

export interface IButtonProps {
  children?: React.ReactNode;
}

export const Button = (props: IButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>;
};
