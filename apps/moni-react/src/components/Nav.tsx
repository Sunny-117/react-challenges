import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  line-height: 24px;
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: calc(100% / 3);
      text-align: center;
      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: red;
          .icon {
            fill: red;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag" />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics" />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
