import { Formik, FormikHelpers, Form } from "formik";

import { regex } from "../../utils/regex";
import { useCurrentLocation } from "../../utils/useCurrentLocation";

import { FormValues } from "../../types/Form.type";

import { StyledButton } from "../Button/Button.style";
import { FormWrapper, StyledError, StyledInput, StyledLabel } from "./UserForm.style";

import Input, { getCountries, getCountryCallingCode } from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import "react-phone-number-input/style.css";
import { useEffect, useState } from "react";
import { lookupCountry } from "../../utils/lookupCountry";
import { FormSchema } from "../../utils/FormSchema";

const CountrySelect = ({ value, onChange, labels, ...rest }: any) => (
  <select {...rest} value={value} onChange={(event) => onChange(event.target.value || undefined)}>
    <option value="">{labels.ZZ}</option>
    {getCountries().map((country) => (
      <option key={country} value={country}>
        {labels[country]} +{getCountryCallingCode(country)}
      </option>
    ))}
  </select>
);

export const UserForm: React.FC<{}> = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const [error, setError] = useState("");
  const [location, setLocation] = useState<any>([]);
  // const { location, error } = useCurrentLocation();

  async function handleNavigator(position: GeolocationPosition) {
    const { latitude, longitude } = position.coords;

    const userCountryCode = await lookupCountry({ latitude, longitude });

    setCountry(userCountryCode);
  }

  const handleError = (error: GeolocationPositionError) => {
    setError(error.message);
    console.log(error.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
    }

    navigator.geolocation.getCurrentPosition(handleNavigator, handleError);
  }, []);
  // console.log(location);

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          company: "",
          name: "",
          phone: "",
          email: "",
        }}
        onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
          setTimeout(() => {
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
              <CountrySelect
                labels={en}
                name="countrySelect"
                onChange={setCountry}
                value={country}
              />
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
