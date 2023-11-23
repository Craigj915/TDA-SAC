"use client";
import Login from "@/pages/Login";
import { ApiClient } from "@/apiClient";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [token, changeToken] = useState(undefined);

  const client = new ApiClient(
    () => localStorage.getItem("token"),
    () => {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
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
    <main className="flex bg-white min-h-screen flex-col items-center justify-between p-24">
      <Login loggedIn={(token) => login(token)} client={client} />
    </main>
  );
}
