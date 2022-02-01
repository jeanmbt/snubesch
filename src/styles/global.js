import styled from "styled-components";

export const colors = {
  background: "#F9F9F9",
  button: "#0099EE",
  buttonHover: "#0073b3",
  text: "#445566",
  border: "#AABBCC",
};

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 20em;
  margin: 0.5em;
  font-size: 1rem;
  padding: 0.65em;
  border-radius: 0.2em;
  outline: none;
  border: 1px solid ${colors.border};
  background-color: white;
  &:focus {
    outline: none;
    border: 1px solid ${colors.button};
  }
`;

// responsive
// display: flex;
// justify-content: center;
// align-items: start;
// flex-direction: column;

export const StyledLabel = styled.label`
  padding: 0.65em;
`;
