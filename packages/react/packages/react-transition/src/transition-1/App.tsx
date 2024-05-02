import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
const duration = 2000;
export default function App() {
  const [inProp, setInProp] = useState(true);
  return (
    <div>
      {/* in只是控制状态的值,没有其他作用 */}
      <Transition
        // mountOnEnter//只有在进入的时候才会调用里面的函数，没有进入的时候就不管这个节点了
        in={inProp}
        timeout={duration}
        addEndListener={(node, done) => {
          // done()立即变成最终状态  这些都不重要，重要的是看文档能力
          node.addEventListener(
            "transitionend",
            () => {
              console.log("过渡结束了");
            },
            { once: true }
          );
        }}
      >
        {(state) => {
          console.log(state); //当前的状态
          return <div className={state}>I'm a fade Transition!</div>;
          //   这里返回什么就显示什么
        }}
      </Transition>
      <button onClick={() => setInProp(!inProp)}>Click to Toggle</button>
    </div>
  );
}
