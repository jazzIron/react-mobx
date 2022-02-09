import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { PagenationState } from '@src/store/pagenationState';
import { IPagenationProps } from './pagenation_types';

export function usePagenation({ totalTables, tablesPerPage }: IPagenationProps) {
  const [curPage, setCurPage] = useRecoilState(PagenationState);
  const [pageRange, setPageRange] = useState<number[] | undefined[]>([]);

  const totalPages = Math.ceil(totalTables / tablesPerPage);
  //현재 표시되는 쪽수 범위의 시작페이지를 계산하는 함수
  const RangeStart = (currentPage: number, totalPage: number): number => {
    if (totalPage <= 10 || currentPage < 6) {
      return 1;
    }
    if (totalPage - currentPage >= 5) {
      return currentPage - 4;
    }
    return totalPage - 9;
  };

  //현재페이지 업데이트에 따라 페이지네이션에 표시되는 쪽수 범위 업데이트, 범위 최대 길이는 10
  const currentRange = () => {
    const pages = [];
    const rangeStart = RangeStart(curPage, totalPages);
    const rangeEnd = totalPages >= 10 ? 10 : totalPages;
    for (let i = 0; i < rangeEnd; i++) {
      pages.push(i + rangeStart);
    }
    return pages;
  };

  useEffect(() => {
    setPageRange(currentRange());
  }, [curPage, totalPages]);

  const handleToFirstPage = () => {
    setCurPage(1);
  };
  const handleToPrevPage = () => {
    if (curPage > 1) {
      setCurPage(curPage - 1);
    }
  };
  const handleToNextPage = () => {
    if (curPage < totalPages) {
      setCurPage(curPage + 1);
    }
  };
  const handleToLastPage = () => {
    setCurPage(totalPages);
  };
  const handleToPageIndex = (page: number) => {
    setCurPage(page);
  };

  const selectData = [
    { id: '100', label: '100/page', disabled: false, value: '100' },
    { id: '50', label: '50/page', disabled: false, value: '50' },
    { id: '30', label: '30/page', disabled: false, value: '30' },
    { id: '10', label: '10/page', disabled: false, value: '10' },
  ];
  return {
    curPage,
    pageRange,
    totalPages,
    handleToFirstPage,
    handleToLastPage,
    handleToNextPage,
    handleToPrevPage,
    handleToPageIndex,
    selectData,
  };
}
