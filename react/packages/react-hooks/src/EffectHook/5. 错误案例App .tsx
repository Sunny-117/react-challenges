import React, { useState, useEffect } from "react";
//以下是错误的做法
export default function App() {
  const [n, setN] = useState(10);
  useEffect(() => {
    //核心：useEffect只负责渲染完有什么副作用要做。而不是每一次根据这次n的值渲染新的值
    //仅挂载后运行
    const timer = setInterval(() => {
      const newN = n - 1; //n并不是实时的,这一次是坐着这一次的副作用操作
      console.log(newN);
      setN(newN);
      if (newN === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      //函数卸载时运行
      clearInterval(timer);
    };
  }, []);
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
