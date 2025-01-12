import React, { useState, useLayoutEffect, useRef } from "react";

export default function LayoutEffectHookTest() {
    const [n, setN] = useState(0);
    const h1Ref = useRef();
    // 如果是useEffect的话会导致页面闪烁
    useLayoutEffect(() => {
        h1Ref.current.innerText = Math.random().toFixed(2);
    });
    return (
        <div>
            <h1 ref={h1Ref}>{n}</h1>
            <button
                onClick={() => {
                    setN(n + 1);
                }}
            >
                +
            </button>
        </div>
    );
}
