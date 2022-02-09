import styled from '@emotion/styled';
import { Button, BUTTON_SIZE, BUTTON_THEME } from '@src/components/button';
import { LOGIN_TYPE } from '@src/store/LoginState';

export const SelectLogintype = ({ onSelect }: { onSelect: (type: LOGIN_TYPE) => void }) => {
  const dataMap = [
    { type: LOGIN_TYPE.MASTER, label: '통합관리자' },
    { type: LOGIN_TYPE.DOCTOR, label: '진료의' },
    { type: LOGIN_TYPE.ADMINISTRATION, label: '원무관리자' },
  ];

  return (
    <Container>
      <Title>로그인 할 계정을 선택해 주세요.</Title>
      <SelectBox>
        {dataMap.map((data) => (
          <Button
            key={data.type}
            size={BUTTON_SIZE.LARGE}
            theme={BUTTON_THEME.PRIAMRY}
            label={data.label}
            onClick={() => onSelect(data.type)}
          />
        ))}
      </SelectBox>
    </Container>
  );
};

const Container = styled.div``;
const Title = styled.div``;
const SelectBox = styled.div``;
