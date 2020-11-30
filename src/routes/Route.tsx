import React from 'react';
import {
  Redirect,
  RouteComponentProps,
  Route,
  RouteProps,
} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import AppLayout from '../pages/_layouts/App';

interface IProps extends RouteProps {
  isPrivate?: boolean;
  isAuth?: boolean;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const RouteWrapper: React.FC<IProps> = ({
  isPrivate = false,
  isAuth = false,
  component: Component,
  ...rest
}) => {
  const { signed } = useAuth();

  if (!signed && isPrivate) return <Redirect to="/entrar" />;

  if (signed && isAuth) return <Redirect to="/app/pet" />;

  const Layout = isPrivate ? AppLayout : React.Fragment;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
