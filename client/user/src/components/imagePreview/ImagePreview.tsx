import styled from '@emotion/styled';
import { isEmpty } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { Icon } from '../icon/Icon';
import { ICON_LIST } from '../icon/icon.data';
import { Image } from '../image';
import { IImagePreview } from './ImagePreview_types';

export function ImagePreview({ id, defaultImage, onChange, disabled }: IImagePreview) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(
    isEmpty(defaultImage) ? null : defaultImage,
  );

  const handleFileOnChange = () => {
    if (onChange && !disabled) {
      if (fileInputRef.current) {
        const reader = new FileReader();
        const getFile = fileInputRef.current.files;
        if (getFile) {
          reader.onloadend = () => {
            setPreviewURL(reader.result as string);
          };
          if (onChange) {
            onChange({ id, file: getFile[0] });
          }
          reader.readAsDataURL(getFile[0]);
        }
      }
    }
  };

  const onFileReset = () => {
    if (onChange) onChange({ id, file: null });
    onInputClear();
    setPreviewURL(null);
  };

  const onInputClear = () => {
    if (fileInputRef.current) {
      fileInputRef.current.files = null;
      fileInputRef.current.value = '';
    }
  };

  useEffect(() => {
    return () => {
      onFileReset();
    };
  }, []);

  const imagePreview = previewURL ? (
    <PreviewStyled>
      <Image image={previewURL as string} />
      {!disabled && (
        <BtnClose onClick={onFileReset}>
          <Icon icon={ICON_LIST.x_input} width="30px" />
        </BtnClose>
      )}
    </PreviewStyled>
  ) : (
    <BtnAdd>
      <Icon icon={ICON_LIST.plus} width="30px" />
    </BtnAdd>
  );

  return (
    <ImagePreviewWrapper>
      <input
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        name={`upload_${id}`}
        onChange={handleFileOnChange}
        onClick={onInputClear}
        disabled={disabled}
        ref={fileInputRef}
      />
      <ImagePreWrapper>{imagePreview}</ImagePreWrapper>
    </ImagePreviewWrapper>
  );
}

ImagePreview.defaultProps = {
  disabled: false,
};

const ImagePreviewWrapper = styled.div`
  position: relative;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  input[type='file'] {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0001;
    & + div {
      height: 100%;
    }
  }
`;

const ImagePreWrapper = styled.div``;
const PreviewStyled = styled.div`
  div {
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const BtnClose = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
`;
const BtnAdd = styled.button`
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
