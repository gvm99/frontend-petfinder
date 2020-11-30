import React from 'react';
import Sidebar from '../../../components/Sidebar';

import { Content } from './styles';

const Auth: React.FC = ({ children }) => (
  <>
    <Sidebar />
    <Content>{children}</Content>
  </>
);

export default Auth;
