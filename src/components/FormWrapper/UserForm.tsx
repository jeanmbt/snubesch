import { Formik, FormikHelpers, Form, useFormikContext } from "formik";

import { FormValues } from "../../types/Form.type";

import { StyledButton } from "../Button/Button.style";
import { FormWrapper, StyledError, StyledInput, StyledLabel } from "./UserForm.style";

import PhoneInput, { getCountries, getCountryCallingCode } from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import "react-phone-number-input/style.css";

import { FormSchema } from "../../utils/FormSchema";
import { useCurrentLocation } from "../../utils/useCurrentLocation";
import { useRef } from "react";

interface ICountrySelect {
  value: string | undefined;
  onChange: (event?: any | undefined) => void;
  labels: any;
  name: string;
}
const CountrySelect = ({ value, onChange, labels, ...rest }: ICountrySelect) => {
  return (
    <select {...rest} value={value} onChange={(event) => onChange(event.target.value || undefined)}>
      <option value="country">{labels.ZZ}</option>
      {getCountries().map((country) => (
        <option key={country} value={country}>
          {labels[country]} +{getCountryCallingCode(country)}
        </option>
      ))}
    </select>
  );
};

export const UserForm: React.FC<{}> = () => {
  const { country, setCountry } = useCurrentLocation();

  const formRef = useRef(null);

  return (
    <FormWrapper>
      <Formik
        innerRef={formRef}
        initialValues={{
          company: "",
          name: "",
          country: "",
          phone: "",
          email: "",
        }}
        onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
          setTimeout(() => {
            console.log("hi");
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={FormSchema}
        render={({ touched, errors, values, handleBlur, handleChange, handleSubmit }) => (
          <Form>
            {/* COMPANY */}
            <div>
              <StyledLabel htmlFor="company">Company</StyledLabel>
              <StyledInput
                value={values.company}
                id="company"
                name="company"
                placeholder="Company"
                type="text"
                border={touched.company && errors.company}
              ></StyledInput>
            </div>
            <StyledError>{touched.company && errors.company && errors.company}</StyledError>

            {/* NAME */}
            <div>
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <StyledInput
                value={values.name}
                type="text"
                name="name"
                placeholder="Full name"
                border={touched.name && errors.name}
              />
            </div>
            <StyledError>{touched.name && errors.name && errors.name}</StyledError>

            {/* PHONE */}
            <div>
              <StyledLabel htmlFor="phone">Phone</StyledLabel>
              <CountrySelect labels={en} name="country" onChange={setCountry} value={country} />
              {/* react-phone-number-input */}
              <PhoneInput onChange={() => {}} />
              <StyledInput
                value={values.phone}
                type="tel"
                name="phone"
                placeholder="+49"
                border={touched.phone && errors.phone}
              />
            </div>
            <StyledError>{touched.phone && errors.phone && errors.phone}</StyledError>

            {/* EMAIL */}
            <div>
              <StyledLabel htmlFor="email">E-Mail</StyledLabel>
              <StyledInput
                value={values.email}
                type="email"
                name="email"
                placeholder="name@mail.com"
                border={touched.email && errors.email}
              />
            </div>
            <StyledError>{touched.email && errors.email && errors.email}</StyledError>

            {/* SUBMIT */}
            <StyledButton useCase={"formButton"} type={"submit"}>
              Get Informed
            </StyledButton>
          </Form>
        )}
      ></Formik>
    </FormWrapper>
  );
};
