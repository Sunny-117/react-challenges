import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: #fff;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.25),
      inset 0 3px 3px -3px rgba(0, 0, 0, 0.25);
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 0 16px;
    text-align: right;
    line-height: 72px;
  }
  > .pad {
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #e8e8e8;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #dedede;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #d3d3d3;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #c9c9c9;
      }
      &:nth-child(14) {
        background: #bfbfbf;
      }
      &:nth-child(12) {
        background: #b5b5b5;
      }
    }
  }
`;

export default Wrapper