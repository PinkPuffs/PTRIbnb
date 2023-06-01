import React, { useState } from "react";
import "../../frontend/tailwind.css";
import { signupFields } from "../constants/formFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";

const URL = "http://localhost:3000/";

interface fieldsState {
  [index: string]: string;
}

const fields = signupFields;
let fieldsState: fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const handleClick = (e: any) => {
    //prevent form from auto-sending?
    e.preventDefault();

    createUser(e);
  };

  const createUser = (e: any) => {
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

    fetch(URL + "signup", options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // if (data === true) {
        //   console.log("logged in!");
        //   SetLoginStatus(data);
        // }
      });
  };

  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e: any) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  return (
    <section>
      <h1 className=" bg-blue-500">Hello</h1>
      <form className="mt-8 space-y-6" onSubmit={handleClick}>
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}

        <FormAction handleSubmit={handleClick} text="Signup" />
        <FormExtra />
      </form>
    </section>
  );
}
