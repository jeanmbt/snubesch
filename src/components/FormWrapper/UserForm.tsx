import { useFormik, FormikHelpers, validateYupSchema } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormValues } from "../../types/Form.type";
// import { PhoneInput as PhoneInputRPI } from "react-phonenr-input";
// import { PhoneInput as PhoneInputUi } from "react-formik-ui";

import { StyledButton } from "../Button/Button.style";
import { FormWrapper, StyledError, StyledInput, StyledLabel } from "./UserForm.style";

import { FormSchema } from "../../utils/FormSchema";
import { useCurrentLocation } from "../../utils/useCurrentLocation";
import React, { useRef, useState } from "react";

import { default as countries } from "../../api/CountryCode.json";

import { useField, Form, FormikProps, Formik } from "formik";
import PhoneInputWithCountrySelect from "react-phone-number-input";

export const Select = (country: any) => {
  const location = country;
  const countriess = countries;
  console.log(countries);

  const matchCountry = (location: any, countries: any) => {
    countriess.filter((country: { code: string }) => {
      // console.log(country.code);
      return country.code.includes(location.country);
    });
  };

  const test = matchCountry(location.country, countries);

  console.log(location);
  console.log(location.country + " type: " + typeof location.country);
  console.log("call matchCountry functon " + " " + matchCountry(location.country, countries));
  console.log(test);

  return (
    <select defaultValue={"hi"}>
      {countries.map((country) => (
        <option key={country.code} value={country.dial_code}>
          {`${country.name + " " + country.dial_code}`}
        </option>
      ))}
    </select>
  );
};

export const UserForm: React.FC<{}> = () => {
  const { country, setCountry } = useCurrentLocation();
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formData, setFormData] = useState("");
  // const [value, setValue] = useState<PhoneNumber>("");

  // const handleChange = (phoneNumber: PhoneNumber) => {
  //   // Do something with the phoneNumber
  //   setValue(phoneNumber);
  // };

  const initialValues = {
    company: "",
    name: "",
    phone: "",
    email: "",
  };

  const countryLowerCase = country?.toString().toLowerCase();

  const formik = useFormik({
    initialValues,
    // validationSchema: FormSchema,
    onSubmit: (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
      console.log("hi");

      console.log(phoneNumber);
      alert(JSON.stringify(values, null, 2));
    },
  });

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
          ></StyledInput>
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
            // border={formik.touched.name && formik.errors.name}
          />
        </div>
        <StyledError>{formik.touched.name && formik.errors.name && formik.errors.name}</StyledError>

        {/* PHONE */}
        <div>
          <StyledLabel htmlFor="phone">Phone</StyledLabel>
          <div>{/* <Select country={country} /> */}</div>

          {/* "react-phone-input-2 */}
          <PhoneInput
            onChange={(phone) => setPhoneNumber(phone)}
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
            inputProps={{ name: "phone", placeholder: "Phone", id: "phone" }}
          />

          {/* <StyledInput
            onChange={formik.handleChange}
            value={formik.values.phone}
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"

            // border={formik.touched.phone && formik.errors.phone}
          /> */}
        </div>
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
            // border={formik.touched.email && formik.errors.email}
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
