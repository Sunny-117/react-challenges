import { fetchStudentsByPager } from "@handle-react/apis";
import { useEffect, useState } from "react";


/**
 * 根据页码和页容量获取学生数据，得到一个响应结果
 * 并且，当页码和页容量变化时，将重新获取学生数据
 */
export default function useAllStudents(page = 1, limit = 10) {
  const [resp, setResp] = useState();

  useEffect(() => {
    (async () => {
      const resp = await fetchStudentsByPager(page, limit);
      setResp(resp);
    })();
  }, [page, limit]);
  return resp;
}
