import { useField } from '@unform/core';
import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';

import {
  Container,
  SelectContainer,
  SelectElement,
  ChevronIcon,
} from './styles';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  label?: string;
}

const Select: React.FC<IProps> = ({ id, name, options, label, ...rest }) => {
  const ref = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}

      <SelectContainer>
        <SelectElement
          ref={ref}
          defaultValue={defaultValue || ''}
          id={name}
          hasError={!!error}
          {...rest}
        >
          <option value="" disabled>
            Selecione uma opção
          </option>

          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectElement>
        <ChevronIcon />
      </SelectContainer>

      {error && <span>Selecione uma opção</span>}
    </Container>
  );
};

export default Select;
