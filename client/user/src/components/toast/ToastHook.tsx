import { toast } from 'react-toastify';
import { IToast } from './Toast_types';
import { useState } from 'react';
import { UpdateOptions } from 'react-toastify/dist/types/index';

export function ToastHook() {
  const [toastId, setToastId] = useState<string | number>();
  const DELAY = 0;
  const AUTO_CLOSE = 1000;

  // Remove all toasts !
  const toastDismiss = () => {
    return toast.dismiss();
  };

  const toastMake = ({ content, type, options }: IToast) => {
    const option = {
      containerId: options.containerId,
      autoClose: options.autoClose ? AUTO_CLOSE : options.autoClose,
      closeButton: true,
      type: type,
      position: options.position,
      closeOnClick: true,
      hideProgressBar: true,
      delay: DELAY,
      draggable: false,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      style: options.style,
      onClick: options.onClick,
      onOpen: options.onOpen,
      onClose: options.onClose,
    };
    const id = toast(content, option);
    return setToastId(id);
  };

  // Check if a toast is displayed or not
  const toastActiveCheck = (toastId: number | string) => {
    return toast.isActive(toastId);
  };

  // update a toast
  const toastUpdate = (toastId: number | string, options: UpdateOptions) => {
    toast.update(toastId, options);
  };

  return {
    toast,
    toastId,
    toastDismiss,
    toastMake,
    toastActiveCheck,
    toastUpdate,
  };
}
