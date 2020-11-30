import React from 'react';
import useAuth from '../hooks/useAuth';

import Loader from '../components/Loader';

import { Switch } from 'react-router-dom';
import Route from './Route';
import Landing from '../pages/Landing';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PetForm from '../pages/PetForm';
import Historic from '../pages/AnimaisCriados';
import AnimaisAdotar from '../pages/AnimaisAdotar';
import AnimaisAdotados from '../pages/AnimaisAdotados';
import PetFormEdit from '../pages/PetFormEdit';
import AnimaisAprovacao from '../pages/AnimaisAprovacao';

import Profile from '../pages/Profile';

const Routes: React.FC = () => {
  const { loading } = useAuth();

  if (loading) return <Loader />;

  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/cadastro" component={Register} isAuth />
      <Route path="/entrar" component={Login} isAuth />

      <Route
        path="/app/pet"
        exact
        component={PetForm}
        isPrivate
      />
      <Route
        path="/app/pet/:id"
        component={PetFormEdit}
        isPrivate
      />
      <Route path="/app/pets" component={Historic} isPrivate />
      <Route path="/app/adotar" component={AnimaisAdotar} isPrivate />
      <Route path="/app/adotados" component={AnimaisAdotados} isPrivate />
      <Route path="/app/aprovar" component={AnimaisAprovacao} isPrivate />
      <Route path="/app/perfil" component={Profile} isPrivate />

      <Route component={() => <h1>Page Not Found</h1>} />
    </Switch>
  );
};

export default Routes;
