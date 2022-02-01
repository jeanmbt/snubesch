import styled from "styled-components";
import { colors } from "../../styles/global";

export const StyledButton = styled.button`
  font-family: 'Roboto-Regular', sans-serif;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 0.28em;
  background-color: ${colors.button};
  color: white;
  padding: 0.8em 4em;
`

export const FormButton = styled(StyledButton)`
  align-self: center;
  margin-top: 1em;
`