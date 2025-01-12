import React from "react";
import Wrapper from "./NumberPadSection/Wrapper";
import generateOutput from "./NumberPadSection/generateOutput";

type Props = { 
  value: string;
  onChange: (value: string) => void;
  onOk?: () => void;
}

const NumberPadSection: React.FC<Props> = (props) => {
  const { value, onChange, onOk } = props
  const output = value
  const ok = () => {
    if (onOk) {
      onOk()
    }
    // onChange('0');
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const button = e.target as HTMLButtonElement;
    const input = button.textContent as string;
    if (input === null) {
      return;
    }
    if (input === "OK") {
      ok();
      return;
    }
    const result = generateOutput(output, input)
    onChange(result);
    // setOutput(result)
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export default NumberPadSection;
