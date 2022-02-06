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

export const Stacked = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export  const device = {
  mobile: "min-width: 320px",
  mobileL: "min-width: 480px",
  tablet: "min-width: 768px",
  laptop: "min-width: 992px",
  desktop: "min-width: 1200px"
}


