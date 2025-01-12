import React, { useState, useRef, useEffect } from "react";
export default function RefHookTest2() {
    const [n, setN] = useState(10);
    const timerRef = useRef(); //用一个统一的变量保存数据,互不干扰
    useEffect(() => {
        if (n === 0) {
            return;
        }
        timerRef.current = setTimeout(() => {
            console.log(n);
            setN(n - 1);
        }, 1000);
        return () => {
            clearTimeout(timerRef.current);
        };
    }, [n]);
    return (
        <div>
            <h1>{n}</h1>
        </div>
    );
}
