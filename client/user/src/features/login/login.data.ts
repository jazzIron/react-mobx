import { IFormOption } from '@src/components/form/form_types';
import { verifyPassword } from '@src/utils';

export const formOption: IFormOption[] = [
  {
    name: 'id',
    defaultValue: '',
    isRequired: true,
    rules: { minLength: 6, maxLength: 10 },
    message: {
      success: '맞음',
      error: {
        validate: 'validate error',
      },
    },
  },
  {
    name: 'pwd',
    defaultValue: '',
    isRequired: true,
    rules: { validate: (prev) => verifyPassword(prev) },
    // rules: { validate: () => verifyPassword(getValues('pwd')) },
    message: {
      success: '맞음',
      error: {
        validate: 'validate error',
      },
    },
  },
];
