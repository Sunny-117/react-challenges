import React, { ChangeEventHandler } from "react";
import useTags from "hooks/useTags";
import { useParams, useHistory } from "react-router-dom";
import Layout from "components/Layout";
import Icon from "components/Icon";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";
type Params = {
  id: string;
};
console.log('[ styled ] >', styled.header)
const NavBar = styled.header`
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .icon {
    width: 24px;
    height: 24px;
  }
`;

const InputWrapper = styled.div`
  background: #fff;
  margin-top: 8px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  padding: 16px;
  margin-top: 28px;
  > button {
    margin: 0 16px;
  }
`;

const Tag = () => {
  const { findTag, updateTag, deleteTag } = useTags();
  const { id } = useParams<Params>();
  const tag = findTag(parseInt(id));
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateTag(tag.id, {
      name: e.target.value,
    });
  };
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }
  return (
    <Layout>
      <NavBar>
        <Icon name="left" onClick={goBack} />
        <span className="title">编辑标签</span>
        <Icon />
      </NavBar>
      {tag ? (
        <div>
          <InputWrapper>
            <Input
              type="text"
              label="标签名"
              placeholder="请输入标签名"
              value={tag.name}
              onChange={() => onChange}
            ></Input>
          </InputWrapper>
          <ButtonWrapper>
            {/* <Button @click="save">保存</Button> */}
            <Button onClick={() => deleteTag(tag.id)}>删除</Button>
          </ButtonWrapper>
        </div>
      ) : (
        <div>tag 不存在</div>
      )}
    </Layout>
  );
};

export default Tag;
