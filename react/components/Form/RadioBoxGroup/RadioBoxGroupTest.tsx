import { useEffect, useState } from "react";
import { RadioBoxGroup } from "./index";
import { fetchAllStudents } from '@handle-react/apis'

export function RadioBoxGroupTest() {
    const [datas, setDatas] = useState([])
    const [value, setValue] = useState('87488')

    useEffect(() => {
        fetchAllStudents().then(res => {
            setDatas(res.map((it: any) => ({ value: it.id.toString(), text: it.name })))
        })
    }, [])


    return (
        <div>
            <RadioBoxGroup
                name="loves"
                datas={datas}
                value={value}
                onChange={(val: any) => {
                    setValue(val)
                }}
            />
        </div>
    );
}
