import React, { Component, useEffect, useState } from "react";
import Select from "./index";
import { fetchAllStudents } from '@handle-react/apis'

export function SelectTest() {
  const [datas, setDatas] = useState([])
  const [value, setValue] = useState('')
  useEffect(() => {
    fetchAllStudents().then(res => {
      setDatas(res.map((it: any) => ({ value: it.id.toString(), text: it.name })))
    })
  }, [])
  return <div>
    <Select
      name="loves"
      datas={datas}
      value={value}
      onChange={(val: any) => {
        console.log(val)
        setValue(val)
      }}
    />
  </div>
}