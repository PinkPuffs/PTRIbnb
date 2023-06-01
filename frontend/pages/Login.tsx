import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <>
      <Header
        heading="Welcome back fellow Cheapskates"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />

      <Login />
    </>
  );
}
