import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FsrColumnDef } from '../interfaces/fsr-column';
import { onRowClickEvent, rowExpandableEvent, rowSelectionChangedEvent } from '../interfaces/grid-events';

@Component({
  selector: 'fsr-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss']
})
export class GridRowComponent implements OnInit {
  @Input() columns:FsrColumnDef[] = []
  @Input() expandable: boolean | undefined = false;
  _data: any;
  @Input() set data(_data:any) {
    this._data = _data;
    this.setRowContext();
  }

  get data() {
    return this._data;
  }

  @Input() rowSelection:boolean | undefined = false;  // to show checkbox at row level
  @Output() rowSelectionChange = new EventEmitter<rowSelectionChangedEvent>();
  @Output() onRowClicked = new EventEmitter<onRowClickEvent>();
  @Output() onRowExpandCollapse = new EventEmitter<rowExpandableEvent>();

  @Input() isSelected: boolean = false;
  @Input() expandableDetail?: any;
  _isExpanded:boolean = false;
  expandableContext:any;
  @Input() set isExpanded(_isExpanded: boolean) {
    this._isExpanded = _isExpanded;
  }
  get isExpanded() {
    return this._isExpanded;
  }

  constructor() {
  }

  private setRowContext() {
    this.expandableContext = {
      data: this.data,
      expanded: this.isExpanded
    };
  }

  ngOnInit(): void {
  }

  rowSelectionChanged(event: any) {
    this.rowSelectionChange.emit({
      selected: this.isSelected,
      data: this.data,
      event: event
    });
  }

  rowExpand() {
    this.isExpanded = !this.isExpanded;
    this.expandableContext.expanded = this.isExpanded;
    this.onRowExpandCollapse.emit({
      data: this.data,
      expanded: this.isExpanded,
      expandType: 'SINGLE'
    });
  }

  onClicked(event:MouseEvent) {
    this.onRowClicked.emit({
      data: this.data,
      event: event
    });
  }

}
