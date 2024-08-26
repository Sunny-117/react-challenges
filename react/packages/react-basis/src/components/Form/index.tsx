import React, { useState } from 'react'
import FormTest from './FormTest';

function NumberInput() {
    const [val, setVal] = useState('123')
    return <input
        type="text"
        value={val}
        onChange={(e) => {
            var val = e.target.value;
            val = val.replace(/\D/g, ""); //把非数字的变成空白字符  
            setVal(val)
        }}
    />
}
function FormInstance1() {
    const [val, setVal] = useState(123)
    return <div>
        <input
            type="text"
            value={val}
            onChange={(e: any) => {
                setVal(e.target.value)
            }}
        />
        <button
            onClick={() => {
                console.log(val)
            }}
        >
            获取文本框的值
        </button>
    </div>
}

export default function Form() {
    {/* 默认情况下他是一个非受控组件 */ }
    {/* <input type="text" name="" id="" /> */ }
    {/* 一旦设置了表单组件的value属性，则其变为受控组件 */ }
    {/* <input type="text" value='123' /> */ }
    {/* You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly` */ }
    {/* 可以用defaultValue默认value */ }
    {/* 要么只读，要么加上onChange事件 */ }
    return (
        <div>
            <FormInstance1 />
            <NumberInput />
            <FormTest />
        </div>
    )
}
