import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  margin-top: 16px;
  display: flex;

  > div {
    position: relative;
    background: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-radius);
    box-shadow: var(--card-shadow);
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & + div {
      margin-left: 12px;
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: var(--card-radius);
    margin-bottom: 8px;
    margin-top: 0;
  }

  a {
    text-decoration: none;
    color: var(--color-primary);
    transition: color 0.2 s;

    &:hover,
    &:focus,
    &:active {
      color: var(--color-primary-dark);
      text-decoration: underline var(--color-primary-dark);
    }
  }
`;

export const ZoomButton = styled(Button).attrs({
  icon: true,
  variant: 'white',
})`
  position: absolute;
  bottom: 10px;
  right: 4px;
  opacity: 0.6;
  transition: opacity 0.2s;

  &:active,
  &:focus,
  &:hover {
    opacity: 1;
  }
`;
