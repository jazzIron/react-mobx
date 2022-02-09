import { formOption } from './form.data';
import { useFormHooks } from './useFormHooks';
import { Control } from 'react-hook-form';
import { useEffect, useMemo } from 'react';
import { Button } from '../button';
import { FormItem } from './FormItem';
import { IFormField } from '@src/components/form/form_types';
import Input from '../input/Input';

export function FormTest() {
  const { reset, watch, setFormItem, isValid, render, onSubmit } = useFormHooks(formOption);

  const onClickHandler = () => {
    onSubmit();
  };

  const item = (
    <>
      <FormItem
        name="text1"
        // onItemState={(e: any) => console.log(e)}
        render={({ value, onChange }: IFormField) => <Input value={value} onChange={onChange} />}
      />

      <FormItem
        name="text2"
        // onItemState={(e: any) => console.log(e)}
        render={({ value, onChange }: IFormField) => <Input value={value} onChange={onChange} />}
      />

      <Button label="submit" onClick={onClickHandler} />
    </>
  );

  useEffect(() => {
    setFormItem(item);
  }, []);

  return render;
}
