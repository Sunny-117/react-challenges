import React, { useState } from 'react'
import FadeTransition from '../transition-4/components/FadeTransition'

export default function TransitionApp() {
    const [show, setShow] = useState(true)
    return (
        <div>
            <FadeTransition appear timeout={5000} in={show}>
                <h1>标题</h1>
            </FadeTransition>
        </div>
    )
}
