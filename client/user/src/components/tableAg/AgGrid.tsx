import styled from '@emotion/styled';
import { AgGridReact } from 'ag-grid-react';
import { IAgGrid } from './TableAg_types';
import './TableAg.scss';
import { FirstDataRenderedEvent } from 'ag-grid-community';

const onFirstDataRendered = (params: FirstDataRenderedEvent) => {
  params.api.sizeColumnsToFit();
};

export function AgGrid({
  className,
  getRowStyle,
  onGridReady,
  rowData,
  defaultColDef,
  rowClassRules,
  rowSelection,
  rowDragManaged,
  suppressMoveWhenRowDragging,
  suppressAutoSize,
  suppressRowHoverHighlight,
  suppressRowTransform,
  columnHoverHighlight,
  animateRows,
  frameworkComponents,
  pagination,
  paginationAutoPageSize,
  children,
}: IAgGrid) {
  return (
    <AgGridStyled className={className}>
      <AgGridReact
        groupHeaderHeight={50} // default 75
        headerHeight={50} //default 150
        getRowStyle={getRowStyle}
        onGridReady={onGridReady}
        rowData={rowData}
        defaultColDef={defaultColDef}
        rowClassRules={rowClassRules}
        rowSelection={rowSelection}
        rowDragManaged={rowDragManaged}
        suppressMoveWhenRowDragging={suppressMoveWhenRowDragging}
        suppressAutoSize={suppressAutoSize}
        suppressRowHoverHighlight={suppressRowHoverHighlight}
        suppressRowTransform={suppressRowTransform}
        columnHoverHighlight={columnHoverHighlight}
        animateRows={animateRows}
        frameworkComponents={frameworkComponents}
        pagination={pagination}
        paginationAutoPageSize={paginationAutoPageSize}
        onFirstDataRendered={onFirstDataRendered}
      >
        {children}
      </AgGridReact>
    </AgGridStyled>
  );
}

AgGrid.defaultProps = {
  className: 'ag-theme-alpine',
  getRowStyle: null,
  defaultColDef: {
    sortable: false,
    resizable: true,
  },
  rowClassRules: null,
  rowSelection: 'single',
  rowDragManaged: false,
  suppressMoveWhenRowDragging: false,
  suppressAutoSize: false,
  suppressRowHoverHighlight: false,
  suppressRowTransform: false,
  columnHoverHighlight: false,
  animateRows: false,
  frameworkComponents: null,
  pagination: false,
  paginationAutoPageSize: true,
};

const AgGridStyled = styled.div`
  height: 600px;
  width: 100%;
`;
