import { useState, useRef } from "react";

import { withFormik, FormikProps, Formik, FormikHelpers, Form, Field } from "formik";
import * as Yup from "yup";

import { Centered, StyledInput, StyledLabel } from "../../styles/global";

import { StyledButton } from "../Button/Button.style";
import { StyledFormWrapper } from "./FormWrapper.style";

export interface FormValues {
  company: string;
  name: string;
  phone: string;
  email: string;
}

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
      render={({ touched, errors, values, handleBlur, handleChange, handleSubmit }) => (
        <Form>
          <div>
            <StyledLabel htmlFor="company">Company</StyledLabel>
            <StyledInput
              id="company"
              name="company"
              placeholder="Company"
              type="text"
              width={80}
              required
            ></StyledInput>
            {errors.company && <p>{errors.company}</p>}
          </div>
          <div>
            <label htmlFor="Name">Name</label>
            <StyledInput type="text" name="name" placeholder="Full name" required />
            {/* {errors.name && <p>{errors.name}</p>} */}
          </div>
          <div>
            <label htmlFor="Name">Phone</label>
            <StyledInput type="tel" name="phone" placeholder="+49" required />
            {/* {errors.phone && <p>{errors.phone}</p>} */}
          </div>
          <div>
            <label htmlFor="Name">E-Mail</label>
            <StyledInput type="email" name="email" placeholder="name@mail.com" required />
            {/* {errors.email && <p>{errors.email}</p>} */}
          </div>
          <StyledButton useCase={"formButton"}>Get Informed</StyledButton>
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
