import React, { useRef, useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { FormHandles, SubmitHandler, UnformErrors } from '@unform/core';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import Dropzone from '../../components/Form/Dropzone';
import Loader from '../../components/Loader';

import { Container, Form } from './styles';
import api from '../../services/api';
import { toast } from 'react-toastify';

interface FormData {
  id: string;
  nome: string;
  raca: string;
  peso: string;
  idade: string;
  cidade: string;
}

interface Params {
  id: string;
}


interface ResponseData {
  id: string;
  nome: string;
  raca: string;
  peso: string;
  idade: string;
  cidade: string;
}


const PetForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pets, setPets] = useState<ResponseData>();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const location = useLocation<FormData>();
  const params = useParams() as Params;

  useEffect(() => {
      api
        .get<ResponseData>(`animais/${params.id}`)
        .then(({ data }) => {
          const serializedResponse: FormData = {
            id: data.id,
            nome: data.nome,
            raca: data.raca,
            peso: data.peso,
            idade: data.idade,
            cidade: data.cidade,
          };

          setPets(serializedResponse);
          setIsLoading(false);
        })
        .catch(error => history.push('/app/diagnostico'));
    
  }, [history, location, params]);

  const handleSubmit: SubmitHandler<FormData> = async data => {
    try {
      setIsLoading(true);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required('O nome do pet é obrigatório'),
        raca: Yup.string().required('A raça do pet é obrigatória'),
        peso: Yup.string().required('O peso do pet é obrigatório'),
        idade: Yup.string().required('A idade do pet é obrigatório')
      });

      await schema.validate(data, { abortEarly: false });
      const response = await api.post<ResponseData>('animais/update', data);
      history.push('/app/pets');

    } catch (error) {
      const validationErrors: UnformErrors = {};

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      } else {
        toast.error('Um erro inexperado ocorreu. Por favor, tente novamente.');

        if (error.response) console.log(error.response.data);
        else console.log(error);
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      {isLoading && (
        <Loader isOverlay message="Aguarde enquanto atualizamos o seu Pet" />
      )}

      <Form ref={formRef} onSubmit={handleSubmit}
      initialData={{
        ...pets,
        nome: pets?.nome,
      }}>
        <Input label="" name="id"  hidden/>
        <Input label="Nome do Pet" name="nome" />
        <Input label="Raça" name="raca" />
        <Input label="Peso" name="peso" />
        <Input label="Idade" name="idade" />
        
        <Button block>Atualizar</Button>
      </Form>
    </Container>
  );
};

export default PetForm;
