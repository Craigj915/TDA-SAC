"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = (props) => {
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const submitHandler = (e) => {
    setDisabled(true);
    e.preventDefault();

    props.client
      .login(e.target.email.value, e.target.password.value)
      .then((response) => {
        setDisabled(false);
        props.loggedIn(response.data.token);
        if (response?.status === 200) {
          const { role } = response.data;

          // "Admin",
          // "Director",
          // "Manager",
          // "Staff",
          // "Instructor",
          // "Course Manager",
          // "Marketing",
          // "Admissions",

          if (role === "Director") {
            router.push("/dashboard/");
          } else if (role === "Admin") {
            router.push("/admin/");
          } else if (role === "Manager") {
            router.push("/manager/");
          } else if (role === "Course Manager") {
            router.push("/dashboard/");
          } else {
            router.push("/dashboard/");
          }
        }
      })
      .catch((error) => {
        setDisabled(false);
        alert("Login failed");
      });
  };

  return (
    <div>
      <form
        className="space-y-4 flex flex-col"
        onSubmit={(e) => submitHandler(e)}
      >
        <input
          id="email"
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
          disabled={disabled}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          disabled={disabled}
        />
        <button className="btn btn-outline btn-primary" disabled={disabled}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
// Mand
