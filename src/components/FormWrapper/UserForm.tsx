import { useFormik, FormikHelpers } from "formik";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormValues } from "../../types/Form.type";
// import { PhoneInput, PhoneNumber } from "react-phonenr-input";
import { PhoneInput, IFormikUiPhoneInputProps } from "react-formik-ui";

import { StyledButton } from "../Button/Button.style";
import { FormWrapper, StyledError, StyledInput, StyledLabel } from "./UserForm.style";

import { FormSchema } from "../../utils/FormSchema";
import { useCurrentLocation } from "../../utils/useCurrentLocation";
import React, { useRef, useState } from "react";

import { default as countries } from "../../api/CountryCode.json";

export const Select = () => {
  const { country, setCountry } = useCurrentLocation();
  const location = country;

  console.log("hi " + location);
  console.log(countries);

  const matchCountry = (location: string, countries: any) => {
    countries.filter((country: { code: string }) => {
      country.code.includes(location);
    });
  };

  matchCountry(location, countries);
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

  console.log(country);
  const countryLowerCase = country?.toString().toLowerCase();

  const formik = useFormik({
    initialValues,
    // validationSchema: FormSchema,
    onSubmit: (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
      console.log("hi");
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
            // border={formik.touched.company && formik.errors.company}
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
          <div>
            <Select></Select>
          </div>

          {/* "react-phone-input-2 */}

          {/* <PhoneInput
            // onChange={formik.handleChange}
            // country={countryLowerCase}
            // value={formik.values.phone}
            // inputProps={{ name: "phone", placeholder: "Phone" }}
            name="hi"
          /> */}

          {/* <PhoneInput name="phone" placeholder="Phone" onChange={handleChange} /> */}
          <StyledInput
            onChange={formik.handleChange}
            value={formik.values.phone}
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"

            // border={formik.touched.phone && formik.errors.phone}
          />
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
