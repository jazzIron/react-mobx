import styled from '@emotion/styled';
import { RefreshParamsState, restApiParamState, restRestState } from '@src/store/test/restApiTest';
import { useLoadableRefresh } from './useLoadable';

export function RestApi() {
  //   const restState = useRecoilValue(restRestState);
  //   const restState = useLoadableTest();
  const { handleParams, result, isLoading, isError } = useLoadableRefresh({
    query: restRestState,
    init: null,
    params: restApiParamState,
    refresh: RefreshParamsState,
  });

  const handle = () => {
    handleParams((prev: any) => {
      return Number(prev) + 1;
    });
  };

  // console.log(handleParams.prev());

  return (
    <div>
      <RestApiStyled>
        ### param <br />
        <button onClick={handle}>button</button>
      </RestApiStyled>
      <RestApiStyled>
        ### isLoading <br />
        {JSON.stringify(isLoading)}
      </RestApiStyled>
      <RestApiStyled>
        ### isError <br />
        {JSON.stringify(isError)}
      </RestApiStyled>
      <RestApiStyled>
        ### result <br />
        {JSON.stringify(result)}
      </RestApiStyled>
    </div>
  );
}

const RestApiStyled = styled.div`
  padding: 10px;
`;
