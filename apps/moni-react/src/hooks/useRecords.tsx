import { useState, useEffect } from "react";
import useUpdate from "./useUpdate";

export type RecordItem = {
  tagIds: number[];
  note: string;
  category: "-" | "+";
  amount: string;
  createdAt: string;
};

// typeof newRecordItem = Omit<RecordItem, 'createAt'>

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, records);
  const addRecord = (record: RecordItem) => {
    if (parseFloat(record.amount) <= 0) {
      return alert('请输入金额');
    }
    if (record.tagIds.length === 0) {
      return alert("请选择标签");
    }
    setRecords([...records, record]);
    window.alert('保存成功')
    return true
  };
  return {
    records,
    addRecord,
  };
};

export default useRecords;
