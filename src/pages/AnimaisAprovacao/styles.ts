import styled, { css } from 'styled-components';

import Input from '../../components/Form/Input';
import Button from '../../components/Button';

const cellStyle = css`
  padding: 8px 16px;
  text-align: left;
  width: max-content;

  &:first-of-type {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-of-type {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  min-width: min(100%, 800px);
`;

export const Search = styled.div`
  display: flex;
  margin-bottom: 16px;
  width: max(40%, 300px);
  position: relative;
`;

export const SearchField = styled(Input)`
  padding-right: 54px;
`;

export const SearchButton = styled(Button)`
  position: absolute;
  height: 38px;
  width: 38px;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border: 0;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background: var(--color-primary-light);

  th {
    ${cellStyle}
    padding: 12px 16px;
    font-weight: 700;
    color: var(--color-black);
  }
`;

export const TBody = styled.tbody`
  tr {
    &:nth-of-type(even) {
      background: var(--color-gray-100);
    }
  }

  td {
    ${cellStyle}
    color: var(--color-black);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  p {
    color: var(--color-darkgray);

    @media (max-width: 960px) {
      display: none;
    }

    > strong {
      font-weight: 700;
    }
  }
`;

export const PaginationContainer = styled.div`
  margin-left: 20px;

  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
