import styled from '@emotion/styled';
import { IImage } from './image_types';

export function Image({ image }: IImage) {
  return (
    <ImageStyled>
      <img src={image} alt="" />
    </ImageStyled>
  );
}

const ImageStyled = styled.div`
  img {
    height: 100%;
  }
`;
