import React, { useImperativeHandle, useRef } from "react";



// 如果test是函数组件呢
function Test(props: any, ref: any) {
    // return <h1 ref={ref}>Test</h1>// 转发到h1上
    useImperativeHandle(
        ref, //{current：}
        () => {
            //return 1就相当于给 ref.current = 1
            //第二个参数是一个函数，这个函数的返回结果会给current赋一个初值
            //如果不给依赖项，则每次运行函数组件都会调用该方法
            //如果使用了依赖项，则第一次调用后，会进行缓存，只有依赖项发生变化时才会重新调用函数
            return {
                method() {
                    console.log("Test Component Called");
                },
            };
        },
        []
    );
    return <h1>Test Component</h1>;
}

const TestWrapper = React.forwardRef(Test); //ref转发包装后，返回的是一个类组件

export default function ImperativeHandleHook() {
    // const [, forceUpdate] = useState({})
    const testRef = useRef();
    return (
        <div>
            <TestWrapper ref={testRef} />
            <button
                onClick={() => {
                    testRef.current.method();
                    // console.log(testRef)
                    // forceUpdate({})
                }}
            >
                点击调用Test组件的method方法
            </button>
        </div>
    );
}
