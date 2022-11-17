import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { GridContainerDirective } from '../grid-container.directive';
import { FsrColumnDef } from '../interfaces/fsr-column';
import { filterChangedEvent, sortChangedEvent } from '../interfaces/grid-events';

@Component({
  selector: 'fsr-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss']
})
export class GridColumnComponent implements OnInit, OnDestroy {
  @Input() colDef!: FsrColumnDef;
  @Output() columnFilterChanged = new EventEmitter<filterChangedEvent>();
  @Output() columnSortChanged = new EventEmitter<sortChangedEvent>();
  @ViewChild(GridContainerDirective, {static: true}) fsrCellViewContainer!: GridContainerDirective;

  componentRef: any;
  element: any;
  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }
  ngOnDestroy(): void {
    this.clearContainer();
  }

  ngOnInit(): void {
    if(this.colDef.enableFiltering) {
      this.clearContainer();
      this.componentRef = this.fsrCellViewContainer.viewContainerRef.createComponent(this.colDef.filterCompoment!);
      this.componentRef.instance.onChange = (_event:any)=> {
        this.columnFilterChanged.emit({
          value: _event,
          column: this.colDef
        });
      }
      if(this.colDef.filterComponentParams) {
        for(const key in this.colDef.filterComponentParams) {
          this.componentRef.instance[key] = this.colDef.filterComponentParams[key];
        }
      }
    }
  }

  getFilterValue(): filterChangedEvent {
    return {
      value: this.componentRef.instance.value,
      column: this.colDef
    };
  }

  private clearContainer() {
    const viewContainerRef = this.fsrCellViewContainer.viewContainerRef;
    viewContainerRef.clear();
  }

  sortChange() {
    if(!this.colDef.$$dragging) {
      if(this.colDef.sortable) {
        if(this.colDef.sort === null) {
          this.colDef.sort = 'asc';
        } else if(this.colDef.sort === 'asc') {
          this.colDef.sort = 'desc';
        } else {
          this.colDef.sort = null;
        }
        this.columnSortChanged.emit({
          sort: this.colDef.sort!,
          column: this.colDef
        });
      }
    }

  }

  public getSortStatus(): sortChangedEvent {
    return {
      sort: this.colDef.sort!,
      column: this.colDef
    }
  }

}
