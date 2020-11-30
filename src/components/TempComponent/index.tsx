import React from 'react';
import getTempImages from '../../services/images';

import { ReactComponent as MagnifyPlusIcon } from '../../assets/icons/magnify-plus.svg';

import { Container, ZoomButton } from './styles';

interface Props {
  type: string;
  openZoomModal: (image: any) => void;
}

const TempComponent: React.FC<Props> = ({ type, openZoomModal }) => {
  const images = getTempImages(type);
  return (
    <Container>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="Raio-x" />
          <ZoomButton onClick={() => openZoomModal(image)}>
            <MagnifyPlusIcon />
          </ZoomButton>
        </div>
      ))}
    </Container>
  );
};

export default TempComponent;
