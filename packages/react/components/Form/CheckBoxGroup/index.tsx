import React from "react";

export default function CheckBoxGroup({ name, datas, chooseDatas, onChange }: any) {
    console.log(datas)
    const handleChange = (e: any) => {
        console.log(e.target.value, 'smndkjaskdnasdkaskndk')
        let newArr: any[]
        if (e.target.checked) {
            newArr = [...chooseDatas, e.target.value];
        } else {
            newArr = chooseDatas.filter((it: any) => it !== e.target.value);
        }
        onChange && onChange(newArr, name, e);
    }
    const getCheckBoxes = () => {
        return datas.map((it: any) => {
            return (
                <label key={it.value}>
                    <input
                        type="checkbox"
                        key={Math.random()}
                        value={it.value}
                        checked={chooseDatas.includes(it.value)}
                        onChange={handleChange}
                    />
                    {it.text}
                </label>

            )
        })
    }

    const bs = getCheckBoxes();
    return <div>{bs}</div>;
}
