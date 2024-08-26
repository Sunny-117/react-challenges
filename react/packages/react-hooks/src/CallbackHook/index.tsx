// @ts-nocheck
import React, { useState } from 'react'

function ChildComp(props) {
    console.log("ChildComp Render");
    return (
        <div>
            <h1>{props.text}</h1>
            <button onClick={props.onClick}>改变文本</button>
        </div>
    );
}
function Parent() {
    console.log('parent render')
    {/* setTxt函数的地址每次渲染都发生了变化，导致了子组件ChildComp跟着重新渲染，若子组件是经过优化的组件，则可能导致优化失效 */ }
    const [txt, setTxt] = useState(123);
    const [n, setN] = useState(0);
    return <div>
        <ChildComp
            text={txt}
            onClick={() => {
                // setTxt(123);// 和上一次的123状态一致，所以parent没有重新渲染
                setTxt(Math.random()); //这里不能抽离出去，虽然抽离出去可以实现函数地址一样，但是么有setTxt了
            }}
        />

        {/* 改变，都会重新渲染 */}
        <input type="number"
            value={n}
            onChange={(e) => {
                console.log(e.target.value)
                setN(+e.target.value);
            }}
            id="" />
    </div>
}

export default function CallbackHook() {
    return (
        <div>
            <Parent />
        </div>
    )
}
