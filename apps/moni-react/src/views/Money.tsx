import React, { useState } from "react";
import Layout from "components/Layout";
import styled from "styled-components";

import TagsSection from "./Money/TagsSection";
import NoteSection from "./Money/NoteSection";
import CategorySection from "./Money/CategorySection";
import NumberPadSection from "./Money/NumberPadSection";
import useRecords from "hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column-reverse;
`;

type Category = "-" | "+";

const defalutRecord = {
  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: '0',
  createdAt: ""
}

const CategoryWrapper = styled.div`
  background: #c4c4c4;
`

const Money = () => {
  const [record, setRecord] = useState(defalutRecord);
  const {addRecord} = useRecords()
  const onChange = (object: Partial<typeof record>) => {
    setRecord({
      ...record,
      ...object,
    });
  };
  const submit = () => {
    if (addRecord({...record, createdAt: new Date().toISOString()})) {
      setRecord(defalutRecord)
    }
  }
  // parseFloat(record.amount)
  return (
    <MyLayout scrollTop={9999}>
      <NumberPadSection
        value={record.amount}
        onChange={amount => onChange({ amount })}
        onOk={submit}
      />
      <CategoryWrapper>
        <CategorySection
          value={record.category}
          onChange={category => onChange({ category })}
        />
      </CategoryWrapper>
      <NoteSection
        value={record.note}
        onChange={note => onChange({ note })}
      />
      <TagsSection
        value={record.tagIds}
        onChange={tagIds => onChange({ tagIds })}
      />
    </MyLayout>
  );
};

export default Money;
