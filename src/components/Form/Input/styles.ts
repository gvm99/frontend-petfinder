import styled, { css } from 'styled-components';

export const Container = styled.div<{ hasError: boolean }>`
  margin-bottom: 12px;

  label {
    color: var(--color-black);
    display: block;
    margin-bottom: 4px;
  }

  input {
    width: 100%;
    background: var(--color-lightgray);
    color: var(--color-darkgray);
    border: 1px solid transparent;
    border-radius: var(--card-radius);
    padding: 12px 16px;
    transition: border 0.2s;
    outline: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: var(--color-red);
      `}

    &:focus:not(:disabled),
  &:active:not(:disabled) {
      outline: 0;
      border-color: var(--color-primary);
    }

    &::placeholder {
      color: var(--color-gray);
    }

    &:disabled {
      background: var(--color-gray-400);
      pointer-events: none;
    }
  }

  span {
    display: block;
    font-size: 14px;
    color: var(--color-red);
    margin-top: 6px;
  }
`;
