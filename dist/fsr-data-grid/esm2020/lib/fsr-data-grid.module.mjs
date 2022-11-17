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
import * as i0 from "@angular/core";
export class FsrDataGridModule {
}
FsrDataGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: FsrDataGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FsrDataGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.11", ngImport: i0, type: FsrDataGridModule, declarations: [FsrDataGridComponent,
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
        DraggableDirective], imports: [CommonModule,
        FormsModule], exports: [FsrDataGridComponent,
        GridColumnDirective,
        CellTemplateDirective,
        HeaderCellDirective,
        RowExpandableDirective,
        RowExpandableTemplateDirective] });
FsrDataGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: FsrDataGridModule, imports: [CommonModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: FsrDataGridModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnNyLWRhdGEtZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9mc3ItZGF0YS1ncmlkL3NyYy9saWIvZnNyLWRhdGEtZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQThCdEUsTUFBTSxPQUFPLGlCQUFpQjs7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLGlCQTFCMUIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5QixrQkFBa0IsYUFHbEIsWUFBWTtRQUNaLFdBQVcsYUFHWCxvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLDhCQUE4QjtnSEFHckIsaUJBQWlCLFlBWjFCLFlBQVk7UUFDWixXQUFXOzRGQVdGLGlCQUFpQjtrQkE1QjdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLHNCQUFzQjt3QkFDdEIsOEJBQThCO3dCQUM5QixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7cUJBQ1o7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3dCQUN0Qiw4QkFBOEI7cUJBQy9CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZzckRhdGFHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9mc3ItZGF0YS1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLWNvbHVtbi9ncmlkLWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZFJvd0NvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1yb3cvZ3JpZC1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLWNlbGwvZ3JpZC1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9ncmlkLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR3JpZENvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ncmlkLWNvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NlbGwtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEhlYWRlckNlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaGVhZGVyLWNlbGwuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJlc2l6YWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yZXNpemFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJvd0V4cGFuZGFibGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcm93LWV4cGFuZGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJvd0V4cGFuZGFibGVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yb3ctZXhwYW5kYWJsZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGc3JEYXRhR3JpZENvbXBvbmVudCxcbiAgICBHcmlkQ29sdW1uQ29tcG9uZW50LFxuICAgIEdyaWRSb3dDb21wb25lbnQsXG4gICAgR3JpZENlbGxDb21wb25lbnQsXG4gICAgR3JpZENvbnRhaW5lckRpcmVjdGl2ZSxcbiAgICBHcmlkQ29sdW1uRGlyZWN0aXZlLFxuICAgIENlbGxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBIZWFkZXJDZWxsRGlyZWN0aXZlLFxuICAgIFJlc2l6YWJsZURpcmVjdGl2ZSxcbiAgICBSb3dFeHBhbmRhYmxlRGlyZWN0aXZlLFxuICAgIFJvd0V4cGFuZGFibGVUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBEcmFnZ2FibGVEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRnNyRGF0YUdyaWRDb21wb25lbnQsXG4gICAgR3JpZENvbHVtbkRpcmVjdGl2ZSxcbiAgICBDZWxsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSGVhZGVyQ2VsbERpcmVjdGl2ZSxcbiAgICBSb3dFeHBhbmRhYmxlRGlyZWN0aXZlLFxuICAgIFJvd0V4cGFuZGFibGVUZW1wbGF0ZURpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZzckRhdGFHcmlkTW9kdWxlIHsgfVxuIl19