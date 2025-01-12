import React, { createContext, useContext } from 'react'

const ctx = createContext('demo')
function Test() {
    const value = useContext(ctx)
    return <div>
        {value}
    </div>
}
export default function ContextHook() {
    return (
        <div>
            <ctx.Provider value="提供">
                <Test />
            </ctx.Provider>

        </div>
    )
}
