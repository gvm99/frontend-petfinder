import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



import { Container, Nav, NavItem, SignOutItem } from './styles';

const Sidebar: React.FC = () => {
  const { signOut } = useAuth();

  const history = useHistory();
  
  function handleSignOut(e: MouseEvent<HTMLButtonElement>) {
    signOut();
    history.push('/');
  }

  return (
    <Container>
      <Nav>
        
        <NavItem to="/app/pet">Adicionar um Pet</NavItem>
        <NavItem to="/app/pets">Pets que Cadastrei</NavItem>
        <NavItem to="/app/adotar">Pets para Adotar</NavItem>
        <NavItem to="/app/adotados">Pets Adotados</NavItem>
        <NavItem to="/app/aprovar">Pets para Aprovar</NavItem>
        
        <SignOutItem onClick={handleSignOut}>Sair</SignOutItem>
      </Nav>
    </Container>
  );
};

export default Sidebar;
