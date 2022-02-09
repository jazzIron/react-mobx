import styled from '@emotion/styled';
import { FormItem } from '@src/components/form/FormItem';
import { IFormField } from '@src/components/form/form_types';
import { useFormHooks } from '@src/components/form/useFormHooks';
import { Button, BUTTON_SIZE } from '@src/components/button';
import { useLogin } from '@features/login/useLogin';
import { InputForm } from '../../components/input/InputForm';
import { INPUT_TYPE } from '@src/components/input/InputForm_types';
import { useEffect } from 'react';
import { Control } from 'react-hook-form';
import { formOption } from '@src/components/form/form.data';

export function LoginForm() {
  const { loginState, handleLogin } = useLogin();

  // const { control, handleSubmit, getValues, watch, isValid } = useFormHooks(formOption);
  const { reset, watch, setFormItem, isValid, render, onSubmit } = useFormHooks(formOption);

  const onSubmitHandler = () => {
    if (!isValid) return false;
    const { id, pwd } = watch();
    return handleLogin();
  };

  const formItem = (
    <>
      <FormItem
        name="id"
        onItemState={(e: unknown) => console.log(e)}
        render={({ value, onChange, renderState }: IFormField) => (
          <InputForm
            inputValue={value}
            renderState={renderState}
            prefixIcon={'icn_person'}
            onChange={onChange}
          />
        )}
      />
      <FormItem
        name="pwd"
        render={({ value, onChange, renderState }: IFormField) => (
          <InputForm
            type={INPUT_TYPE.PW}
            inputValue={value}
            renderState={renderState}
            prefixIcon={'icn_person'}
            onChange={onChange}
          />
        )}
      />
      <Button onClick={handleLogin} label={'로그인'} size={BUTTON_SIZE.MEDIUM} />
    </>
  );

  useEffect(() => {
    setFormItem(formItem);
  }, []);

  return (
    <LoginFormWrapper>
      {render}
      {/* <Form handleSubmit={() => handleSubmit(onSubmit)}>
        <FormItem
          option={formOption[0]}
          control={control}
          onItemState={(e: unknown) => console.log(e)}
          render={({ value, onChange, renderState }: IFormField) => (
            <InputForm
              inputValue={value}
              renderState={renderState}
              prefixIcon={'icn_person'}
              onChange={onChange}
            />
          )}
        />
        <FormItem
          option={formOption[1]}
          control={control}
          render={({ value, onChange, renderState }: IFormField) => (
            <InputForm
              type={INPUT_TYPE.PW}
              inputValue={value}
              renderState={renderState}
              prefixIcon={'icn_person'}
              onChange={onChange}
            />
          )}
        />
      </Form>
      <Button onClick={handleLogin} label={'로그인'} size={BUTTON_SIZE.MEDIUM} /> */}
    </LoginFormWrapper>
  );
}

const LoginFormWrapper = styled.div``;
