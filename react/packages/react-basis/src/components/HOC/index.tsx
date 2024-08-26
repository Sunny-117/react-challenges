import React, { Component } from 'react'
import { A, B } from './Comp'
import withLog from "./withLog";
import withLogin from "./withLogin";


// 日志记录
// const ALog = withLog(A)
// const BLog = withLog(B)
// 登录显示
// const ALog = withLogin(A)
// const BLog = withLogin(B)
// 两层包装
let AComp = withLogin(A);
// AComp = withLog(AComp, 'aa');
let BComp = withLog(B, "aa");
export default class HOC extends Component {
    render() {
        return (
            <div>
                {/* <ALog isLogin={true} a={1} />
                  <BLog b={2} /> */}
                <AComp isLogin={true} a={1} />
                <BComp b={2} />
            </div>
        )
    }
}
