import React, { useState } from 'react'

export default function AppTest1() {
    console.log('render')
    const [n, setN] = useState(0)
    return (

        <div>
            <span>{n}</span>
            <button onClick={() => {
                setN(n => n + 1)
                setN(n => n + 1)
            }}>+</button>
        </div>
    )
}
