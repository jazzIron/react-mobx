import { IFormOption } from '@src/components/form/form_types';
import { verifyEmail } from '@src/utils';

export const searchFormOption: IFormOption[] = [
  {
    name: 'hospital',
    defaultValue: '부민병원',
    isRequired: true,
    rules: { minLength: 1 },
    message: {
      success: '맞음',
      error: {
        required: 'this is required',
        validate: 'validate error',
      },
    },
  },
  {
    name: 'id',
    defaultValue: '',
    isRequired: true,
    rules: { validate: (value) => verifyEmail(value) },
    message: {
      success: '맞음',
      error: {
        required: 'this is required',
        validate: 'validate error',
      },
    },
  },
  {
    name: 'rank',
    defaultValue: '0',
    isRequired: true,
    rules: {},
    message: {},
  },
];

export const selectDoctorLank = [
  {
    id: '1',
    label: '병원장',
    disabled: false,
    value: '0',
  },
  {
    id: '2',
    label: '과장',
    disabled: false,
    value: '1',
  },
];
