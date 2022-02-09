import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useState } from 'react';
import { cssx } from '@src/theme';
import { IPagenationProps } from './pagenation_types';
import { usePagenation } from '.';
import { Select, SELECT_SIZE, ISelectOptionItems } from '../select';

export function Pagenation({ totalTables }: IPagenationProps) {
  const [tableMount, setTableMount] = useState(100);
  const {
    curPage,
    pageRange,
    selectData,
    handleToFirstPage,
    handleToLastPage,
    handleToNextPage,
    handleToPrevPage,
    handleToPageIndex,
  } = usePagenation({ totalTables, tablesPerPage: tableMount });

  const onChangeTableMount = (option: ISelectOptionItems) => {
    const mount = +option.value;
    setTableMount(mount);
  };

  return (
    <Container>
      <PagenationWrapper>
        <LeftBox>
          <ToFirstPage onClick={handleToFirstPage}>{'<<'}</ToFirstPage>
          <ToPrevPage onClick={handleToPrevPage}>{'<'}</ToPrevPage>
        </LeftBox>
        <CenterBox>
          {pageRange.map(
            (page) =>
              page && (
                <PageIndex
                  key={page.toString()}
                  selected={page === curPage}
                  onClick={() => handleToPageIndex(page)}
                >
                  {page}
                </PageIndex>
              ),
          )}
        </CenterBox>
        <RightBox>
          <ToNextPage onClick={handleToNextPage}>{'>'}</ToNextPage>
          <ToLastPage onClick={handleToLastPage}>{'>>'}</ToLastPage>
        </RightBox>
      </PagenationWrapper>
      <TablesPerPage>
        <Select
          size={SELECT_SIZE.SMALL}
          disabled={false}
          options={selectData}
          onChange={onChangeTableMount}
          placeholder="100/page"
        />
      </TablesPerPage>
    </Container>
  );
}

const Container = styled.div`
  ${cssx.flexCenter}
  flex-direction: row;
  width: 100%;
  padding: 20px;
  cursor: default;
`;

const PagenationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  > div > div {
    ${cssx.flexCenter}
    background: palegoldenrod;
  }
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 38px;
`;
const CenterBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 28px;
`;
const PageIndex = styled.div<{ selected: boolean }>`
  width: 32px;
  height: 32px;
  margin: 6px 8px;
  ${(props) => {
    return (
      props.selected &&
      css`
        border: 1px solid red !important;
      `
    );
  }}
`;
const RightBox = styled.div`
  width: 38px;
  display: flex;
  flex-direction: row;
`;
const ToFirstPage = styled.div``;
const ToLastPage = styled.div``;
const ToPrevPage = styled.div``;
const ToNextPage = styled.div``;
const TablesPerPage = styled.div``;
