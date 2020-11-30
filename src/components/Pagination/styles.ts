import styled, { css } from 'styled-components';

interface IPageProps {
  active: boolean;
}

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  & + & {
    margin-left: 4px;
  }
`;

const linkStyle = css`
  border: none;
  border-radius: 8px;
  background: var(--color-lightgray);
  color: var(--color-darkgray);
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background: var(--color-gray-300);
  }
`;

const prevNextStyle = css`
  padding: 8px 12px;
`;

export const Page = styled.button<IPageProps>`
  ${linkStyle}
  height: 38px;
  min-width: 38px;
  padding: 8px;

  ${props =>
    props.active &&
    css`
      background: var(--color-primary);
      color: var(--color-white);

      &:hover,
      &:focus,
      &:active {
        background: var(--color-primary);
      }
    `}
`;

export const Previous = styled.button`
  ${linkStyle}
  ${prevNextStyle}
`;

export const Next = styled.button`
  ${linkStyle}
  ${prevNextStyle}
`;
