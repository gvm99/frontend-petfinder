import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { FormHandles, SubmitHandler, UnformErrors } from '@unform/core';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Form/Input';
import Button from '../../components/Button';

import {
  Container,
  FormContainer,
  Form,
  Title,
  Link,
  Info,
  LogoContainer,
  Logo,
} from './styles';
import api from '../../services/api';
import Loader from '../../components/Loader';

interface FormData {
  nome: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit: SubmitHandler<FormData> = async data => {
    try {
      setLoading(true);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required('O campo nome é obrigatorio'),
        rua: Yup.string().required('O campo nome é obrigatorio'),
        numero: Yup.string().required('O campo Número é obrigatorio'),
        bairro: Yup.string().required('O campo Bairro é obrigatorio'),
        cidade: Yup.string().required('O campo Cidade é obrigatorio'),
        estado: Yup.string().required('O campo Estado é obrigatorio'),
        email: Yup.string()
          .email('Formato de email inválido')
          .required('O email do médico é obrigatorio'),

        password: Yup.string().required('A senha é obrigatoria'),
      });

      await schema.validate(data, { abortEarly: false });

      // const formData = new FormData();
      // formData.append('nome', data.nome);
      // formData.append('rua', data.rua);
      // formData.append('numero', data.numero);
      // formData.append('bairro', data.bairro);
      // formData.append('cidade', data.cidade);
      // formData.append('estado', data.estado);
      // formData.append('email', data.email);
      // formData.append('password', data.password);

      await api.post('usuarios', data);
      history.push('/entrar', { accountCreated: true });

      setLoading(false);
    } catch (error) {
      const validationErrors: UnformErrors = {};

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      } else {
        toast.error('Um erro inexperado ocorreu. Por favor, tente novamente.');

        if (error.response) console.log(error.response);
        else console.log(error);
      }

      setLoading(false);
    }
  };

  return (
    <Container>
      {loading && (
        <Loader isOverlay message="Aguarde enquanto realizamos seu cadastro" />
      )}

      <LogoContainer>
        <Title> PET FINDER</Title>
      </LogoContainer>

      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Title>Bem-vindo</Title>

          <Input label="Nome" name="nome" />
          <Input label="E-mail" name="email" />
          <Input label="Rua" name="rua" />
          <Input label="Número" name="numero" />
          <Input label="Bairro" name="bairro" />
          <Input label="Cidade" name="cidade" />
          <Input label="Estado" name="estado" />
          <Input type="password" label="Senha" name="password" />

          <Button block>Cadastar</Button>

          <Info>
            Já possui uma conta? Fazer <Link to="/entrar">login</Link>
          </Info>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Register;
