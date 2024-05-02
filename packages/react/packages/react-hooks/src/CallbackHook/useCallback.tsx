// @ts-nocheck
import React from 'react';
import { useCallback, useState } from 'react'

class ChildComp extends React.PureComponent {
    render() {
        console.log("Test Render");
        return (
            <div>
                <h1>{this.props.text}</h1>
                <button onClick={this.props.onClick}>改变文本</button>
            </div>
        );
    }
}

function Parent() {
    console.log('parent render')
    const [txt, setTxt] = useState(123);
    const [n, setN] = useState(0);
    const hanleClick = useCallback(() => {
        console.log('callback call')
        setTxt(Math.random());
    }, [])
    return <div>
        <ChildComp
            text={txt}
            onClick={hanleClick}
        />

        {/* 改变，只会重新渲染parent */}
        <input type="number"
            value={n}
            onChange={(e) => {
                console.log(e.target.value)
                setN(parseInt(e.target.value));
            }}
        />
    </div>
}

export default function CallbackHook() {
    return (
        <div>
            <Parent />
        </div>
    )
}
