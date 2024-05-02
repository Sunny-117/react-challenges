import React, { useRef } from "react";

class Test extends React.Component {
    method() {
        console.log("Test method called");
    }

    render() {
        return <h1>Test Component</h1>;
    }
}

export default function ImperativeHandleHook() {
    const testRef = useRef();
    return (
        <div>
            <Test ref={testRef} />
            <button
                onClick={() => {
                    testRef.current.method();
                }}
            >
                点击调用Test组件的method方法(这里是类组件，通过ref拿到，可是函数组件呢)
            </button>
        </div>
    );
}
