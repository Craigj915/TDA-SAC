"use client";
import Register from "@/components/Register";
import React, { useState } from "react";
import { ApiClient } from "@/apiClient";
import GetTeams from "@/components/GetTeams";
import GetUsers from "@/components/GetUsers";

const Admin = () => {

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
      Admin Page
      <div>
        <Register client={client} />
      </div>
        <div>
          <GetTeams client={client} />
        </div>
        <div className="py-12">
          <GetUsers client={client} />
      </div>
    </main>
  );
};

export default Admin;
