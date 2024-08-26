import React, { useState } from 'react'
function Item(props: any) {
    return <li>{props.value}</li>;
}

export default function MemoHookTest() {
    {/* useMemo和useCallback区别：不仅可以固定函数，可以固定任何值，避免了input变化导致上面大量数据重新渲染 */ }
    const [range] = useState({ min: 1, max: 10000 });
    const [n, setN] = useState(0);
    const getList = () => {
        console.log('重新计算')
        const list = [];
        for (let i = range.min; i <= range.max; i++) {
            list.push(<Item key={i} value={i}></Item>)
        }
        return list;
    }
    return (
        <div>

            <input
                type="number"
                value={n}
                onChange={(e) => {
                    setN(parseInt(e.target.value));
                }}
            />
            <ul>{getList()}</ul>
        </div>
    )
}
