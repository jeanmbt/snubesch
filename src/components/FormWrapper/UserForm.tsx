import { Formik, FormikHelpers, Form } from "formik";
import * as Yup from "yup";

import { regex } from "../../utils/regex";
import { FormValues } from "../../types/Form.type";

import { StyledButton } from "../Button/Button.style";
import { FormWrapper, StyledError, StyledInput, StyledLabel } from "./UserForm.style";

const FormSchema = Yup.object().shape({
  company: Yup.string()
    .min(2, "Too short!")
    .max(80, "Too long")
    .matches(regex.company, { message: "Must not contain numbers", excludeEmptyString: true })
    .required("Required"),
  name: Yup.string().min(2, "Too short!").max(50, "Too long").required("Required"),
  phone: Yup.string()
    .matches(regex.phone, {
      message: "Must contain country code (ex: +49 xxxxxx)",
      excludeEmptyString: true,
    })
    .max(20, "Too long")
    .required("Required"),
  email: Yup.string().email("Invalid E-mail").required("Required"),
});

export const UserForm: React.FC<{}> = () => (
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
          <div>
            <StyledLabel htmlFor="phone">Phone</StyledLabel>
            <StyledInput
              value={values.phone}
              type="tel"
              name="phone"
              placeholder="+49"
              border={touched.phone && errors.phone}
            />
          </div>
          <StyledError>{touched.phone && errors.phone && errors.phone}</StyledError>
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
          <StyledButton useCase={"formButton"} type={"submit"}>
            Get Informed
          </StyledButton>
        </Form>
      )}
    ></Formik>
  </FormWrapper>
);
