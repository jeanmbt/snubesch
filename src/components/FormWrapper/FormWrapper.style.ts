import { Field } from "formik";
import styled from "styled-components";

export const StyledFormWrapper = styled.div`
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