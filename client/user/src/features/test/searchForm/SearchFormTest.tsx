import styled from '@emotion/styled';
import { Button } from '@src/components/button';
import { FormItem } from '@src/components/form/FormItem';
import { IFormField } from '@src/components/form/form_types';
import { useFormHooks } from '@src/components/form/useFormHooks';
import { InputForm } from '@src/components/input';
import Input from '@src/components/input/Input';
import { ISelectOptionItems, Select } from '@src/components/select';
import { useEffect } from 'react';
import { searchFormOption, selectDoctorLank } from './searchFormTest.data';

export function SearchFormTest() {
  const { reset, watch, setFormItem, isValid, render, onSubmit } = useFormHooks(searchFormOption);

  const onClickHandler = () => {
    onSubmit();
  };

  const item = (
    <>
      <FormItem
        name="hospital"
        // onItemState={(e: any) => console.log(e)}
        render={({ value, onChange }: IFormField) => (
          <>
            <label>병원</label>
            <InputForm inputValue={value} onChange={onChange} />
          </>
        )}
      />

      <FormItem
        name="id"
        // onItemState={(e: any) => console.log(e)}
        render={({ value, onChange }: IFormField) => (
          <>
            <label>ID</label>
            <InputForm
              inputValue={value}
              onChange={(e) => {
                onChange(e);
              }}
            />
          </>
        )}
      />

      <FormItem
        name="rank"
        // onItemState={(e: any) => console.log(e)}
        render={({ value, onChange }: IFormField) => {
          const onChangeHandler = (changeValue: ISelectOptionItems) => {
            onChange(changeValue.value);
          };

          return (
            <>
              <label>직급</label>
              <Select onChange={onChangeHandler} defaultValue={value} options={selectDoctorLank} />
            </>
          );
        }}
      />

      <Button label="submit" onClick={onClickHandler} />
    </>
  );

  useEffect(() => {
    setFormItem(item);
  }, []);

  return <div style={{ border: '1px solid red' }}>{render}</div>;
}

const SearchFormTestStyled = styled.div``;
