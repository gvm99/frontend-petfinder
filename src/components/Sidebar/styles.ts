import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  position: fixed;
  width: max(250px, 20%);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background: linear-gradient(var(--color-white), var(--color-primary-light));
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

const itemStyle = css`
  width: 100%;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  color: var(--color-black);
  transition: color 0.2s;

  &:focus,
  &:active,
  &:hover {
    color: var(--color-primary);
  }
`;

export const NavItem = styled(NavLink)`
  ${itemStyle}

  &.active {
    background: var(--color-white);
    color: var(--color-primary);
    border-radius: 12px;
    box-shadow: 2px 2px 10px 0 #0072b126;
  }
`;

export const SignOutItem = styled.button`
  ${itemStyle}
  border: none;
  background: transparent;
  cursor: pointer;
`;
