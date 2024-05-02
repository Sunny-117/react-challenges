import React, { useState, useEffect } from "react";

export default function App() {
  const [n, setN] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(n); //闭包。n指向，当前App函数调用时的n
    }, 5000);
  });
  // 5. 副作用函数中，如果使用了函数上下文中的变量，则由于闭包的影响，会导致副作用函数中变量不会实时变化。
  return (
    <div>
      <h1>{n}</h1>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        n+1
      </button>
    </div>
  );
}
