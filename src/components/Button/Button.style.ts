import styled from "styled-components";
import { colors } from "../../styles/global";
import { IButtonProps } from "../../types/Button.type";

export const StyledButton = styled.button<IButtonProps>`
margin-bottom: 1em;
  font-family: 'Roboto-Regular', sans-serif;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 0.28em;
  background-color: ${colors.button};
  color: white;
  padding: 0.8em 4em;
  align-self: center;
  margin-top: 1em;
  &:hover {
    background-color: ${colors.buttonHover}
  }
`

