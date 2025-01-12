import React, { useEffect, useState } from 'react'
// 父组件重新渲染，子组件跟着重新渲染。单向数据流A - B - C。数据属于谁，谁才可以改变。
function Tick({ number }: any) {
    const [left, setLeft] = useState(number)
    let timer: any = null
    useEffect(() => {
        if (left === 0) {
            clearInterval(timer)
            return
        }
        timer = setTimeout(() => {
            setLeft(left - 1)
        }, 1000)
    }, [left])

    return <div>
        <h1>倒计时剩余时间：{left}</h1>
    </div>
}
export default function CompState() {
    return (
        <div>
            <Tick number={3} />
        </div>
    )
}
