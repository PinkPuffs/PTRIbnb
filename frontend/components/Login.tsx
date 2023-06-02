import React, { useState } from "react";
import "../../frontend/tailwind.css";
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";


const URL = "http://localhost:3000/";

interface fieldsState {
  [index: string]: string;
}

const fields = loginFields;
let fieldsState: fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const handleClick = (e: any) => {
    //prevent form from auto-sending?
    e.preventDefault();

    authenticateUser(e);
  };

  const authenticateUser = (e: any) => {
    console.log(e.target.emailaddress.value);
    console.log(e.target.password.value);

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.emailaddress.value,
        password: e.target.password.value,
      }),
    };

    fetch(URL + "login", options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // if (data === true) {
        //   console.log("logged in!");
        //   SetLoginStatus(data);
        // }
      });
  };

  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: any) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  return (
    <section>
      <form className="mt-8 space-y-6" onSubmit={handleClick}>
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <FormAction handleSubmit={handleClick} text="Login" />
        <FormExtra />
      
      </form>
    </section>
  );
}
