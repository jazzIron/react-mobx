import axiosClient from '@src/api/Instance';
import { atom, selector, selectorFamily, SerializableParam } from 'recoil';

export const restApiParamState = atom({
  key: 'restApiParamState',
  default: '0',
});

export const RefreshParamsState = atom({
  key: 'RefreshParams',
  default: 0,
});

export const restRestState = selector({
  key: 'restRestState',
  get: ({ get }) => {
    const param = get(restApiParamState);
    const refresh = get(RefreshParamsState);

    const apiResponse = restInstance();
    return apiResponse;
  },
});

const restInstance = async () => {
  try {
    const url = 'https://www.ag-grid.com/example-assets/olympic-winners.json';
    const res = await axiosClient.get(url);
    // console.log(res.data);
    return res;
  } catch (error) {
    console.log('error', error);

    return 'error';
  }
};

// ##################################################################################

// export const restTestState = selectorFamily<any, { [key: string]: SerializableParam }>({
//   key: 'restTestState',
//   get:
//     (param) =>
//     async ({ get }) => {
//       console.log('get selectorfamily');
//       const param = get(restApiParamState);
//       // const refresh = get(RefreshParamsState);

//       console.log('getparam', param);

//       const apiResponse = await restInstance();
//       if (apiResponse === 'error') {
//         throw apiResponse;
//       }

//       console.log(apiResponse);
//       return {
//         paramState: param,
//         respose: apiResponse,
//       };
//     },
//   set:
//     (field) =>
//     ({ set }, newValue) => {
//       const param = {};
//       Object.keys(field).forEach((key, value) => {
//         console.log(key, value);
//       });

//       set(restApiParamState, (prevState) => ({ ...prevState, ...newValue }));
//     },
// });

// ##################################################################################
