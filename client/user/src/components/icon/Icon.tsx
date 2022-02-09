import styled from '@emotion/styled';
import { IIcon } from './icon_types';

export function Icon({ icon, width }: IIcon) {
  return <img src={icon} alt="" width={width} />;
}

Icon.defaultProps = {
  width: '40px',
};

const IconStyled = styled.div``;
