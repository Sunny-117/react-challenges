import { useAuth } from "@/wrappers/auth";
import { useNavigate } from "umi";
import React from "react";

export default function personal() {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>受保护的页面</h1>
      <p>{auth.user.username}</p>
      <button
        onClick={() => {
          auth.signOut(() => {
            navigate("/login");
          });
        }}
      >
        退出登录
      </button>
    </div>
  );
}
