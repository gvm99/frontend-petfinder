import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import api from '../../services/api';
import { toast } from 'react-toastify';
import {
  Container,
  Header,
  SignInButton,
  Hero,
  CTABox,
  Pets,
  PricingTitle,
  Card,
  Table,
  Thead,
  TBody,
  Price,
} from './styles';

interface ResponseData {
  id: number;
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

const Landing: React.FC = () => {
  const history = useHistory();
  const [dogs, setDogs] = useState<ResponseData[]>([]);

  const hanldeNavigateToRegister = () => {
    history.push('/cadastro');
  };
  
  useEffect(() => {
    
    async function loadData() {
      try {
        const { data } = await api.get<ResponseData[]>('animais');

        const results = data.map(result => ({
          id: result.id,
          nome: result.nome,
          raca: result.raca,
          idade: result.idade,
          peso: result.peso,
          cidade: result.cidade,
          usuario_criador:{
            nome: result.usuario_criador.nome,
            email:result.usuario_criador.email,
          }
        }));

        setDogs(results);
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

  return (
    <Container>
      <Header>
        <SignInButton to="/entrar">Entrar</SignInButton>
      </Header>

      <Hero>
        <CTABox>
          <h1>Pet Finder</h1>
          <p>
            Ajude pets abandonados encontrarem um novo lar
          </p>
          <div>
            <Button onClick={hanldeNavigateToRegister}>Comece agora</Button>
          </div>
        </CTABox>
      </Hero>

      <Pets>
        <div>
          <PricingTitle>Pets para Adotar</PricingTitle>
          <div>
            <Card>
              <Table>
              <Thead>
                <tr>
                  <th>Nome</th>
                  <th>Raça</th>
                  <th>idade</th>
                  <th>peso</th>
                  <th>cidade</th>
                  <th>Nome do Doador</th>
                  <th>E-mail</th>
                </tr>
              </Thead>
              <TBody>
                {dogs.map((dog, idx) => (
                  <tr key={dog.id}>
                    <td>{dog.nome}</td>
                    <td>{dog.raca}</td>
                    <td>{dog.idade}</td>
                    <td>{dog.peso}</td>
                    <td>{dog.cidade}</td>
                    <td>{dog.usuario_criador.nome}</td>
                    <td>{dog.usuario_criador.email}</td>
                  </tr>
                ))}
              </TBody>
            </Table>
            </Card>
          </div>
        </div>
      </Pets>
    </Container>
  );
};

export default Landing;
