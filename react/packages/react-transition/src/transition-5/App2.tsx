import React, { useState } from 'react'
import FadeTransition from '../transition-4/components/FadeTransition'
import { SwitchTransition } from "react-transition-group";

export default function TransitionApp() {
    const [show, setShow] = useState(true)
    return (
        <div>
            <SwitchTransition>
                <FadeTransition appear timeout={500} key={show}>
                    <h1>{show ? "显示" : "隐藏"}</h1>
                </FadeTransition>
            </SwitchTransition>
            <button
                onClick={() => {
                    setShow(!show)
                }}
            >
                切换显示状态
            </button>
        </div>
    )
}
