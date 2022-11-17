import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GridContainerDirective } from '../grid-container.directive';
import { FsrColumnDef } from '../interfaces/fsr-column';

@Component({
  selector: 'fsr-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.scss']
})
export class GridCellComponent implements OnInit, OnDestroy {
  @Input() colDef!:FsrColumnDef;
  @Input() value:any
  @ViewChild(GridContainerDirective, {static: true}) fsrCellViewContainer!: GridContainerDirective;
  componentRef: any;
  constructor() { }
  ngOnDestroy(): void {
    this.clearContainer();
  }

  ngOnInit(): void {
    this.clearContainer();
    this.componentRef = this.fsrCellViewContainer.viewContainerRef.createComponent(this.colDef.renderer);
    this.componentRef.instance.value = this.value;
    if(this.colDef.rendererParams) {
      for(const key in this.colDef.rendererParams) {
        this.componentRef.instance[key] = this.colDef.rendererParams[key];
      }
    }
  }

  private clearContainer() {
    const viewContainerRef = this.fsrCellViewContainer.viewContainerRef;
    viewContainerRef.clear();
  }

}
