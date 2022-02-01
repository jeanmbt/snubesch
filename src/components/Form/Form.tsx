import { useState, useRef } from "react";

export const Form = () => {
  // const [user, setUser] = useState();
  const form = useRef(null);

  const submit = (e: { preventDefault: any }) => {
    e.preventDefault();
    const data = new FormData(form.current!);

    // fetch('/api', { method: 'POST', body: data })
    //   .then(res => res.json())
    //   .then(json => setUser(json.user))

    console.log(data);
  };

  return (
    <form ref={form} onSubmit={submit}>
      <input type="text" name="user[company]" defaultValue={"company"} />
      {/* {user.errors.company && <p>{user.errors.company</p>} */}
      <input type="text" name="user[name]" defaultValue={"name"} />
      {/* {user.errors.name && <p>{user.errors.name</p>} */}
      <input type="tel" name="user[phone]" defaultValue={"phone"} />
      {/* {user.errors.phone && <p>{user.errors.phone</p>} */}
      <input type="email" name="user[email]" defaultValue={"email"} />
      {/* {user.errors.email && <p>{user.errors.email</p>} */}
    </form>
  );
};
