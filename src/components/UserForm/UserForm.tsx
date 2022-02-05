import { useFormik, FormikHelpers, validateYupSchema } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormValues } from "../../types/Form.type";

import { StyledButton } from "../Button/Button.style";
import { FormWrapper, PhoneWrapper, StyledError, StyledInput, StyledLabel } from "./UserForm.style";

import { FormSchema } from "../../utils/FormSchema";

import React from "react";
import { Centered } from "../../styles/global";
// import { Country } from "react-phone-number-input";

interface IUserForm {
  country: string | undefined;
  submitted: boolean | undefined;
  setSubmitted: any;
  setFormData: any;
  setCompany: any;
  setName: any;
  setPhone: any;
  setEmail: any;
}
export const UserForm = (props: IUserForm) => {
  // const { country, setCountry } = useCurrentLocation();

  const { country, setSubmitted, setFormData, setCompany, setName, setPhone, setEmail } = props;

  const initialValues = {
    company: "",
    name: "",
    phone: "",
    email: "",
  };

  const countryLowerCase = country?.toString().toLowerCase();

  const formik = useFormik({
    initialValues,
    validationSchema: FormSchema,
    onSubmit: (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
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

  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        {/* COMPANY */}
        <div>
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
        </div>
        <StyledError>
          {formik.touched.company && formik.errors.company && formik.errors.company}
        </StyledError>

        {/* NAME */}
        <div>
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
        </div>
        <StyledError>{formik.touched.name && formik.errors.name && formik.errors.name}</StyledError>

        {/* PHONE */}
        <StyledLabel htmlFor="phone">Phone</StyledLabel>
        <PhoneWrapper border={formik.touched.name && formik.errors.name}>
          {/* TODO: Make a separate component */}
          <PhoneInput
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
        <StyledError>
          {formik.touched.phone && formik.errors.phone && formik.errors.phone}
        </StyledError>

        {/* EMAIL */}
        <div>
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
        </div>
        <StyledError>
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
