import React, { useState, useEffect, useDebugValue } from "react";

function useTest() {
  //自定义Hook
  const [students] = useState([]);
  useDebugValue("学生集合"); //纯粹为了调试方便
  return students;
}

export default function App() {
  useState(0);
  useState("abc");
  useEffect(() => {
    console.log("effect");
  }, []);
  useTest();
  return <div></div>;
}
