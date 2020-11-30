import React from 'react';

import { Container, Spinner, Message } from './styles';

export interface IProps {
  size?: number;
  border?: number;
  message?: string;
  isOverlay?: boolean;
}

const Loader: React.FC<IProps> = ({
  size,
  border,
  message,
  isOverlay = false,
}) => {
  return (
    <Container isOverlay={isOverlay}>
      <Spinner size={size} border={border} />
      {message && <Message>{message}</Message>}
    </Container>
  );
};

export default Loader;
