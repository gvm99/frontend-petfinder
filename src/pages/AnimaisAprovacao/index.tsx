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
  usuario_adotante:{
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
        const { data } = await api.get<ResponseData[]>('/animais/lista/aprovar');

        const results = data.map(result => ({
          id: result.id,
          nome: result.nome,
          peso: result.peso,
          raca: result.raca,
          idade: result.idade,
          cidade: result.cidade,
          usuario_adotante:{
            nome: result.usuario_adotante.nome,
            email:result.usuario_adotante.email,
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

  async function aceitar(id: string) {
    await api.post<ResponseData>('animais/aprovar', {id});
    history.push(`/app/pets`);
  }
  async function recusar(id: string) {
    await api.post<ResponseData>('animais/recusar', {id});
    history.push(`/app/pets`);
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
                <th>Nome do Adotante</th>
                <th>E-mail</th>
                <th></th>
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
                  <td>{pet.usuario_adotante.nome}</td>
                  <td>{pet.usuario_adotante.email}</td>
                  <td>
                    <Button
                      icon
                      onClick={() => aceitar(pet.id)}
                    >
                      APROVAR
                    </Button>
                  </td>
                  <td>
                    <Button
                      icon
                      onClick={() => recusar(pet.id)}
                    >
                      RECUSAR
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
