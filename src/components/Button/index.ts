import styled, { css } from 'styled-components';

interface IProps {
  variant?: string;
  size?: string;
  block?: boolean;
  icon?: boolean;
}

/************** STYLE HELPERS **************/
const getBackground = (variant?: string) => {
  if (!variant || variant === 'primary') return 'var(--color-primary)';
  if (variant === 'white') return 'var(--color-white)';
  if (variant === 'secondary') return 'var(--color-lightgray)';
};

const getColor = (variant?: string) => {
  if (!variant || variant === 'primary') return 'var(--color-white)';
  if (variant === 'white') return 'var(--color-gray)';
  if (variant === 'secondary') return 'var(--color-darkgray)';
};

const getHoverBackground = (variant?: string) => {
  if (!variant || variant === 'primary') return 'var(--color-primary-dark)';
  if (variant === 'white') return 'var(--color-gray-100)';
  if (variant === 'secondary') return 'var(--color-gray-300)';
};

const getSize = (size?: string, icon?: boolean) => {
  switch (size) {
    case 'md':
      return icon ? '6px' : '12px 16px';

    case 'sm':
      return icon ? '4px' : '8px 12px';

    case 'lg':
      return icon ? '10px' : '14px 18px';

    default:
      return icon ? '6px' : '12px 16px';
  }
};

const getIconButtonStyle = (props: IProps) => {
  function getSVGSize(size?: string) {
    switch (size) {
      case 'md':
        return '20px';

      case 'sm':
        return '12px';

      case 'lg':
        return '26px';

      default:
        return '20px';
    }
  }

  return css`
    border-radius: 8px;
    padding: ${getSize(props.size, props.icon)};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: ${getSVGSize(props.size)};
      height: ${getSVGSize(props.size)};

      path {
        fill: ${getColor(props.variant)};
      }
    }
  `;
};

/************** OPTIONAL STYLES **************/
const blockStyle = css`
  display: block;
  width: 100%;
`;

/************** COMPONENT STYLE **************/
const Button = styled.button<IProps>`
  text-align: center;
  border: 0;
  border-radius: var(--card-radius);
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;
  outline: 0;

  background: ${({ variant }) => getBackground(variant)};
  color: ${({ variant }) => getColor(variant)};
  padding: ${({ size }) => getSize(size)};

  ${({ block }) => block && blockStyle};

  ${props => props.icon && getIconButtonStyle(props)};

  &:focus,
  &:active,
  &:hover {
    background: ${({ variant }) => getHoverBackground(variant)};
  }
`;

export default Button;
