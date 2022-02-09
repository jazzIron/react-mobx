export interface IPagenationProps {
  totalTables: number;
  tablesPerPage: number;
}

export enum TABLES_PER_PAGE {
  HUNDRED = '100/page',
  FITTY = '50/page',
  THIRTY = '30/page',
  TEN = '10/page',
}
