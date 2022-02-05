import styled from "styled-components";

export const Label = styled.p`
  grid-area: label;
  font-weight: bold;
`

export const Content = styled.p`
  grid-area: content;
  overflow-wrap: break-word;
`
export const DisplaySubmittedFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(10em, 20em, 30em);
`

export const DisplaySubmittedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: min-content;
  border: 2px solid black;
  margin: 2em;
  padding: 2em;
  border-radius: 0.28em;
  background-color: white;
  h3{margin-top: 0}
`
export const DisplaySubmittedRow = styled.div`
  display: inline-grid;
  grid-template-columns: 35% 75%;
  grid-template-areas: "label content"

`
