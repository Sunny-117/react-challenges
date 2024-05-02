import React from 'react'

export function RadioBoxGroup({ name, datas, value, onChange }: any) {
    console.log(value, 'samndklans')

    const handleChange = (e: any) => {
        onChange && onChange(e.target.value);
    };

    const getRadios = () => {
        return datas.map((it: any) => {
            return <label key={it.value}>
                <input
                    type="radio"
                    name={name}
                    value={it.value}
                    checked={value === it.value}
                    onChange={handleChange}
                />
                {it.text}
            </label>
        });
    }
    const bs = getRadios();
    return (
        <div>
            <div>{bs}</div>;
        </div>
    )
}
