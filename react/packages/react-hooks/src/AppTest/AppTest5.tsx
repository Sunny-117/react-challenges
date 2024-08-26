// @ts-nocheck
import { fetchAllStudents } from '@handle-react/apis';
import React from 'react'
// render props

class AllStudents extends React.Component {
    state = {
        stus: [],
    };

    async componentDidMount() {
        const stus = await fetchAllStudents();
        this.setState({
            stus,
        });
    }

    render() {
        if (typeof this.props.render === "function") {
            return this.props.render(this.state.stus);
        }
        return null;
    }
}

function Test(props) {
    const list = props.stus.map((it) => <li key={it.id}>{it.name}</li>);
    return <ul>{list}</ul>;
}


export default function AppTest5() {
    return (
        <div>
            <AllStudents render={(stus) => <Test stus={stus} />} />
        </div>
    )
}
