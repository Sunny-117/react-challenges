import React, { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./App.css";

export default function App() {
  const [show1, setShow1] = useState(true);
  return (
    <div>
      <SwitchTransition mode="out-in">
        <CSSTransition appear timeout={5000} key={show1}>
          {/* 不用in了，用key */}
          {/* 有了key,保证里面是全新,key不一样就重新创建 */}
          <h1>{show1 ? "title1" : "title2"}</h1>
        </CSSTransition>
      </SwitchTransition>
      <button onClick={() => setShow1(!show1)}>切换</button>
    </div>
  );
}
