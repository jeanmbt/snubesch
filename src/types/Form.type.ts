export interface IFormValues {
  company: string;
  name: string;
  phone: string;
  email: string;
}
export  interface IUserForm {
  country: string | undefined;
  submitted: boolean | undefined;
  setSubmitted: any;
  setFormData: any;
  setCompany: any;
  setName: any;
  setPhone: any;
  setEmail: any;
}
export interface IFormWrapper {
  display?: string
  id?: string
}
export interface IStyledInput {
  border?: string | boolean
}