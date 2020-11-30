import { useField } from '@unform/core';
import React, { useRef, useEffect, InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: React.FC<IProps> = ({ name, label, type = 'text', ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container hasError={!!error}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        type={type}
        id={fieldName}
        {...rest}
      />
      {error && <span>{error}</span>}
    </Container>
  );
};

export default Input;
