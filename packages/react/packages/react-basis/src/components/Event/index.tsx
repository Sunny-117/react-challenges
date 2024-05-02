import React, { useEffect, useState } from 'react'

function Tick({ number, onClick, onOver }: any) {
    const [n, setN] = useState(number);
    let timer: any = null
    useEffect(() => {
        timer = setTimeout(() => {
            if (n === 0) {
                onOver && onOver()
                clearTimeout(timer)
                return
            }
            setN(n - 1)
        }, 1000);
    }, [n])
    return <h1 onClick={onClick}>倒计时：{n}</h1>
}
export default function TickControl() {
    const [isOver, setIsOver] = useState(false)
    const handleClick = () => {
        console.log('点击了')
    }
    const handleOver = () => {
        setIsOver(true)
    }
    return (
        <div>
            <Tick onClick={handleClick} onOver={handleOver} number={4} />
            <h2>{isOver ? "结束了" : '正在倒计时'}</h2>
        </div>
    )
}
