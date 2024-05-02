import React, { useRef, useState } from 'react'

export default function RefHookTest1() {
    const inpRef = useRef()
    const [n, setN] = useState(1)
    return (
        <div>
            <div>
                <input ref={inpRef} type="text" />
                {/* 这个input没必要每次都新创建，可以公用一个 */}
                <button
                    onClick={() => {
                        console.log(inpRef.current.value);
                    }}
                >
                    得到input的值
                </button>
                <input
                    type="number"
                    value={n}
                    onChange={(e) => {
                        setN(e.target.value);
                    }}
                />
            </div>
        </div>
    )
}
