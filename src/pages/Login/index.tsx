import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FormHandles, SubmitHandler, UnformErrors } from '@unform/core';
import * as Yup from 'yup';

import useAuth from '../../hooks/useAuth';

import Input from '../../components/Form/Input';
import Button from '../../components/Button';

import {
  Container,
  FormContainer,
  Form,
  Title,
  Link,
  Info,
} from './styles';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';

interface FormData {
  username: string;
  password: string;
}

interface LocationState {
  accountCreated?: boolean;
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();
  const location = useLocation<LocationState>();
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    if (location.state?.accountCreated) toast.info('Conta criada com sucesso.');
  }, [location.state]);

  const handleSubmit: SubmitHandler<FormData> = async data => {
    try {
      
      setLoading(true);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Formato de email inválido')
          .required('O email é obrigatorio'),
        password: Yup.string().required('A senha é obrigatoria'),
      });

      await schema.validate(data, { abortEarly: false });

      await signIn(data);
      history.push('/app/pet');
    } catch (error) {
      console.log(error)
      const validationErrors: UnformErrors = {};

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      } else {
        if (error.status === 401) toast.error('E-maill ou senha inválido');
        else
          toast.error(
            'Um erro inexperado ocorreu. Por favor, tente novamente.',
          );

        console.log(error);
      }
      setLoading(false);
    }
  };

  return (
    <Container>
      {loading && <Loader isOverlay />}

      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Title>Entrar</Title>

          <Input label="E-mail" name="email" />
          <Input type="password" label="Senha" name="password" />

          {/* <Link to="#">Esqueceu sua senha?</Link> */}
          <Button block>Entrar</Button>

          <Info>
            Não tem uma conta? <Link to="/cadastro">Cadastre-se aqui</Link>
          </Info>
        </Form>
      </FormContainer>

    </Container>
  );
};

export default Login;
