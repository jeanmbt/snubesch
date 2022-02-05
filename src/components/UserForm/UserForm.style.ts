import styled from "styled-components";
import { colors } from "../../styles/global";

interface IFormWrapperProps {
  display?: string
}

interface IStyledInput {
  border?: string | boolean
}

export const FormWrapper = styled.div<IFormWrapperProps>`
  width: 60vw;
  border: 2px solid black;
  margin: 2em;
  padding: 2em;
  border-radius: 0.28em;
  background-color: white;
  > * {
    display: flex;
    justify-content: center;
    align-items: ${props => props.display ? "center" : "end"};
    flex-direction: column;
    
  }
`;

export const StyledInput = styled.input<IStyledInput>`
  width: 20em;
  border: 1px solid ${colors.border};
  font-size: 1rem;
  padding: 0.65em;
  border-radius: 0.2em;
  outline: none;
  background-color: white;
  border: ${(props) => (props.border ? `1px solid red` : `1px solid ${colors.border}`)};
  &:focus {
    outline: none;
    border: 1px solid ${colors.button};
  }
  `;


export const StyledLabel = styled.label`
  padding: 0.65em;
`;

export const StyledError = styled.p`
  color: red;
  font-size: small;
  max-width: 26em;
`;

export const PhoneWrapper = styled.div<IStyledInput>`
  border: ${(props) => (props.border ? `1px solid red` : `1px solid ${colors.border}`)};
  border-radius: 0.2em;
  outline: none;
`