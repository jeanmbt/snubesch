import styled from "styled-components";
import { device } from "../../styles/global";

export const StyledBanner = styled.div`
  background-image: none;
  margin: 0;
  padding: 0;
  @media(${device.mobile}) {
    width: 100vw;
  }
  @media(${device.tablet}) {
    width: 100vw;
  }
  @media(${device.laptop}) {
    width: fit-content;
  }
  @media(${device.desktop}) {
    width: fit-content;
  }
`