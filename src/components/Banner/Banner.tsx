import React from "react";
import { IBannerProps } from "../../types/Banner.type";
import { useCurrentLocation } from "../../utils/useCurrentLocation";
import DisplaySubmitted from "../DisplaySubmitted";
import UserForm from "../UserForm";

import { StyledBanner } from "./Banner.style";

export const Banner = (props: IBannerProps) => {
  const [formData, setFormData] = React.useState<any>({
    company: "",
    name: "",
    phone: "",
    email: "",
  });
  const [company, setCompany] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [submitted, setSubmitted] = React.useState(false);
  const { country, setCountry } = useCurrentLocation();

  // TODO: Form container, Info Container
  return (
    <StyledBanner>
      {submitted ? (
        <DisplaySubmitted
          formData={formData}
          company={company}
          name={name}
          phone={phone}
          email={email}
        />
      ) : (
        <UserForm
          country={country?.toString().toLowerCase()}
          submitted={submitted}
          setSubmitted={setSubmitted}
          setFormData={setFormData}
          formData={formData}
          setCompany={setCompany}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
        />
      )}

      {/* <div>INFO CONTENT</div> */}
    </StyledBanner>
  );
};
