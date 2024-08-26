import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import Input from "components/Input";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 12px 0;
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input
        type="text"
        label="备注"
        placeholder="在这里输入备注"
        value={note}
        onChange={onChange}
      ></Input>
    </Wrapper>
  );
};

export default NoteSection;
