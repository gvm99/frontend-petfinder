import styled, { css, keyframes } from 'styled-components';
import { IProps as ISpinnerProps } from './index';

export const Container = styled.div<{ isOverlay: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999999;

  ${props =>
    props.isOverlay &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: var(--color-overlay-light);
      backdrop-filter: blur(6px);
    `}
`;

const rotation = keyframes`
   from {transform: rotate(0deg);}
   to {transform: rotate(359deg);}
`;

export const Spinner = styled.div<ISpinnerProps>`
  height: ${props => (props.size ? props.size : '150px')};
  width: ${props => (props.size ? props.size : '150px')};

  border-width: ${props => (props.border ? props.border : '20px')};
  border-style: double;

  border-top-color: var(--color-primary);
  border-right-color: var(--color-primary-light);
  border-bottom-color: var(--color-primary-light);
  border-left-color: var(--color-primary-light);

  border-radius: 50%;

  animation: ${rotation} 0.6s infinite linear;
`;

export const Message = styled.h1`
  font-size: 20px;
  margin-top: 32px;
  font-weight: 600;
  color: var(--color-gray);
`;
