import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';
import { canNext, takeSnapshot } from '@src/store/checkBoxState';
import CheckBox from './MasterCheckBox';
/*
:TODO
1.필수 체크박스 모두 클릭시, 전역 상태 canNext 변화 */

describe('checkBox component', () => {
  const masterContents = '마스터 체크박스';
  const requiredContents = ['필수1', '필수2'];
  const optionalContents = ['선택1', '선택2'];
  const checkboxComponent = (
    <RecoilRoot>
      <CheckBox
        masterContents={masterContents}
        requiredContents={requiredContents}
        optionalContents={optionalContents}
      />
    </RecoilRoot>
  );

  beforeEach(() => {
    render(checkboxComponent);
  });

  it('inits canNext', () => {
    const testSnapshot = takeSnapshot();
    expect(testSnapshot.getLoadable(canNext).valueOrThrow()).toBeFalsy();
  });

  // it('필수 체크박스 모두 클릭시, 전역 상태 canNext 변화', () => {
  //   const masterCheckbox = screen.getAllByTestId('checkboxInput')[0];
  //   userEvent.click(masterCheckbox);

  //   const testSnapshot = takeSnapshot();
  //   expect(testSnapshot.getLoadable(canNext).valueOrThrow()).toBeTruthy();
  // });
});
