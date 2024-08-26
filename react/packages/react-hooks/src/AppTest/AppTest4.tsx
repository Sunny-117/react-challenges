// @ts-nocheck
import React, { useState } from "react";
import usePageStudents from "../myHooks/usePageStudents";

function Test() {

    const [page, setPage] = useState(1);
    const resp = usePageStudents(page, 10);
    if (resp) {
        //有值的话才进行，否则undefined.map
        const list = resp.findByPage.map((it) => <li key={it.id}>{it.name}</li>);
        return (
            <div>
                <h1>数据总数：{resp.cont}</h1>
                <ul>{list}</ul>
                <input
                    type="number"
                    value={page}
                    onChange={(e) => {
                        setPage(parseInt(e.target.value));
                    }}
                />
            </div>
        );
    }
    return null;
}

export default function AppTest4() {

    return (
        <div>
            <Test />
        </div>
    );
}
