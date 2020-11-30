import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

import { Container, DropzoneContainer, UploadIcon } from './styles';

interface IProps {
  name: string;
  label?: string;
}

interface InputRefProps extends HTMLInputElement {
  uploadedFile: File | null;
}

const Dropzone: React.FC<IProps> = ({ name, label }) => {
  const inputRef = useRef<InputRefProps>(null);
  const {
    fieldName,
    registerField,
    defaultValue = null,
    error,
    clearError,
  } = useField(name);

  const [uploadedFile, setUploadedFile] = useState<File | null>(defaultValue);

  const onDropAccepted = useCallback(
    acceptedFiles => {
      clearError();
      const file = acceptedFiles[0];
      if (inputRef.current) {
        inputRef.current.uploadedFile = file;
        setUploadedFile(file);
      }
    },
    [clearError],
  );

  const onDropRejected = useCallback(() => {
    toast.error('Arquivo inválido', { autoClose: 2500 });
    if (inputRef.current) inputRef.current.uploadedFile = null;
    setUploadedFile(null);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    onDropAccepted,
    onDropRejected,
    accept: 'image/*',
    multiple: false,
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: InputRefProps) => {
        return ref.uploadedFile || null;
      },
      clearValue: (ref: InputRefProps) => {
        ref.uploadedFile = null;
        setUploadedFile(null);
      },
      setValue: (ref: InputRefProps, value) => {
        ref.uploadedFile = value;
        setUploadedFile(value);
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}

      <DropzoneContainer
        {...getRootProps({
          isDragActive,
          isDragReject,
          onClick: () => {
            inputRef.current?.click();
          },
        })}
        hasError={!!error}
      >
        <input {...getInputProps()} ref={inputRef} />

        {uploadedFile ? (
          <p>{uploadedFile.name}</p>
        ) : isDragReject ? (
          <p>Arquivo inválido</p>
        ) : isDragActive ? (
          <p>Solte o arquivo aqui...</p>
        ) : (
          <p>Nenhum arquivo selecionado</p>
        )}
        <UploadIcon />
      </DropzoneContainer>

      {error && <span>{error}</span>}
    </Container>
  );
};

export default Dropzone;
