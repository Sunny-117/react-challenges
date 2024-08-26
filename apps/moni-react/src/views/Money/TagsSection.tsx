import React from "react";
import styled from "styled-components";
import useTags from 'hooks/useTags'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  flex-grow: 1;
  background: #fff;
  padding: 16px;
  font-size: 14px;
  > ol {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
    > li {
      background: #d9d9d9;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      padding: 0px 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: #5a5a5a;
        color: #fff;
      }
    }
  }
  > button {
    background: transparent;
    border: none;
    color: #999;
    border-bottom: 1px solid;
    padding: 0 4px;
  }
`;

type Props = { 
  value: number[];
  onChange: (value: number[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
  const { tags, addTag } = useTags()
  const {value: selectedTagIds, onChange} = props
  const onToggleTag = (id: number) => {
    const index = selectedTagIds.indexOf(id);
    if (index >= 0) {
      onChange(
        selectedTagIds.filter((selectedTagId) => selectedTagId !== id)
      );
    } else {
      onChange([...selectedTagIds, id]);
    }
  };
  const getTagClass = (id: number) =>
  selectedTagIds.indexOf(id) >= 0 ? "selected" : "";
  return (
    <Wrapper>
      <button onClick={addTag}>新增标签</button>
      <ol>
        {tags.map((tag) => (
          <li
            className={getTagClass(tag.id)}
            onClick={() => {
              onToggleTag(tag.id);
            }}
            key={tag.id}
          >
            {tag.name}
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};

export default TagsSection;
