import React from "react";
import Layout from "components/Layout";
import useTags from "hooks/useTags";
import Icon from "components/Icon";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "components/Button"

const TagList = styled.ol`
  background: #fff;
  font-size: 16px;
  padding-left: 16px;
  > li {
    border-bottom: 1px solid #e6e6e6;
    > a {
      min-height: 44px;
      justify-content: space-between;
      align-items: center;
      display: flex;
      svg {
        width: 18px;
        height: 18px;
        color: #666;
        margin-right: 16px;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 28px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tags = () => {
  const { tags, addTag } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link to={`/tags/${tag.id}`}>
              <span>{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        ))}
      </TagList>
      <ButtonWrapper>
        <Button onClick={addTag}>新建标签</Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default Tags;
