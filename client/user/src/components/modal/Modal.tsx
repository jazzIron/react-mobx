//https://velog.io/@seungsang00/React-React-Modal

import styled from '@emotion/styled';
import { ModalState, MODAL_SIZE } from '@src/store/modalState';
import { AiOutlineClose } from 'react-icons/ai';

import ReactModal from 'react-modal';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { Button } from '../button';

export function Modal() {
  const modalState = useRecoilValue(ModalState);
  const resetModalState = useResetRecoilState(ModalState);
  const { isOpen, contents, useReqClose, size } = modalState;

  const setModalClose = () => {
    if (useReqClose) resetModalState();
  };

  const modalSize = modalState.sizeCustom
    ? {
        width: modalState.sizeCustom.width,
        height: modalState.sizeCustom.height,
      }
    : modalSizeStyles[size];
  const customStyles = {
    ...customStyle,
    content: { ...customStyle.content, ...modalSize },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={setModalClose}
      style={customStyles}
      appElement={document.getElementById('root') || undefined}
    >
      <ModalHeadStyled>
        <span>헤더</span>
        <span>
          <AiOutlineClose onClick={setModalClose} />
        </span>
      </ModalHeadStyled>
      <PopModalStyled>
        <ContentsWrapper>{contents}</ContentsWrapper>
      </PopModalStyled>
    </ReactModal>
  );
}

const borderColor = '#e9e9e9';

const PopModalStyled = styled.div`
  width: 100%;
  height: calc(100% - 43px);
  overflow-y: auto;
  text-align: center;
`;

const ContentsWrapper = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

const ModalHeadStyled = styled.div`
  border-bottom: 1px solid ${borderColor};
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const customStyle: ReactModal.Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#d6d6d6f6',
  },
  content: {
    position: 'absolute',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '10px',
    outline: 'none',
    margin: 'auto',
    padding: 0,
  },
};

const modalSizeStyles = {
  [MODAL_SIZE.ALERT]: { width: '350px', height: '250px' },
  [MODAL_SIZE.SMALL]: { width: '50%', height: '50%' },
  [MODAL_SIZE.LEGULAR]: { width: '60%', height: '80%' },
  [MODAL_SIZE.LARGE]: { width: '80%', height: '90%' },
};
