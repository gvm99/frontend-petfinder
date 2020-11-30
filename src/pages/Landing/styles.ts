import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Check } from '../../assets/icons/check.svg';


const wrapperStyle = css`
  max-width: 1080px;
  padding: 0 16px;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  background: var(--color-white);
`;

export const Header = styled.header`
  ${wrapperStyle}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SignInButton = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  padding: 32px 16px 8px 16px;
  margin-top: 0;
  margin-bottom: auto;
  border: 0;
  border-radius: 0 0 8px 8px;
  background: var(--color-primary-light);
  color: var(--color-primary);
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background: var(--color-primary);
    color: var(--color-white);
  }
`;

export const Hero = styled.section`
  ${wrapperStyle}
  width: 100%;
  height: min(630px, calc(100vh - 70px));
  position: relative;

  @media (max-width: 960px) {
    height: 350px;
  }

  @media (max-width: 767px) {
    height: auto;
    margin: 32px 0 72px;
  }
`;

export const CTABox = styled.div`
  padding-top: 150px;
  width: 100%;
  max-width: 350px;
  background-image: url(../../assets/background-dog.jpg);
  h1 {
    font-size: 40px;
    color: var(--color-primary);
    font-weight: 600;
  }

  p {
    font-size: 20px;
    color: var(--color-gray);
    margin: 12px 0 24px;
  }

  button:first-of-type {
    margin-right: 16px;
  }

  @media (max-width: 960px) {
    padding-top: 80px;
  }

  @media (max-width: 767px) {
    padding-top: 0;
    max-width: 450px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  max-width: 830px;
  margin: 32px auto 64px;

  div {
    line-height: 1.8;

    strong {
      color: var(--color-primary);
      font-weight: 600;
    }

    span {
      border-bottom: 1px solid var(--color-primary);
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: 20px;
    padding: 0 16px;
  }
`;

export const Pets = styled.section`
  background: var(--color-lightgray);

  > div {
    ${wrapperStyle}
    padding-top: 64px;
    padding-bottom: 64px;

    > div {
      margin: 24px auto;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 767px) {
        flex-direction: column;
      }
    }
  }
`;

export const PricingTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  color: var(--color-primary);
`;

export const Card = styled.div`
  background: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  min-width: 200px;
  text-align: center;

  & + & {
    margin-left: 32px;

    @media (max-width: 767px) {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  color: var(--color-black);
  margin-bottom: 16px;
`;

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-darkgray);

  & + & {
    margin-top: 8px;
  }
`;

export const CheckIcon = styled(Check)`
  width: 18px;
  margin-right: 8px;

  path {
    fill: var(--color-primary);
  }
`;

export const Price = styled.div`
  margin: 16px 0;
  font-weight: 600;

  span {
    color: var(--color-darkgray);
  }
`;
export const HeroBackground = styled.div`
  position: absolute;
  width: 760px;
  height: auto;
  background-image: url(../../assets/background-dog.jpg);
  top: -115px;
  right: -100px;
  pointer-events: none;
  @media (max-width: 1300px) {
    width: 650px;
    right: 0;
  }
  @media (max-width: 1030px) {
    width: 550px;
    top: auto;
    right: 16px;
  }
  @media (max-width: 960px) {
    width: 350px;
    top: 0;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
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