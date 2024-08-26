import React from 'react'
import useAllStudents from '../myHooks/useAllStudents'

export default function AppTest2() {
    const stus = useAllStudents()
    const list = stus.map((it: any) => <li>{it.name}</li>)
    return (

        <div>{list}</div>
    )
}
