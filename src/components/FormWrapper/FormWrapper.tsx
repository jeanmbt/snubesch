import { Formik, FormikHelpers, Form } from "formik";
import * as Yup from "yup";

import { StyledError, StyledInput, StyledLabel } from "../../styles/global";

import { StyledButton } from "../Button/Button.style";
import { StyledFormWrapper } from "./FormWrapper.style";

export interface FormValues {
  company: string;
  name: string;
  phone: string;
  email: string;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FormSchema = Yup.object().shape({
  company: Yup.string().min(2, "Too short!").max(80, "Too long").required("Required"),
  name: Yup.string().min(2, "Too short!").max(50, "Too long").required("Required"),
  phone: Yup.string().matches(phoneRegExp).required("Required"),
  email: Yup.string().email("Invalid E-mail").required("Required"),
});

export const FormWrapper: React.FC<{}> = () => (
  <StyledFormWrapper>
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
  </StyledFormWrapper>
);

//   const submit = (e) => {
//     e.preventDefault();
//     const data = new FormData(form.current);

//     //   fetch("/api", { method: "POST", body: data })
//     //     .then((res) => res.json())
//     //     .then((json) => setUser(json.user));
//     // };

//     for (var pair of data.entries()) {
//       console.log(pair[0] + ", " + pair[1]);
//     }
//   };

//   return (
//     //TODO: Errors and Validation
//     <StyledFormWrapper>
//       <form ref={form} onSubmit={submit}>
//         <div>
//           <StyledLabel htmlFor="company">Company</StyledLabel>
//           <StyledInput
//             width={80}
//             type="text"
//             name="company"
//             defaultValue={user.company}
//             placeholder="Company"
//             required
//           />
//           {user.errors && <p>{user.errors} </p>}
//         </div>
//         <div>
//           <label htmlFor="Name">Name</label>
//           <StyledInput
//             type="text"
//             name="name"
//             defaultValue={user.name}
//             placeholder="Full name"
//             required
//           />
//           {/* {user.errors.name && <p>{user.errors.name}</p>} */}
//         </div>
//         <div>
//           <label htmlFor="Name">Phone</label>
//           <StyledInput
//             type="tel"
//             name="phone"
//             defaultValue={user.phone}
//             placeholder="+49"
//             required
//           />
//           {/* {user.errors.phone && <p>{user.errors.phone}</p>} */}
//         </div>
//         <div>
//           <label htmlFor="Name">E-Mail</label>
//           <StyledInput
//             type="email"
//             name="email"
//             defaultValue={user.email}
//             placeholder="name@mail.com"
//             required
//           />
//           {/* {user.errors.email && <p>{user.errors.email}</p>} */}
//         </div>
//         <StyledButton onSubmit={submit} useCase={"formButton"}>
//           Get Informed
//         </StyledButton>
//       </form>
//     </StyledFormWrapper>
//   );
// };
