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
  usuario_criador:{
    nome:string;
    email: string;
  }
}
interface SendAdocao {
  animalId: string;
}
const Historic: React.FC = () => {
  const [pets, setPets] = useState<ResponseData[]>([]);
  const history = useHistory();

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get<ResponseData[]>('/animais/lista/adotar');

        const results = data.map(result => ({
          id: result.id,
          nome: result.nome,
          peso: result.peso,
          raca: result.raca,
          idade: result.idade,
          cidade: result.cidade,
          usuario_criador:{
            nome: result.usuario_criador.nome,
            email:result.usuario_criador.email,
          }
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

  async function handleNavigateToResult(id: string, index: number) {
    await api.post<ResponseData>('animais/adotar', {id});
    history.push(`/app/adotados`);
  }

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
                <th>Nome do Doador</th>
                <th>E-mail</th>
                <th></th>
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
                  <td>{pet.usuario_criador.nome}</td>
                  <td>{pet.usuario_criador.email}</td>
                  <td>
                    <Button
                      icon
                      onClick={() => handleNavigateToResult(pet.id, idx)}
                    >
                      ADOTAR
                    </Button>
                  </td>
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
