import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Inject, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import * as _ from 'lodash';
import { DraggableDirective } from './directives/draggable.directive';
import { GridColumnDirective } from './directives/grid-column.directive';
import { RowExpandableTemplateDirective } from './directives/row-expandable-template.directive';
import { RowExpandableDirective } from './directives/row-expandable.directive';
import { FsrDataGridService } from './fsr-data-grid.service';
import { GridColumnComponent } from './grid-column/grid-column.component';
import { FsrColumnDef } from './interfaces/fsr-column';
import { FsrGridOptions } from './interfaces/fsr-grid-option';
import { columnDragEvent, columnReorderEvent, columnVisibilityEvent, filterChangedEvent, fsrColumnResizeEvent, onGridReadyEvent, onRowClickEvent, rowExpandableEvent, rowSelectionChangedEvent, selectAllRowsChangeEvent, sortChangedEvent } from './interfaces/grid-events';
const checkboxSelectionWidth = 30;
const rowExpandableWidth = 30;
@Component({
  selector: 'fsr-data-grid',
  templateUrl: './fsr-data-grid.component.html',
  styleUrls: ['./fsr-data-grid.scss']
})
export class FsrDataGridComponent implements OnInit, AfterViewInit {
  @Input() set ColumnDefs(defs: FsrColumnDef[]) {
    this._columnDefs = defs;
    this.setGridColumns();
  }
  @Input() set data(_data: any[]) {
    this.setGridRows(_data);
  }
  @Input() set gridOptions(gridOptions: FsrGridOptions) {
    _.extend(this._gridOptions, gridOptions);
  }


  // All output events
  @Output() onGridReady = new EventEmitter<onGridReadyEvent>();
  @Output() onRowClick = new EventEmitter<onRowClickEvent>();
  @Output() selectAllRowsChanged = new EventEmitter<selectAllRowsChangeEvent>();
  @Output() rowSelectionChanged = new EventEmitter<rowSelectionChangedEvent>();
  @Output() columnResized = new EventEmitter<fsrColumnResizeEvent>();
  @Output() columnResizeEnd = new EventEmitter<fsrColumnResizeEvent>();
  @Output() rowExpandableEvent = new EventEmitter<rowExpandableEvent>();
  @Output() filterChanged = new EventEmitter<filterChangedEvent>();
  @Output() sortChanged = new EventEmitter<sortChangedEvent>();
  @Output() columnReorder = new EventEmitter<columnReorderEvent>();

  _gridOptions: FsrGridOptions = {
    rowSelection: true,
    rowExpandable: false
  };

  _rows: any = [];
  _columnTemplates!: QueryList<GridColumnDirective>;
  _columnDefs: FsrColumnDef[] = [];
  visibleColumns: FsrColumnDef[] = [];
  element: HTMLElement;
  selectAllRows: boolean = false;
  expandAllRows: boolean = false;
  leftPinnedColumns: FsrColumnDef[] = [];
  rightPinnedColumns: FsrColumnDef[] = [];
  viewPortColumns: FsrColumnDef[] = [];
  viewPort: any = {};
  loadingData: boolean = true;
  dragEventTarget: any;
  positions:any = {};
  private draggableColumnsOrder: string[] = []

  @ContentChildren(GridColumnDirective)
  set columnTemplates(templates: QueryList<GridColumnDirective>) {
    this._columnTemplates = templates;
    this.translateToColumns(templates);
  }

  @ViewChildren(GridColumnComponent) gridColumns!: QueryList<GridColumnComponent>;

  @ContentChildren(DraggableDirective, { descendants: true })
  draggables!: QueryList<DraggableDirective>;

  @ContentChild(RowExpandableDirective) expandableDetail?: RowExpandableTemplateDirective;

  constructor(element: ElementRef, private fsrDataGridService: FsrDataGridService,  @Inject(DOCUMENT) private document: any) {
    this.element = element.nativeElement;
  }
  ngAfterViewInit(): void {
    this.calculateColumnsWidth();
  }

