const removeOutput = (output: string) => {
  if (output.length === 1) {
    return "0";
  } else {
    return output.slice(0, -1);
  }
};
const clearOutput = () => {
  return "0";
};
const setNumber = (output: string, input: string) => {
  if (output.length === 16) {
    return output;
  }
  if (output === "0") {
    if ("0123456789".indexOf(input) >= 0) {
      return input;
    } else {
      return output + input;
    }
  }
  if (output.indexOf(".") >= 0 && input === ".") {
    return output;
  }
  return output + input;
};

const generateOutput = (output: string, input: string) => {
  let result = "";
  if (input === "删除") {
    result = removeOutput(output);
  } else if (input === "清空") {
    result = clearOutput();
  } else {
    result = setNumber(output, input);
  }
  return result;
};

export default generateOutput;
