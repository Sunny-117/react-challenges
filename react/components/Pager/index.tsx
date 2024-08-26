import React, { useEffect, useState } from 'react'
import { fetchStudentsByPager } from '@handle-react/apis'
import { Loading } from '../Loading/index'
import { StudentList } from '@handle-react/react-basis/src/components/Student'

import "./Pager.css";

/**
 * 分页组件
 * 属性：
 * 1. current：初始页码
 * 2. total：总数据量
 * 3. limit：页容量，每页显示的数据量
 * 4. panelNumber：数字页码最多显示多少个
 * 5. onPageChange：当页码改变的事件
 */
export function Pager(props: any) {
    const pageNumber = getPageNumber(props); //总页数
    if (pageNumber === 0) {
        return null;
    }
    const min = getMinNumber(props); //最小数字
    const max = getMaxNumber(min, pageNumber, props); //最大数字
    const numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(
            <span
                key={i}
                onClick={() => {
                    toPage(i, props);
                }}
                className={i === props.current ? "item active" : "item"}
            >
                {i}
            </span>
        );
    }
    return (
        <>
            <span
                onClick={() => {
                    toPage(1, props);
                }}
                className={props.current === 1 ? "item disabled" : "item"}
            >
                首页
            </span>
            <span
                onClick={() => {
                    toPage(props.current - 1 < 1 ? 1 : props.current - 1, props);
                }}
                className={props.current === 1 ? "item disabled" : "item"}
            >
                上一页
            </span>
            {/* 数字页码 */}
            {numbers}
            <span
                onClick={() => {
                    toPage(
                        props.current + 1 > pageNumber ? pageNumber : props.current + 1,
                        props
                    );
                }}
                className={props.current === pageNumber ? "item disabled" : "item"}
            >
                下一页
            </span>
            <span
                onClick={() => {
                    toPage(pageNumber, props);
                }}
                className={props.current === pageNumber ? "item disabled" : "item"}
            >
                尾页
            </span>
            <span className="current">{props.current}</span>/<span>{pageNumber}</span>
        </>
    );

}
/**
 * 计算最小数字
 */
function getMinNumber(props: any) {
    var min = props.current - Math.floor(props.panelNumber / 2);
    if (min < 1) {
        min = 1;
    }
    return min;
}

/**
 * 计算最大数字
 * @param {*} min
 * @param {*} pageNumber
 */
function getMaxNumber(min: number, pageNumber: number, props: any) {
    var max = min + props.panelNumber - 1;
    if (max > pageNumber) {
        max = pageNumber;
    }
    return max;
}

/**
 * 跳转到某一页
 * @param {*} target 目标页码
 * @param {*} props 所有属性
 */
function toPage(target: number, props: any) {
    if (props.current === target) {
        return; //目标页码和当前页码相同
    }
    props.onPageChange && props.onPageChange(target);
}

/**
 * 计算总页数
 * @param {*} props
 */
function getPageNumber(props: any) {
    return Math.ceil(props.total / props.limit);
}


export function PagerTest() {
    const [studentInfo, setStudentInfo] = useState({
        current: 1,
        total: 0,
        limit: 10,
        panelNumber: 5,
        students: [],
    })
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetchStudentsByPager(studentInfo.current, studentInfo.limit).then(resp => {
            studentInfo.students = resp.findByPage
            studentInfo.total = resp.cont
            setStudentInfo(studentInfo)
            setIsLoading(false)
        })
    }, [studentInfo])

    const handlePageChange = (newPage: any) => {
        studentInfo.current = newPage
        setStudentInfo({ ...studentInfo })
    }
    return (
        <div className="container">
            {isLoading ?
                <Loading /> :
                <div>
                    <StudentList stus={studentInfo.students} />
                    <div className="pager">
                        <Pager {...studentInfo} onPageChange={handlePageChange} />
                    </div>
                </div>
            }

        </div>
    )
}
