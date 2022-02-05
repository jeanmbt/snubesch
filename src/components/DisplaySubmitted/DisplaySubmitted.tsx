import Button from "../Button";

import {
  Content,
  DisplaySubmittedFlex,
  DisplaySubmittedRow,
  DisplaySubmittedWrapper,
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
      <p style={{ width: "30em", textAlign: "center" }}>
        You've taken the first step. Our experts will get in touch with you soon
      </p>
      <hr style={{ width: "80%" }} />

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
