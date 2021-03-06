import { createElement, FormEvent, useEffect, useRef, useState } from 'react';
import { useForm, Control, MultipleFieldErrors } from 'react-hook-form';
import { IFormOption } from '@src/components/form/form_types';
import { isArray } from 'lodash';

function defaultValueParsing(option: IFormOption[]) {
  let result: { [key: string]: string } = {};
  option.forEach((opt) => {
    const temp = { [opt.name]: opt.defaultValue };
    result = { ...result, ...temp };
  });

  return result;
}

export function useFormHooks(option: IFormOption[], mode?: 'onChange' | 'onSubmit') {
  const formRef = useRef<HTMLFormElement>(null);
  const formDefaultValue = defaultValueParsing(option);
  const { control, reset, handleSubmit, watch, formState } = useForm({
    mode: mode ? mode : 'onSubmit', //버튼 쓸거면 onSubmit 으로, 아니면 onChange
    reValidateMode: mode ? mode : 'onSubmit',
    defaultValues: formDefaultValue,
    shouldFocusError: true,
  });

  const [refresh, setRefresh] = useState(0);
  const [childJSX, setChildJSX] = useState<JSX.Element | null>(null);

  // const setItemError = (name: string, types: MultipleFieldErrors) => {
  //   setError('hospital', {
  //     types: {
  //       required: 'this is reqruied',
  //     },
  //   });
  // };

  //FormItem jsx 받기
  const setFormItem = (value: JSX.Element) => {
    // const setFormItem = (value: (control: Control) => JSX.Element) => {
    // const formItemJsx = value(control);
    const children = value.props.children;

    const data = isArray(children)
      ? children.map((child, idx) => {
          const itemOption = option.filter((obj) => {
            return obj.name === child.props.name;
          })[0];

          return createElement(child.type, {
            ...{
              ...child.props,
              key: idx,
              option: itemOption,
              control: control,
            },
          });
        })
      : children;

    // setChildJSX(children);
    setChildJSX({ ...value, props: { children: data } });
  };

  //form state 파싱 =========== 여기 해야됨
  const onFormState = (data: unknown, isValid: unknown) => {
    return { data, isValid };
  };

  //submit button click
  const onSubmit = () => {
    setRefresh((prev) => prev + 1);
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  //form submit event
  const onSubmitHandler = (e: FormEvent) => {
    handleSubmit((event) => onFormState(event, formState.isValid))(e).catch((event) =>
      console.log('catch', event),
    );
    // .finally(() => setRefresh((prev) => prev + 1));

    e.preventDefault();
  };

  const formItem = option.map((obj, idx) => {
    return null;
  });

  //FormItem jsx가 있으면 render
  const render = childJSX ? (
    <form ref={formRef} onSubmit={onSubmitHandler}>
      {childJSX}
    </form>
  ) : null;

  // console.group("formState");
  // console.log("isDirty", formState.isDirty); //사용자가 한번이라도 입력했으면 true
  // console.log("isSubmitted", formState.isSubmitted); //양식이 제출되었으면 true
  // // console.log("isSubmitSuccessful", formState.isSubmitSuccessful); //양식이 거부없이 성공적으로 제출되었거나 콜백 내에서 처리되었음.
  // // console.log("submitCount", formState.submitCount); //제출된 횟수
  // // console.log("isSubmitting", formState.isSubmitting); //양식이 현제 제출 중이면 true
  // console.log("isValid", formState.isValid); //양식에 오류가 없으면 true
  // console.log("isValidating", formState.isValidating); //유효성 검사 중이면 true
  // console.log("errors", formState.errors);
  console.log('watch', watch());
  // console.groupEnd();

  return {
    reset,
    watch,
    setFormItem,
    onSubmit,
    isValid: formState.isValid,
    render,
  };
}
