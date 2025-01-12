import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 14px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  > span {
    padding-right: 16px;
    white-space: nowrap;
  }
  > input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
`;

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
    const {label, children, ...rest} = props
  return (
    <Label>
      <span>{label}</span>
      <input
        {...rest}
      />
    </Label>
  );
};

export default Input;
