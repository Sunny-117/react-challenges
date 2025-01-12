const appkey = "demo13_1545210570249";

export const fetchAllStudents = async () => {
    const stus = await fetch(
        "http://api.duyiedu.com/api/student/findAll?appkey=" + appkey
    )
        .then((resp) => resp.json())
        .then((resp) => resp.data);
    return stus;
}

export const fetchStudentsByPager = async (current: number, limit: number) => {
    const resp = await fetch(
        `http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${current}&size=${limit}`
    )
        .then((resp) => resp.json())
        .then((resp) => resp.data);
    return resp
}