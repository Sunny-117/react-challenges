import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  > ul {
    /* background: #c4c4c4; */
    display: flex;
    text-align: center;
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
`;

type Props = { 
  value: '-' | '+';
  onChange: (value: '-' | '+') => void;
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {
    '-': '支出',
    '+': '收入'
  }
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-', '+'])
  const { value: category, onChange } = props
  return (
    <Wrapper>
      <ul>
        {categoryList.map(item => <li
          className={category === item ? "selected" : ""}
          onClick={() => onChange(item)}
          key={item}
        >
          {categoryMap[item]}
        </li>)}
      </ul>
    </Wrapper>
  );
};

export default CategorySection;