  ngOnInit(): void {
    this.onGridReady.emit({
      api: this
    });
  }

  private setGridRows(data: any[]) {
    this._rows = [];
    data.forEach((d: any) => {
      this._rows.push({
        data: d,
        isSelected: false,
        isExpanded: false
      });
    });
  }

  private setGridColumns() {
    this.visibleColumns = this._columnDefs.filter((column: FsrColumnDef) => {
      return column.visible;
    });

    this.calculateColumnsWidth();
  }

  private calculateColumnsWidth() {
    let viewportWidth = this.viewPort.width;
    if (this._gridOptions.rowSelection) {
      viewportWidth -= checkboxSelectionWidth;
    }
    if (this._gridOptions.rowExpandable) {
      viewportWidth -= rowExpandableWidth;
    }
    this.visibleColumns.forEach((column: FsrColumnDef) => {
      if (!column.$$width) {
        column.$$width = this._getColumnWidth(column, viewportWidth);
      }
    });
    this.separateColumnsByPin();
  }

  private separateColumnsByPin() {
    this.leftPinnedColumns = this.visibleColumns.filter((column: FsrColumnDef) => {
      return column.pinnedColumn === 'LEFT';
    });
    this.viewPortColumns = this.visibleColumns.filter((column: FsrColumnDef) => {
      return column.pinnedColumn !== 'RIGHT' && column.pinnedColumn !== 'LEFT';
    });
    if(this.draggableColumnsOrder.length === 0) {
      this.draggableColumnsOrder = this.viewPortColumns.map((col:FsrColumnDef)=> col.key);
    }
    this.orderViewportColumns();
    this.rightPinnedColumns = this.visibleColumns.filter((column: FsrColumnDef) => {
      return column.pinnedColumn === 'RIGHT';
    });

    this.calculateViewportWidth();
  }

  private orderViewportColumns() {
    this.viewPortColumns.sort((a, b) => this.draggableColumnsOrder.indexOf(a.key) - this.draggableColumnsOrder.indexOf(b.key));
  }

  private calculateViewportWidth() {
    this.viewPort = this.element.getElementsByClassName('fsr-grid-wrapper')[0].getBoundingClientRect();
  }

  private _getColumnWidth(column: FsrColumnDef, viewportWidth: number): number {
    let _defaultColWidth = viewportWidth / this.visibleColumns.length;
    let colWidth: number = _defaultColWidth;
    if (column.width) {
      if (typeof (column.width) === 'string' && column.width.indexOf('%') !== -1) {
        colWidth = viewportWidth * (parseFloat(column.width) / 100);
      } else {
        colWidth = parseInt(column.width as string);
      }
    }
    return colWidth;
  }

  private translateToColumns(templates: QueryList<GridColumnDirective>) {
    if (templates) {

    }
  }

  onWidthResize(event: any, column: FsrColumnDef) {
    column.$$width = event;
    this.columnResized.emit({
      column: column
    });
  }

  onWidthResizeEnd(event: any, column: FsrColumnDef) {
    column.$$width = event;
    this.columnResizeEnd.emit({
      column: column
    });
  }

  onRowClicked(rowData: onRowClickEvent) {
    this.onRowClick.emit(rowData);
  }

  selectAll(event: any) {
    if (this.selectAllRows) {
      this._rows.forEach((row: any) => {
        row.isSelected = true;
      });
    } else {
      this._rows.forEach((row: any) => {
        row.isSelected = false;
      });
    }
    this.selectAllRowsChanged.emit({
      selected: this.selectAllRows,
      event: event
    });
  }

  getAllSelectedRows() {
    return (this._rows.filter((row: any) => {
      return row.isSelected;
    })).map((r:any) => r.data);
  }

  getVisibleColumns() {
    return [...this.leftPinnedColumns, ...this.viewPortColumns, ...this.rightPinnedColumns];
  }

