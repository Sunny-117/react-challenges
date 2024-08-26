import React, { useMemo, useState } from 'react'
function Item(props: any) {
    return <li>{props.value}</li>;
}

export default function MemoHookTest() {
    const [range] = useState({ min: 1, max: 10000 });
    const [n, setN] = useState(0);
    // 记录下来，依赖[range.min, range.max]没变化，就不会重新计算。像vue的computed
    const cacheList = useMemo(() => {
        console.log('重新计算')
        const list = [];
        for (let i = range.min; i <= range.max; i++) {
            list.push(<Item key={i} value={i}></Item>)
        }
        return list
    }, [range.min, range.max])
    return (
        <div>
            <input
                type="number"
                value={n}
                onChange={(e) => {
                    setN(parseInt(e.target.value));
                }}
            />
            <ul>{cacheList}</ul>

        </div>
    )
}
