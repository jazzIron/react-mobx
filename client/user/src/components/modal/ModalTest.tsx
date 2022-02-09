import styled from '@emotion/styled';
import { MODAL_SIZE } from '@src/store/modalState';
import { useModal } from './useModal';

export function ModalTest() {
  // const setModalState = useSetRecoilState(ModalState);
  // const onClickHandler = () => {
  //   setModalState({
  //     isOpen: true,
  //     contents: <div>modal contents</div>,
  //     useReqClose: true,
  //     size: MODAL_SIZE.LARGE,
  //   });
  // };

  const { openModal } = useModal();
  const onClickHandler = () => {
    openModal({
      contents: (
        <div style={{ width: '100%', height: '1000px', backgroundColor: 'pink' }}>
          modal contents
        </div>
      ),
      useReqClose: true,
      size: MODAL_SIZE.LARGE,
      button: [
        {
          label: '확인',
          onClick: () => console.log('click'),
        },
        {
          label: '확인',
          onClick: () => console.log('click'),
        },
        {
          label: '확인',
          onClick: () => console.log('click'),
        },
      ],
    });
  };

  return <button onClick={onClickHandler}>modal open</button>;
}

const ModalTestStyled = styled.div``;
