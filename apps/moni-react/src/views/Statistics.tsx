import React, { useState, ReactNode } from "react";
import Layout from "components/Layout";
import CategorySection from "./Money/CategorySection";
import styled from "styled-components";
import useRecords, { RecordItem } from "hooks/useRecords";
import useTags from "hooks/useTags";
import dayjs from "dayjs";

const CategoryWrapper = styled.div`
  background: #fff;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

const Statistics = () => {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getTagName } = useTags();
  const hash: { [key: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(
    (record) => record.category === category
  );
  selectedRecords.forEach((record) => {
    const key = dayjs(record.createdAt).format("YYYY年MM月DD日");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(record);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(value) => setCategory(value)}
        />
      </CategoryWrapper>
      {array.map(([date, records], index) => (
        <div key={index}>
          <Header>{date}</Header>
          <div>
            {records.map((record) => {
              return (
                <Item key={record.createdAt}>
                  <div className="tags">
                    {record.tagIds.map((tagId) => (
                      <span key={tagId}>{getTagName(tagId)}</span>
                    )).reduce((result, span, index, array) => 
                    result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])}
                  </div>
                  {record.note && <div className="note">{record.note}</div>}
                  <div className="amount">￥{record.amount}</div>
                </Item>
              );
            })}
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default Statistics;
