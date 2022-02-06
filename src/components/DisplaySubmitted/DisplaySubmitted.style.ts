import styled from "styled-components";
import { colors, device } from "../../styles/global";

export const Label = styled.p`
  grid-area: label;
  font-weight: bold;
`

export const Content = styled.p`
  grid-area: content;
  overflow-wrap: break-word;
`

export const DisplaySubmittedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2em;
  border-radius: 0.28em;
  background-color: white;
  
    @media(${device.mobile}) {
      padding: 0.3em;
      h3{
        font-size: 1.8rem;
      }
    }
    @media(${device.tablet}) {

    }
    @media(${device.laptop}) {

    }
    @media(${device.desktop}) {

    }
    h3{margin-top: 1em}
`
export const DisplaySubmittedFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-bottom: 2em;
  @media(${device.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media(${device.laptop}) {  
  }
`

export const Divider = styled.div`
  width: 80%;
  border: 1px solid ${colors.border};
  margin: 0 1em; 
`

export const DisplaySubmittedRow = styled.div`
  display: inline-grid;
  grid-template-columns: 30% 70%;
  grid-template-areas: "label content";
  min-width: 10rem;  
  text-align: center;
  @media(${device.mobile}) {
    display: flex;
    flex-direction: column;
  }
  @media(${device.tablet}) {
    display: inline-grid;
    min-width: 20rem;
    flex-direction: row;
    grid-template-columns: 40% 60%;
    grid-template-areas: "label content";
  }
  @media(${device.laptop}) {
    min-width: 20rem;
    grid-template-columns: 40% 60%;
    grid-template-areas: "label content";
  }
 

`
