import styled from "styled-components";
import { colors } from "../../styles/global";
import { IFormWrapper, IStyledInput } from "../../types/Form.type";

  
export const StyledLabel = styled.label`
  padding: 0.65em;
`;

export const StyledError = styled.div`
  color: red;
  font-size: small;
  max-width: 26em;
  margin: 0 0.65em;
  padding: 0 0.65em;
`;

export const PhoneWrapper = styled.div<IStyledInput>`

`
export const InputWrapper = styled.div`
  padding: 0.4em;
`

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

export const FormWrapper = styled.div<IFormWrapper>`
  width: max-content;
  height: 15em;
  border: 2px solid black;
  margin: 2em;
  padding: 2em;
  border-radius: 0.28em;
  background-color: white;
  form{
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    ${StyledLabel}{ align-self: flex-start;
    }
    ${StyledInput}{
      align-self: flex-end;
    }
    ${InputWrapper}{
      display: flex;
    }
  }
`;
