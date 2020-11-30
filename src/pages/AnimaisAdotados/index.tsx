import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg';
import api from '../../services/api';

import Button from '../../components/Button';
import { Container, Card, TableContainer, Table, Thead, TBody } from './styles';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';


interface ResponseData {
  id: string;
  nome: string;
  raca: string;
  idade: string;
  peso: string;
  cidade: string;
  aceitoCriador: boolean;
}

const Historic: React.FC = () => {
  const [pets, setPets] = useState<ResponseData[]>([]);
  const history = useHistory();

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get<ResponseData[]>('/animais/lista/adotados');

        const results = data.map(result => ({
          id: result.id,
          nome: result.nome,
          peso: result.peso,
          raca: result.raca,
          idade: result.idade,
          cidade: result.cidade,
          aceitoCriador: result.aceitoCriador
        }));

        setPets(results);
      } catch (error) {
        toast.error(
          'Um erro inexperado ocorreu. Por favor, recarrege a página ou tente mais tarde.',
        );

        if (error.response) console.log(error.response.data);
        console.log(error);
      }
    }

    loadData();
  }, []);

  function handleNavigateToResult(id: string, index: number) {
    history.push(`/app/pet/${id}`, { ...pets[index] });
  }

  // if (pets.length === 0) return <Loader />;

  return (
    <Container>
      <Card>
        <TableContainer>
          <Table>
            <Thead>
              <tr>
                <th>Nome</th>
                <th>Raça</th>
                <th>Idade</th>
                <th>Peso</th>
                <th>Cidade</th>
                <th>Situação</th>
              </tr>
            </Thead>
            <TBody>
              {pets.map((pet, idx) => (
                <tr key={pet.id}>
                  <td>{pet.nome}</td>
                  <td>{pet.raca}</td>
                  <td>{pet.idade}</td>
                  <td>{pet.peso}</td>
                  <td>{pet.cidade}</td>
                  <td>{(pet.aceitoCriador)? "Aceito para Adoção":"Pendente do Aceite"}</td>
                </tr>
              ))}
            </TBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default Historic;