  setColumnVisible(columns: columnVisibilityEvent[]) {
    for (var i = 0; i < columns.length; i++) {
      let _index = this._columnDefs.findIndex((column: FsrColumnDef) => column.key === columns[i].column);
      if (_index !== -1) {
        this._columnDefs[_index].visible = columns[i].visibility;
      }
    }
    this.setGridColumns();
  }

  expandCollapseAllRows() {
    this.expandAllRows = !this.expandAllRows;
    this._rows.forEach((row: any) => {
      row.isExpanded = this.expandAllRows;
    });
    this.rowExpandableEvent.emit({
      expandType: 'ALL',
      expanded: this.expandAllRows,
      data: this._rows
    });
  }

  onRowExpandCollapse(row: any) {
    row.isExpanded = !row.isExpanded;
    this.rowExpandableEvent.emit({
      expandType: 'SINGLE',
      expanded: row.isExpanded,
      data: row.data
    });
  }

  rowSelectionChange(event: any, row: any) {
    this.rowSelectionChanged.emit({
      data: row.data,
      event: event,
      selected: row.isSelected
    });
  }

  onColumnFilterChanged(event: any) {
    this.filterChanged.emit(event);
  }

  getFilteredColumns() {
    let filters: filterChangedEvent[] = [];
    if (this.gridColumns) {
      this.gridColumns!.toArray().forEach((column: GridColumnComponent) => {
        const filterData = column.getFilterValue();
        if (filterData.value) {
          filters.push(filterData);
        }
      });
    }
    return filters;
  }

  getSortedColumns() {
    let filters: sortChangedEvent[] = [];
    if (this.gridColumns) {
      this.gridColumns!.toArray().forEach((column: GridColumnComponent) => {
        const filterData = column.getSortStatus();
        if (filterData) {
          filters.push(filterData);
        }
      });
    }
    return filters;
  }

  columnSortChanged($event: sortChangedEvent) {
    this.sortChanged.emit($event);
  }

  setGridData(data:any[]) {
    this.setGridRows(data);
    this.loadingData = false;
  }

  columnDragStart(event:columnDragEvent) {
    this.positions = {};

    let i = 0;
    for (const column of this.gridColumns.toArray()) {
      const elm = column.element;
      const left = parseInt(elm.offsetLeft.toString(), 0);
      this.positions[column.colDef.key] = {
        left,
        right: left + parseInt(elm.offsetWidth.toString(), 0),
        index: i++,
        element: elm
      };
    }

  }
  columnDragging(event:columnDragEvent) {
  }

  columnDragEnd(event:columnDragEvent) {
    const prevPos = this.positions[event.column.key];
    event.column.$$dragging = false;
    const target = this.isTarget(event.column, event.event);
    if (target) {
      this.reorderColumns(prevPos.index, target.i);
      this.columnReorder.emit({
        column: event.column,
        event: event.event,
        newPos: target.i,
        prevPos: prevPos.index
      });
    }
    event.element.style.left = 'auto';
  }

  reorderColumns(prevIndex:number, newIndex:number) {
    let dragColumn = this.draggableColumnsOrder[prevIndex];
    this.draggableColumnsOrder.splice(prevIndex, 1);
    this.draggableColumnsOrder.splice(newIndex, 0, dragColumn);
    this.orderViewportColumns();

  }

  isTarget(column: FsrColumnDef, event: MouseEvent): any {
    let i = 0;
    const x = event.x || event.clientX;
    const y = event.y || event.clientY;
    const targets = this.document.elementsFromPoint(x, y);

    for (const key in this.positions) {
      const pos = this.positions[key];
      if (column.key !== key && targets.find((el: any) => el === pos.element)) {
        return { pos, i };
      }
      i++;
    }
  }

  resetColumns() {
    this.draggableColumnsOrder = [];
  }



}
