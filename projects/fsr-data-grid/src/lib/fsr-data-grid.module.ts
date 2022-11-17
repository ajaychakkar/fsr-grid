import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FsrDataGridComponent } from './fsr-data-grid.component';
import { GridColumnComponent } from './grid-column/grid-column.component';
import { GridRowComponent } from './grid-row/grid-row.component';
import { GridCellComponent } from './grid-cell/grid-cell.component';
import { GridContainerDirective } from './grid-container.directive';
import { GridColumnDirective } from './directives/grid-column.directive';
import { CellTemplateDirective } from './directives/cell-template.directive';
import { HeaderCellDirective } from './directives/header-cell.directive';
import { ResizableDirective } from './directives/resizable.directive';
import { RowExpandableDirective } from './directives/row-expandable.directive';
import { RowExpandableTemplateDirective } from './directives/row-expandable-template.directive';
import { DraggableDirective } from './directives/draggable.directive';

@NgModule({
  declarations: [
    FsrDataGridComponent,
    GridColumnComponent,
    GridRowComponent,
    GridCellComponent,
    GridContainerDirective,
    GridColumnDirective,
    CellTemplateDirective,
    HeaderCellDirective,
    ResizableDirective,
    RowExpandableDirective,
    RowExpandableTemplateDirective,
    DraggableDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FsrDataGridComponent,
    GridColumnDirective,
    CellTemplateDirective,
    HeaderCellDirective,
    RowExpandableDirective,
    RowExpandableTemplateDirective
  ]
})
export class FsrDataGridModule { }
