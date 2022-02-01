import { useState, useRef } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { StyledInput } from "../../styles/global";

export const FormWrapper = () => {
  const [user, setUser] = useState("");
  const form = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);

    //   fetch("/api", { method: "POST", body: data })
    //     .then((res) => res.json())
    //     .then((json) => setUser(json.user));
    // };
    const company = data.get("company");
    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");

    console.log(`company: ${company}, name: ${name}, phone: ${phone}, email: ${email}`);
  };

  return (
    <form ref={form} onSubmit={submit}>
      <StyledInput type="text" name="company" defaultValue={user.company} />
      {/* {user.errors.company && <p>{user.errors.company</p>} */}
      <input type="text" name="name" defaultValue={user.name} />
      {/* {user.errors.name && <p>{user.errors.name</p>} */}
      <input type="tel" name="phone" defaultValue={user.phone} />
      {/* {user.errors.phone && <p>{user.errors.phone</p>} */}
      <input type="email" name="email" defaultValue={user.email} />
      {/* {user.errors.email && <p>{user.errors.email</p>} */}{" "}
      <button onSubmit={submit}>submit</button>
    </form>
  );
  // return (
  //   <form ref={form} onSubmit={submit}>
  //     <input type="text" name="user[company]" defaultValue={"company"} />
  //     {/* {user.errors.company && <p>{user.errors.company</p>} */}
  //     <input type="text" name="user[name]" defaultValue={"name"} />
  //     {/* {user.errors.name && <p>{user.errors.name</p>} */}
  //     <input type="tel" name="user[phone]" defaultValue={"phone"} />
  //     {/* {user.errors.phone && <p>{user.errors.phone</p>} */}
  //     <input type="email" name="user[email]" defaultValue={"email"} />
  //     {/* {user.errors.email && <p>{user.errors.email</p>} */}
  //   </form>
  // );
};
