import styled from '@emotion/styled';
import { Button } from '../button';
import Input from '../input/Input';

import { IPostCodeDetail } from './postCode_types';

export function PostCodeDetail({ value, codes, onChange, onComplete }: IPostCodeDetail) {
  return (
    <PostCodeDetailWrapper>
      <BannerStyled>
        <p>우편번호 : {codes.zonecode}</p>
        <p>주소1 : {codes.localAddress}</p>
      </BannerStyled>
      <PostCodeDetailStyled>
        <Input value={value} onChange={onChange} />
      </PostCodeDetailStyled>
    </PostCodeDetailWrapper>
  );
}

const PostCodeDetailWrapper = styled.div``;
const BannerStyled = styled.div``;
const PostCodeDetailStyled = styled.div``;
