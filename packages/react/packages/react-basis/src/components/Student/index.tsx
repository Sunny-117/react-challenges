
import { fetchAllStudents } from '@handle-react/apis'
import { useEffect, useState } from 'react'
import { Loading } from '@handle-react/components'

function SigleStudent({ name, email, sex, birth }: any) {
    return (
        <li>
            【姓名】{name}
            【email】{email}
            【性别】{sex === 1 ? "男" : "女"}
            【出生年份】{birth}
        </li>
    );
}
export function StudentList({ stus }: any) {
    console.log(stus)
    return <div>
        {stus.map((item: { id: any; }) => {
            return <SigleStudent {...item} key={item.id} />
        })}
    </div>
}
export default function Student() {
    const [stus, setStus] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetchAllStudents().then(res => {
            setStus(res)
            setLoading(false)
        })
    }, [])

    return (
        <h1>
            {loading ? <Loading /> : <StudentList stus={stus} />}
        </h1>
    )
}
