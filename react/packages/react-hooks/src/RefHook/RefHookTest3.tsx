import React, { useState, useRef, useEffect } from "react";
// 可以使用setInterval了
// useRef可以得到同一个节点共享一个对象的格式
export default function RefHookTest3() {
  const [n, setN] = useState(10);
  const nRef = useRef(n); // {current:10}
  useEffect(() => {
    const timer = setInterval(() => {
      nRef.current--; //由于是同一个对象，属性-1没问题
      setN(nRef.current);
      if (nRef.current === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>{n}</h1>
    </div>
  );
}
