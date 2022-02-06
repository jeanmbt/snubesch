import { StyledParagraph } from "../UserForm/UserForm.style";

import {
  Content,
  DisplaySubmittedFlex,
  DisplaySubmittedRow,
  DisplaySubmittedWrapper,
  Divider,
  Label,
} from "./DisplaySubmitted.style";

export interface IDisplaySubmitted {
  formData: string;
  company: string;
  name: string;
  phone: string;
  email: string;
}

export const DisplaySubmitted = (props: IDisplaySubmitted) => {
  const { formData, company, name, phone, email } = props;

  return (
    <DisplaySubmittedWrapper>
      <h3>Thank you for your request!</h3>
      <StyledParagraph useCase="displaySubmittedInfo">
        You've taken the first step. Our experts will get in touch with you soon
      </StyledParagraph>
      <Divider />

      <DisplaySubmittedFlex>
        <DisplaySubmittedRow>
          <Label style={{ fontWeight: "bold" }}>Company</Label>
          <Content>{company}</Content>
        </DisplaySubmittedRow>
        <DisplaySubmittedRow>
          <Label style={{ fontWeight: "bold" }}>Name</Label>
          <Content>{name}</Content>
        </DisplaySubmittedRow>
        <DisplaySubmittedRow>
          <Label style={{ fontWeight: "bold" }}>Phone</Label>
          <Content>{phone}</Content>
        </DisplaySubmittedRow>
        <DisplaySubmittedRow>
          <Label style={{ fontWeight: "bold" }}>E-mail</Label>
          <Content>{email}</Content>
        </DisplaySubmittedRow>
      </DisplaySubmittedFlex>
    </DisplaySubmittedWrapper>
  );
};
