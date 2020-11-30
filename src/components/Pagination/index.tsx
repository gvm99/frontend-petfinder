import React from 'react';

import { List, Item, Previous, Next, Page } from './styles';

interface IProps {
  count: number;
  activePage: number;
}

const Pagination: React.FC<IProps> = ({ count, activePage }) => {
  return (
    <List>
      <Item>
        <Previous>Anterior</Previous>
      </Item>

      {Array.from(Array(count).keys()).map((_, index) => (
        <Item key={index}>
          <Page active={index + 1 === activePage}>{index + 1}</Page>
        </Item>
      ))}

      <Item>
        <Next>Próximo</Next>
      </Item>
    </List>
  );
};

export default Pagination;
