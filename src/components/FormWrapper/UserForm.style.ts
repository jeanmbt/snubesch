
import { Field } from "formik";
import styled from "styled-components";
import { colors } from "../../styles/global";

export const FormWrapper = styled.div`
  width: max-content;
  border: 2px solid black;
  margin: auto;
  padding: 2em;
  border-radius: 0.28em;
  background-color: white;
  > * {
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  width: 20em;
  border: 1px solid ${colors.border};
  font-size: 1rem;
  padding: 0.65em;
  border-radius: 0.2em;
  outline: none;
  background-color: white;
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
