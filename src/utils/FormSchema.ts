
import * as Yup from "yup";
import { regex } from "./regex";

export const FormSchema = Yup.object().shape({
  company: Yup.string()
    .min(2, "Too short!")
    .max(80, "Too long")
    .matches(regex.company, { message: "Must not contain numbers", excludeEmptyString: true })
    .required("Required"),
  name: Yup.string().min(2, "Too short!").max(50, "Too long").required("Required"),
  phone: Yup.string()
    .matches(regex.phone, {
      message: "Follow the format +49 xxxxxx",
      excludeEmptyString: true,
    })
    .max(20, "Too long")
    .required("Required"),
  email: Yup.string().email("Invalid E-mail").required("Required"),
});
