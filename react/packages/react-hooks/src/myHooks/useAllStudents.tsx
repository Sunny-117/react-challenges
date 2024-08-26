import { useEffect, useState } from "react";
import { fetchAllStudents } from '@handle-react/apis'
/**
 * 当组件首次加载完成后，获取所有学生数据
 */
export default function useAllStudents() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    (async () => {
      const stus = await fetchAllStudents();
      setStudents(stus);
    })();
  }, []); //没有依赖，可以实现第一次加载完后运行，后面不运行    了
  return students;
}
