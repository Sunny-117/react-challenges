import { useAuth } from "@/wrappers/auth";
import React from "react";
import { useNavigate, useLocation, Navigate } from "umi";
export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  if (auth.user) {
    // 从哪里来，回哪里去
    return <Navigate to={from}></Navigate>;
  }
  const submit = (e: any) => {
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    auth.signIn({ username }, () => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input type="text" name="username" id="" />
        <button type="submit">login</button>
      </form>
    </div>
  );
}
