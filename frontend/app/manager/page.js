"use client";
import React, { useState } from "react";
import { ApiClient } from "@/apiClient";
import ManagerDash from "@/pages/ManagerDash";

const page = () => {
const [token, changeToken] = useState(window.localStorage.getItem("token"));
const client = new ApiClient(
  () => token,
  () => logout()
);

const login = (token) => {
  window.localStorage.setItem("token", token);
  changeToken(token);
};
const logout = () => {
  window.localStorage.removeItem("token");
  changeToken(undefined);
};

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-20">
      <div>
        <ManagerDash/>
      </div>

      <div>

      </div>
    </main>
  );
};

export default page;
