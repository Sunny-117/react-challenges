


import React, { Component, useEffect, useState } from "react";
import { fetchAllStudents } from '@handle-react/apis'
import CheckBoxGroup from ".";

export function CheckBoxGroupTest() {
    const [datas, setDatas] = useState([])
    const [chooseDatas, setChooseDatas] = useState([])
    useEffect(() => {
        fetchAllStudents().then(res => {
            setDatas(res.map((it: any) => ({ value: it.id.toString(), text: it.name })))
        })
    }, [])
    return <div>
        <CheckBoxGroup
            name="loves"
            datas={datas}
            chooseDatas={chooseDatas}
            onChange={(newArr: any) => {
                setChooseDatas(newArr)
            }}
        />
    </div>
}