import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
// 展示数据内容并根据用户输入筛选结果
export default function ProductTable() {
  const arr = [
    {
      title: "title-name",
      row: [
        { keyName: "key-name1", value: "value-1" },
        { keyName: "key-name2", value: "value-2" },
      ],
    },
  ];
  return (
    <div>
      {arr.map((item) => {
        return (
          <div>
            <ProductCategoryRow title={item.title} />
            {item.row.map((ele) => {
              return <ProductRow keyName={ele.keyName} value={ele.value} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
