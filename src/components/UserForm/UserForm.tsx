import { useFormik, FormikHelpers } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IFormValues, IUserForm } from "../../types/Form.type";
import { StyledButton } from "../Button/Button.style";
import {
  FormWrapper,
  InputWrapper,
  PhoneWrapper,
  StyledError,
  StyledInput,
  StyledLabel,
} from "./UserForm.style";
import { FormSchema } from "../../utils/FormSchema";

import { Centered, colors } from "../../styles/global";

export const UserForm = (props: IUserForm) => {
  const { country, setSubmitted, setFormData, setCompany, setName, setPhone, setEmail } = props;

  const countryLowerCase = country?.toString().toLowerCase();

  const initialValues = {
    company: "",
    name: "",
    phone: "",
    email: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: FormSchema,
    onSubmit: (values: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
      setFormData(
        `▶ User Data: company: ${values.company}  name: ${formik.values.name} phone: ${formik.values.phone} email: ${formik.values.email}`
      );
      setCompany(values.company);
      setName(values.name);
      setPhone(values.phone);
      setEmail(values.email);
      setSubmitted(true);
    },
  });

  const setPhoneOnChange = (phone: string) => {
    formik.values.phone = phone;
  };

  const fetchError = formik.touched.name && formik.errors.name && formik.errors.name;

  const borderStyle = `1px solid ${colors.border}`;

  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <StyledLabel htmlFor="company">Company</StyledLabel>
          <StyledInput
            onChange={formik.handleChange}
            value={formik.values.company}
            id="company"
            name="company"
            placeholder="Company"
            type="text"
            border={formik.touched.email && formik.errors.email}
          />
        </InputWrapper>
        <StyledError style={{ display: "none" }}>
          {formik.touched.company && formik.errors.company && formik.errors.company}
        </StyledError>

        <InputWrapper>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput
            onChange={formik.handleChange}
            value={formik.values.name}
            id="name"
            type="text"
            name="name"
            placeholder="Full name"
            border={formik.touched.name && formik.errors.name}
          />
        </InputWrapper>
        <StyledError style={{ display: "none" }}>
          {formik.touched.name && formik.errors.name && formik.errors.name}
        </StyledError>

        <InputWrapper>
          <StyledLabel htmlFor="phone">Phone</StyledLabel>
          <PhoneWrapper>
            {/* TODO: Make a separate component */}
            <PhoneInput
              inputStyle={{
                border: `${fetchError ? "1px solid red" : borderStyle}`,
                height: "2.9em",
                width: "24.5em",
                borderRadius: "0.2em",
              }}
              buttonStyle={{ border: `${fetchError ? "1px solid red" : borderStyle}` }}
              onChange={(phone) =>
                setPhoneOnChange(
                  `+${
                    phone.substring(0, 2) +
                    " " +
                    phone.substring(2, 6) +
                    " " +
                    phone.substring(6, 10) +
                    " " +
                    phone.substring(10, phone.length)
                  }`
                )
              }
              country={countryLowerCase}
              value={formik.values.phone}
              isValid={(value, country) => {
                if (value.match(/12345/)) {
                  return "Invalid value: " + value + ", " + country;
                } else if (value.match(/1234/)) {
                  return false;
                } else {
                  return true;
                }
              }}
              inputProps={{ name: "phone", placeholder: "+49", id: "phone" }}
            />
          </PhoneWrapper>
          <StyledError style={{ display: "none" }}>
            {formik.touched.phone && formik.errors.phone && formik.errors.phone}
          </StyledError>
        </InputWrapper>

        <InputWrapper>
          <StyledLabel htmlFor="email">E-Mail</StyledLabel>
          <StyledInput
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            border={formik.touched.email && formik.errors.email}
          />
        </InputWrapper>
        <StyledError style={{ display: "none" }}>
          {formik.touched.email && formik.errors.email && formik.errors.email}
        </StyledError>

        {/* SUBMIT */}
        <StyledButton useCase={"formButton"} type={"submit"}>
          Get Informed
        </StyledButton>
      </form>
    </FormWrapper>
  );
};
