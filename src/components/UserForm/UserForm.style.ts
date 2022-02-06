import PhoneInput from "react-phone-input-2";
import styled from "styled-components";
import { colors, device } from "../../styles/global";
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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  padding: 0.4em;
  @media(${device.mobile}) {
    flex-direction: column ;
    padding: 0em 0.4em;
  }
  @media(${device.tablet}) {
    flex-direction: row ;
    padding: 0.4em;
  }
  @media(${device.laptop}) {
    flex-direction: row ;
  }
  @media(${device.desktop}) {
    flex-direction: row ;
  }
  & div.react-tel-input {
    width: min(123%, 70rem);

    & input.phoneInput {
      border-radius: 0.2em !important;
      font-size: 1rem !important;
      height: 2.6em !important; 
      width: 12rem  !important;
      @media(${device.mobile}) {
        width: 16.5rem  !important;
      }
      @media(${device.tablet}) {
        width: 12rem  !important;
      }
      @media(${device.laptop}) {
        width: 12rem  !important;
      }
      @media(${device.desktop}) {
        width: 12rem  !important;
      }
    }
    & div.phoneButtonInput  {
    }
  }
`

export const StyledInput = styled.input<IStyledInput>`
  
  width: clamp(15rem, 25rem, 100%);
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
  @media(${device.mobile}) {
    
  }
  @media(${device.tablet}) {
    
  }
  @media(${device.laptop}) {
    
  }
  @media(${device.desktop}) {
    
  }
  `;

export const FormWrapper = styled.div<IFormWrapper>`
  background-color: crimson;
  border: 2px solid black;
  /* margin: 2rem; */
  padding: 2em;
  border-radius: 0.28em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(${device.mobile}) {
    margin: 0;
    padding: 0em;
  }
  @media(${device.tablet}) {
    flex-direction: row ;

    padding: 0.4em;
  }
  @media(${device.laptop}) {
    flex-direction: row ;

  }
  @media(${device.desktop}) {
    flex-direction: row ;

  }
  form{
    /* background-color: rebeccapurple; */
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    @media(${device.mobile}) {
      width: 100%;
      align-items: flex-start;
    }
    @media(${device.tablet}) {
      align-items: end;
    }
    @media(${device.laptop}) {
      align-items: end;
    }
    @media(${device.desktop}) {
      align-items: end;
    }
    /* ${StyledLabel}{ align-self: flex-start;
    }

    ${StyledInput}{
      align-self: flex-end;
    } */
  }
`;
