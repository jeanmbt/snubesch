import { Centered } from "../../styles/global";
import { FormWrapper } from "../UserForm/UserForm.style";

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
    <FormWrapper display="display">
      <Centered>
        <h3>Thank you for your request!</h3>
        <p style={{ width: "30em", textAlign: "center" }}>
          You've taken the first step. Our experts will get in touch with you soon
        </p>
        <hr style={{ width: "80%" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <p style={{ fontWeight: "bold" }}>Company</p>
            {company}
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Name</p>
            {name}
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Phone</p>
            {phone}
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>E-mail</p>
            {email}
          </div>
        </div>
      </Centered>
    </FormWrapper>
  );
};
