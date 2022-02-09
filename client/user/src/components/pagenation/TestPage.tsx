import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { PagenationState } from '@src/store/pagenationState';
import { Pagenation } from '.';
import { IPagenationProps } from './pagenation_types';

const makeBulkItems = (mount: number, curPage: number, lastItem: number) => {
  const array = [];
  const numberingStart = 1 + mount * (curPage - 1);
  const numberingLast = mount * curPage <= lastItem ? mount * curPage : lastItem;
  for (let i = numberingStart; i <= numberingLast; i++) {
    array.push({ id: i, text: ` item${i}` });
  }
  return array;
};
interface IBulkItem {
  id: number;
  text: string;
}

export const TestPage = ({ totalTables, tablesPerPage }: IPagenationProps) => {
  const curPage = useRecoilValue(PagenationState);
  const [items, setItems] = useState<IBulkItem[] | undefined[]>([]);

  useEffect(() => {
    /* 
:TODO
API : 전체 테이블 개수, 페이지 별 테이블 목록 가져오기
*/
    setItems(makeBulkItems(tablesPerPage, curPage, totalTables));
  }, [curPage, tablesPerPage]);

  return (
    <Wrapper>
      <List>{items.map((item) => item && <Item key={item.id}>{item.text}</Item>)}</List>
      <Pagenation totalTables={totalTables} tablesPerPage={tablesPerPage} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const List = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Item = styled.div`
  width: 200px;
  height: 25px;
  background: palegoldenrod;
  margin: 3px;
`;
