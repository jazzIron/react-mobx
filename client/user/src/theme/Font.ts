import { css, SerializedStyles } from '@emotion/react';

export const fonts: { [key: string]: SerializedStyles } = {
  h0_b: css`
    font-family: 'GothicBold';
    font-size: 20px;
    line-height: 28px;
  `,
  h0: css`
    font-family: 'Gothic';
    font-size: 20px;
    line-height: 28px;
  `,
  h1_b: css`
    font-family: 'GothicBold';
    font-size: 16px;
    line-height: 24px;
  `,
  h1: css`
    font-family: 'Gothic';
    font-size: 16px;
    line-height: 24px;
  `,
  body_01_b: css`
    font-family: 'GothicBold';
    font-size: 14px;
    line-height: 22px;
  `,
  body_01: css`
    font-family: 'Gothic';
    font-size: 14px;
    line-height: 22px;
  `,
  body_02_b: css`
    font-family: 'GothicBold';
    font-size: 12px;
    line-height: 20px;
  `,
  body_02: css`
    font-family: 'Gothic';
    font-size: 12px;
    line-height: 20px;
  `,
  p1: css`
    font-family: 'Gothic';
    font-size: 10px;
    line-height: 18px;
  `,
};

export type IFont = keyof typeof fonts;
