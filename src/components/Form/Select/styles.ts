import styled, { css } from 'styled-components';

import { ReactComponent as ChevronDown } from '../../../assets/icons/chevron-down.svg';

export const Container = styled.div`
  margin-bottom: 12px;

  label {
    color: var(--color-black);
    display: block;
    margin-bottom: 4px;
  }

  span {
    display: block;
    font-size: 14px;
    color: var(--color-red);
    margin-top: 6px;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectElement = styled.select<{ hasError: boolean }>`
  width: 100%;
  background: var(--color-lightgray);
  color: var(--color-darkgray);
  border: 1px solid transparent;
  border-radius: var(--card-radius);
  padding: 12px 40px 12px 16px;
  transition: border 0.2s;
  appearance: none;
  outline: 0;

  ${props =>
    props.hasError &&
    css`
      border-color: var(--color-red);
    `}

  &:focus,
  &:active {
    border-color: var(--color-primary);
  }
`;

export const ChevronIcon = styled(ChevronDown)`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  padding: 14px;
  pointer-events: none;

  path {
    fill: var(--color-gray);
  }
`;
