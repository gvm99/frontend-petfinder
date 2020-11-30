import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Form as Unform } from '@unform/web';

import { ReactComponent as LogoSVG } from '../../assets/logo.svg';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'logo form';
  height: 100%;
`;

export const FormContainer = styled.div`
  grid-area: form;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(Unform)`
  background: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  width: 100%;
  max-width: 350px;
  margin: 32px auto;
`;

export const Title = styled.h1`
  color: var(--color-primary);
  margin-bottom: 16px;
  font-size: 40px;
  font-weight: 600;
`;

export const Link = styled(RouterLink)`
  display: block;
  margin-bottom: 8px;
  text-align: center;
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 600;
  transition: color 0.2 s;

  &:hover,
  &:focus,
  &:active {
    color: var(--color-primary-darker);
    text-decoration: underline var(--color-primary-darker);
  }
`;

export const Info = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: var(--color-gray);
  text-align: center;

  > a {
    display: initial;
  }
`;

export const LogoContainer = styled.div`
  grid-area: logo;
  background: var(--color-primary-light);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(LogoSVG)`
  width: 100%;
  max-width: 450px;
  height: auto;
`;
