import React from 'react'

export default function Select({ name, datas, value, onChange }: any) {

    const handleChange = (e: any) => {
        onChange && onChange(e.target.value, name, e)
    }
    const getOptions = () => {
        return datas.map((it: any) => (
            <option key={it.value} value={it.value}>
                {it.text}
            </option>
        ));
    }

    const options = getOptions()
    return (
        <select name={name} value={value} onChange={handleChange}>
            {options}
        </select>
    )
}
