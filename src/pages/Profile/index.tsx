import React, { useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import Input from '../../components/Form/Input';

import { Container, Form } from './styles';
import api from '../../services/api';
import Loader from '../../components/Loader';

interface User {
  nome: string;
  email: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('usuario');
      setUser(data);
    }
    loadData();
  }, []);

  if (Object.entries(user).length === 0) return <Loader />;

  return (
    <Container>
      <Form
        ref={formRef}
        onSubmit={() => {}}
        initialData={{
          ...user,
          nome: user.nome,
        }}
      >
        <Input label="Nome" name="nome" disabled />
        <Input label="E-mail" name="email" disabled />
      </Form>
    </Container>
  );
};

export default Profile;
