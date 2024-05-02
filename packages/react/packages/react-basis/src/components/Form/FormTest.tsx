import React, { Component, useState } from "react";


export default function FormTest() {
    const [formInfo, setFormInfo] = useState<any>({
        loginId: "",
        loginPwd: "",
        sex: "male",
        chooseLoves: [],
        loves: [
            { value: "football", text: "足球" },
            { value: "basetball", text: "篮球" },
            { value: "movie", text: "电影" },
            { value: "music", text: "音乐" },
            { value: "other", text: "其他" },
        ],
        city: "beijing",
    })
    const handleChange = (e: any) => {
        // e.target是真实DOM元素
        let val = e.target.value; //读取表单的值
        let name = e.target.name; //读取表单的name属性
        if (e.target.type === "checkbox") {
            //是多选框要特殊处理
            //对val进行特殊处理
            if (e.target.checked) {
                val = [...formInfo.chooseLoves, val];
                console.log(val)
            } else {
                val = formInfo.chooseLoves.filter((it: any) => it !== val);
            }
        }
        // 方法1
        // const newPartialState = {};
        // newPartialState[name] = val;
        // this.setState(newPartialState)
        // 方法2
        // this.setState({
        //     [name]: val, //变量name的值作为属性名
        // });
        console.log(name)
        formInfo[name] = val;
        setFormInfo({ ...formInfo })
    }
    const getLoveCheckBoxes = () => {
        const bs = formInfo.loves.map((it: any) => (
            <label key={it.value}>
                <input
                    type="checkbox"
                    name="chooseLoves"
                    value={it.value}
                    checked={formInfo.chooseLoves.includes(it.value)}
                    onChange={handleChange}
                />
                {it.text}
            </label>
        ));
        return bs;
    }
    const bs = getLoveCheckBoxes();
    return (
        <div>
            <p>
                <input
                    type="text"
                    name="loginId"
                    value={formInfo.loginId}
                    onChange={handleChange}
                />
            </p>
            <p>
                <input
                    type="password"
                    name="loginPwd"
                    value={formInfo.loginPwd}
                    onChange={handleChange}
                />
            </p>
            <p>
                <label>
                    <input
                        type="radio"
                        name="sex"
                        value="male"
                        checked={formInfo.sex === "male"}
                        onChange={handleChange}
                    />
                    男
                </label>

                <label>
                    <input
                        type="radio"
                        name="sex"
                        value="female"
                        checked={formInfo.sex === "female"}
                        onChange={handleChange}
                    />
                    女
                </label>
            </p>
            <p>{bs}</p>
            <p>
                <select
                    name="city"
                    value={formInfo.city}
                    onChange={handleChange}
                >
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="chengdu">成都</option>
                </select>
            </p>
            <p>
                <button
                    onClick={() => {
                        console.log(formInfo)
                    }}
                >
                    获取表单数据
                </button>
            </p>
        </div>
    )
}
