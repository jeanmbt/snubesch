import styled from "styled-components";
import { colors, device } from "../../styles/global";

export const StyledHome = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');

  & * {
    font-family: 'Roboto-Regular', sans-serif;
  }
  h3 {
    margin: 0.5rem ;
    margin-bottom: 1rem ;
    text-align: center;
    color: ${colors.text};
    font-size: 1.5rem;
    @media(${device.mobile}) {
      margin: 0.5 0 ;
      font-size: 1.1rem;
    }
    @media(${device.mobile}) {
      margin: 0.5 0 ;
      font-size: 1.3rem;
    }
    
    @media(${device.tablet}) {
      font-size: 1.5rem;
  }
  }
`