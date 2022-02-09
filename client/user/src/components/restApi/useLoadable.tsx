import { RecoilState, useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';

interface ILoadable {
  query: unknown;
  init: unknown;
  params: unknown;
  refresh: unknown;
}

export function useLoadableRefresh<T>({ query, init, params, refresh }: ILoadable) {
  const loadableResult = useRecoilValueLoadable(query as RecoilState<T>);
  const [param, setParams] = useRecoilState(params as RecoilState<typeof params>);
  const setRefreshParams = useSetRecoilState(refresh as RecoilState<number>);
  const [result, setResult] = useState<T>(init as T);

  useEffect(() => {
    if (loadableResult.state === 'hasValue') {
      setResult(loadableResult.contents);
    }
  }, [loadableResult]);

  const handleParams = (values: any) => {
    if (isEqual(param, values) && refresh) {
      setRefreshParams((prevState) => prevState + 1);
    } else {
      setParams(values);
    }
  };

  return {
    handleParams: (param: typeof params) => handleParams(param),
    result,
    isLoading: loadableResult.state === 'loading',
    isError: loadableResult.state === 'hasError',
  };
}

export function useLoadable<T>({ query, init, params }: Omit<ILoadable, 'refresh'>) {
  const [param, setParams] = useRecoilState(params as RecoilState<typeof params>);
  const loadableResult = useRecoilValueLoadable(query as RecoilState<T>);
  const [result, setResult] = useState<T>(init as T);

  useEffect(() => {
    if (loadableResult.state === 'hasValue') {
      setResult(loadableResult.contents);
    }
  }, [loadableResult]);

  const handleParams = (values: unknown) => {
    if (isEqual(param, values)) {
      setParams(values);
    }
  };

  return {
    handleParams: (param: typeof params) => handleParams(param),
    result,
    isLoading: loadableResult.state === 'loading',
    isError: loadableResult.state === 'hasError',
  };
}

export function useLoadableDefault<T>({ query, init }: Omit<ILoadable, 'refresh' | 'params'>) {
  const loadableResult = useRecoilValueLoadable(query as RecoilState<T>);
  const [result, setResult] = useState<T>(init as T);
  useEffect(() => {
    if (loadableResult.state === 'hasValue') {
      setResult(loadableResult.contents);
    }
  }, [loadableResult]);

  return {
    result,
    isLoading: loadableResult.state === 'loading',
    isError: loadableResult.state === 'hasError',
  };
}

// #########################################################################################################

// parameter, refresh를 optional로?
//selectFamily에 파라미터 직접 입력.
// -> 캐싱 되는지 확인

// interface ILoadable {
//   query: unknown;
//   init: unknown;
//   refresh: boolean;
// }

// export function useLoadable<T>({ query, init, refresh }: ILoadable) {
//   const loadableResult = useRecoilValueLoadable(query as RecoilState<T>);
//   const setRefreshParams = useSetRecoilState(RefreshParamsState);
//   const setState = useSetRecoilState(query as RecoilState<T>);
//   const [result, setResult] = useState<T>(init as T);

//   const [paramState, setParamState] = useState('param test');

//   useEffect(() => {
//     if (loadableResult.state === 'hasValue') {
//       setResult(loadableResult.contents);
//     }
//   }, [loadableResult]);

//   const handleParams = (values: any) => {
//     console.log('paramvalue', values);
//     if (refresh) {
//       setRefreshParams((prevState) => prevState + 1);
//     } else {
//       setState(values);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       setRefreshParams(0);
//     };
//   }, []);

//   return {
//     handleParams,
//     result,
//     isLoading: loadableResult.state === 'loading',
//     isError: loadableResult.state === 'hasError',
//   };
// }
