import styled, { css } from 'styled-components';
import { DropzoneRootProps } from 'react-dropzone';

import { ReactComponent as Upload } from '../../../assets/icons/upload.svg';

const getColor = (props: DropzoneRootProps) => {
  if (props.isDragReject) {
    return 'var(--color-red)';
  }
  if (props.isDragActive) {
    return 'var(--color-primary)';
  }
  return 'transparent';
};

export const Container = styled.div`
  margin-bottom: 12px;

  label {
    color: var(--color-black);
    display: block;
    margin-bottom: 4px;
  }

  span {
    color: var(--color-red);
    display: block;
    font-size: 14px;
    padding-top: 4px;
  }
`;

export const DropzoneContainer = styled.div<{ hasError: boolean }>`
  position: relative;
  width: 100%;
  background: var(--color-lightgray);
  color: var(--color-darkgray);
  border: 1px solid;
  border-color: ${props => getColor(props)};
  border-radius: var(--card-radius);
  padding: 12px 48px 12px 16px;
  transition: border 0.2s;
  outline: 0;

  &:focus,
  &:active {
    border-color: var(--color-primary);
    box-shadow: 0;
  }

  &::placeholder {
    color: var(--color-gray);
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${props =>
    props.hasError &&
    css`
      border-color: var(--color-red);
    `}
`;

export const UploadIcon = styled(Upload)`
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 100%;
  padding: 14px;
  pointer-events: none;
  background: var(--color-gray-300);
  border-top-right-radius: var(--card-radius);
  border-bottom-right-radius: var(--card-radius);

  path {
    fill: var(--color-gray);
  }
`;
