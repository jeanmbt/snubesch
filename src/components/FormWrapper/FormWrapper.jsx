import { useState, useRef } from "react";

import { StyledInput, StyledLabel } from "../../styles/global";
import Button from "../Button";
import { FormButton } from "../Button/Button.style";
import { StyledFormWrapper } from "./FormWrapper.style";

export const FormWrapper = (props) => {
  const [user, setUser] = useState(props.user);
  const form = useRef(null);

  const buttonStyle = {
    marginTop: "1em",
    alignSelf: "center",
  };

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);

    //   fetch("/api", { method: "POST", body: data })
    //     .then((res) => res.json())
    //     .then((json) => setUser(json.user));
    // };

    // TODO: DRY this
    const company = data.get("company");
    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");

    console.log(`company: ${company}, name: ${name}, phone: ${phone}, email: ${email}`);
  };

  return (
    //TODO: Errors and Validation
    <StyledFormWrapper>
      <form ref={form} onSubmit={submit}>
        <div>
          <StyledLabel htmlFor="company">Company</StyledLabel>
          <StyledInput
            type="text"
            name="company"
            defaultValue={user.company}
            placeholder="Company"
          />
          {/* {user.errors.company && <p>{user.errors.company} </p>} */}
        </div>
        <div>
          <label htmlFor="Name">Name</label>
          <StyledInput type="text" name="name" defaultValue={user.name} placeholder="Name" />
          {/* {user.errors.name && <p>{user.errors.name}</p>} */}
        </div>
        <div>
          <label htmlFor="Name">Phone</label>
          <StyledInput type="tel" name="phone" defaultValue={user.phone} placeholder="+49" />
          {/* {user.errors.phone && <p>{user.errors.phone}</p>} */}
        </div>
        <div>
          <label htmlFor="Name">E-Mail</label>
          <StyledInput type="email" name="email" defaultValue={user.email} placeholder="E-mail" />
          {/* {user.errors.email && <p>{user.errors.email}</p>} */}
        </div>
        <FormButton style={buttonStyle} onSubmit={submit}>
          Get Informed
        </FormButton>
      </form>
    </StyledFormWrapper>
  );
};
