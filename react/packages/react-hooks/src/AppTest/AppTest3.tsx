// @ts-nocheck
import { fetchAllStudents } from '@handle-react/apis';
import React from 'react'

// 如果用高阶组件



function withAllStudents(Comp) {
    return class AllStudentsWrapper extends React.Component {
        state = {
            stus: []
        }
        async componentDidMount() {
            const stus = await fetchAllStudents()
            this.setState({ stus: stus })
        }
        render() {
            return <Comp {...this.props} stus={this.state.stus} />
        }
    }
}

function Test(props: { stus: any[]; }) {
    console.log(props)
    const list = props.stus.map((it) => <li key={it.id}>{it.name}</li>);
    return <ul>{list}</ul>;
}


const TestStudents = withAllStudents(Test);
export default function AppTest3() {
    return (
        <div>
            <TestStudents />
        </div>
    )
}
