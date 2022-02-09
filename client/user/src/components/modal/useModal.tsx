import { ModalState, MODAL_SIZE } from '@src/store/modalState';
import { useEffect } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { BUTTON_THEME } from '../button';
import { IOpenModal } from './modal_types';

export function useModal() {
  const setModalState = useSetRecoilState(ModalState);
  const resetState = useResetRecoilState(ModalState);

  const openModal = ({ contents, useReqClose, size, sizeCustom, button }: IOpenModal) => {
    const buttonFormat = button
      ? button.map((opt, idx) => ({
          ...opt,
          disable: opt.disable ? opt.disable : false,
          theme: opt.theme ? opt.theme : BUTTON_THEME.PRIAMRY,
        }))
      : button;

    setModalState({
      isOpen: true,
      contents: contents,
      useReqClose: useReqClose ? useReqClose : false,
      size: size ? size : MODAL_SIZE.LEGULAR,
      sizeCustom: sizeCustom,
      buttons: buttonFormat,
    });
  };

  const modContents = (contents: JSX.Element) => {
    setModalState((prev) => ({ ...prev, contents: contents }));
  };

  const closeModal = () => {
    resetState();
  };

  useEffect(() => {
    return closeModal();
  }, []);

  return {
    openModal,
    modContents,
    closeModal,
  };
}
