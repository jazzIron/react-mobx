import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import CheckBox from './CheckBox';
import { IMasterCheckBox } from './checkBox_types';
import useCheckBox from './useCheckBox';

export default function MasterCheckBox({
  masterLabel,
  options,
  onClickIcon,
  setBtnDisable,
  suffixIcon,
}: IMasterCheckBox) {
  const { masterChecked, list, handleMasterCheck, handleRegularCheck, canNext } =
    useCheckBox(options);
  const requiredList = list.filter((item) => item.isRequired);
  const optionalList = list.filter((item) => !item.isRequired);

  console.log(requiredList);
  console.log(canNext);
  useEffect(() => {
    setBtnDisable(!canNext);
  }, [canNext]);

  return (
    <CheckBoxWrapper>
      <MasterCheckBoxWrapper>
        <CheckBox
          id={'master'}
          value={masterLabel}
          onClick={handleMasterCheck}
          isChecked={masterChecked}
          disabled={false}
        />
      </MasterCheckBoxWrapper>
      <hr />
      <RequiredCheckBoxWrapper>
        {requiredList.map((item) => (
          <CheckBox
            id={item.id}
            key={item.id.toString()}
            value={`${item.label} (필수)`}
            onClick={() => handleRegularCheck(item.id)}
            isChecked={item.isChecked}
            onClickSuffix={onClickIcon}
            suffixIcon={suffixIcon}
            disabled={false}
          />
        ))}
      </RequiredCheckBoxWrapper>
      <OptionalCheckBoxWrapper>
        {optionalList.map((item) => (
          <CheckBox
            id={item.id}
            key={item.id}
            value={`${item.label} (선택)`}
            onClick={() => handleRegularCheck(item.id)}
            isChecked={item.isChecked}
            onClickSuffix={onClickIcon}
            suffixIcon={suffixIcon}
            disabled={false}
          />
        ))}
      </OptionalCheckBoxWrapper>
    </CheckBoxWrapper>
  );
}

const CheckBoxWrapper = styled.div``;
const MasterCheckBoxWrapper = styled.div`
  margin-bottom: 20px;
`;
const RequiredCheckBoxWrapper = styled.div`
  margin-bottom: 30px;
`;
const OptionalCheckBoxWrapper = styled.div``;
