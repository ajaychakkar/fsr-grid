import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GridContainerDirective } from '../grid-container.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../grid-container.directive";
export class GridColumnComponent {
    constructor(element) {
        this.columnFilterChanged = new EventEmitter();
        this.columnSortChanged = new EventEmitter();
        this.element = element.nativeElement;
    }
    ngOnDestroy() {
        this.clearContainer();
    }
    ngOnInit() {
        if (this.colDef.enableFiltering) {
            this.clearContainer();
            this.componentRef = this.fsrCellViewContainer.viewContainerRef.createComponent(this.colDef.filterCompoment);
            this.componentRef.instance.onChange = (_event) => {
                this.columnFilterChanged.emit({
                    value: _event,
                    column: this.colDef
                });
            };
            if (this.colDef.filterComponentParams) {
                for (const key in this.colDef.filterComponentParams) {
                    this.componentRef.instance[key] = this.colDef.filterComponentParams[key];
                }
            }
        }
    }
    getFilterValue() {
        return {
            value: this.componentRef.instance.value,
            column: this.colDef
        };
    }
    clearContainer() {
        const viewContainerRef = this.fsrCellViewContainer.viewContainerRef;
        viewContainerRef.clear();
    }
    sortChange() {
        if (!this.colDef.$$dragging) {
            if (this.colDef.sortable) {
                if (this.colDef.sort === null) {
                    this.colDef.sort = 'asc';
                }
                else if (this.colDef.sort === 'asc') {
                    this.colDef.sort = 'desc';
                }
                else {
                    this.colDef.sort = null;
                }
                this.columnSortChanged.emit({
                    sort: this.colDef.sort,
                    column: this.colDef
                });
            }
        }
    }
    getSortStatus() {
        return {
            sort: this.colDef.sort,
            column: this.colDef
        };
    }
}
GridColumnComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridColumnComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
GridColumnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.11", type: GridColumnComponent, selector: "fsr-grid-column", inputs: { colDef: "colDef" }, outputs: { columnFilterChanged: "columnFilterChanged", columnSortChanged: "columnSortChanged" }, viewQueries: [{ propertyName: "fsrCellViewContainer", first: true, predicate: GridContainerDirective, descendants: true, static: true }], ngImport: i0, template: "<div class=\"fsr-grid-header-cell\" >\n  <div>\n    <div class=\"fsr-grid-header-cell-title-wrapper\">\n      <div class=\"fsr-grid-header-cell-title\" [ngClass]=\"{'fsrDraggableColumn': colDef.draggable }\" (click)=\"sortChange()\" title=\"{{colDef.title}}\">{{colDef.title}}</div>\n      <span *ngIf=\"colDef.sortable\" class=\"fsr-sortable-icon\">\n        <i class=\"fa fa-caret-down fa-light\" *ngIf=\"colDef.sort === 'asc'\" title=\"Ascending\"></i>\n        <i class=\"fa fa-caret-up fa-light\" *ngIf=\"colDef.sort === 'desc'\" title=\"Descending\"></i>\n      </span>\n  </div>\n  </div>\n\n  <div class=\"fsr-header-filter\">\n    <ng-container fsrGridContainer></ng-container>\n  </div>\n  <div class=\"resizable-cell\" [ngClass]=\"{'fsr-resize-handle': colDef.resizable}\"></div>\n</div>\n", styles: [".fsr-grid-header-cell .fsr-grid-header-cell-title-wrapper{display:flex;display:-ms-flexbox}.fsr-grid-header-cell .fsr-grid-header-cell-title-wrapper .fsr-grid-header-cell-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:calc(100% - 16px)}.fsr-grid-header-cell .fsr-grid-header-cell-title-wrapper .fsr-sortable-icon{margin-left:7px}.fsr-grid-header-cell .fsr-header-filter{margin-top:5px}.fsr-grid-header-cell .resizable-cell{width:2px;right:0;position:absolute;height:100%;top:5px;background:var(--grid-header-column-resize-handle-color)!important}.fsr-grid-header-cell .fsr-resize-handle{cursor:ew-resize}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.GridContainerDirective, selector: "[fsrGridContainer]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fsr-grid-column', template: "<div class=\"fsr-grid-header-cell\" >\n  <div>\n    <div class=\"fsr-grid-header-cell-title-wrapper\">\n      <div class=\"fsr-grid-header-cell-title\" [ngClass]=\"{'fsrDraggableColumn': colDef.draggable }\" (click)=\"sortChange()\" title=\"{{colDef.title}}\">{{colDef.title}}</div>\n      <span *ngIf=\"colDef.sortable\" class=\"fsr-sortable-icon\">\n        <i class=\"fa fa-caret-down fa-light\" *ngIf=\"colDef.sort === 'asc'\" title=\"Ascending\"></i>\n        <i class=\"fa fa-caret-up fa-light\" *ngIf=\"colDef.sort === 'desc'\" title=\"Descending\"></i>\n      </span>\n  </div>\n  </div>\n\n  <div class=\"fsr-header-filter\">\n    <ng-container fsrGridContainer></ng-container>\n  </div>\n  <div class=\"resizable-cell\" [ngClass]=\"{'fsr-resize-handle': colDef.resizable}\"></div>\n</div>\n", styles: [".fsr-grid-header-cell .fsr-grid-header-cell-title-wrapper{display:flex;display:-ms-flexbox}.fsr-grid-header-cell .fsr-grid-header-cell-title-wrapper .fsr-grid-header-cell-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:calc(100% - 16px)}.fsr-grid-header-cell .fsr-grid-header-cell-title-wrapper .fsr-sortable-icon{margin-left:7px}.fsr-grid-header-cell .fsr-header-filter{margin-top:5px}.fsr-grid-header-cell .resizable-cell{width:2px;right:0;position:absolute;height:100%;top:5px;background:var(--grid-header-column-resize-handle-color)!important}.fsr-grid-header-cell .fsr-resize-handle{cursor:ew-resize}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { colDef: [{
                type: Input
            }], columnFilterChanged: [{
                type: Output
            }], columnSortChanged: [{
                type: Output
            }], fsrCellViewContainer: [{
                type: ViewChild,
                args: [GridContainerDirective, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZnNyLWRhdGEtZ3JpZC9zcmMvbGliL2dyaWQtY29sdW1uL2dyaWQtY29sdW1uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Zzci1kYXRhLWdyaWQvc3JjL2xpYi9ncmlkLWNvbHVtbi9ncmlkLWNvbHVtbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFTckUsTUFBTSxPQUFPLG1CQUFtQjtJQVE5QixZQUFZLE9BQW1CO1FBTnJCLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBQzdELHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBTWpFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWdCLENBQUMsQ0FBQztZQUM3RyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFVLEVBQUMsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztvQkFDNUIsS0FBSyxFQUFFLE1BQU07b0JBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUNwQixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUE7WUFDRCxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUU7Z0JBQ3BDLEtBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTtvQkFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDMUU7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDdkMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDO0lBRU8sY0FBYztRQUNwQixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMxQixJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUN2QixJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2lCQUMxQjtxQkFBTSxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtvQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2lCQUMzQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7aUJBQ3pCO2dCQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUs7b0JBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDcEIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUVILENBQUM7SUFFTSxhQUFhO1FBQ2xCLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFLO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFBO0lBQ0gsQ0FBQzs7aUhBckVVLG1CQUFtQjtxR0FBbkIsbUJBQW1CLDRPQUluQixzQkFBc0IsOERDZG5DLGt5QkFnQkE7NEZETmEsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGlCQUFpQjtpR0FLbEIsTUFBTTtzQkFBZCxLQUFLO2dCQUNJLG1CQUFtQjtzQkFBNUIsTUFBTTtnQkFDRyxpQkFBaUI7c0JBQTFCLE1BQU07Z0JBQzRDLG9CQUFvQjtzQkFBdEUsU0FBUzt1QkFBQyxzQkFBc0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JpZENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4uL2dyaWQtY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGc3JDb2x1bW5EZWYgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Zzci1jb2x1bW4nO1xuaW1wb3J0IHsgZmlsdGVyQ2hhbmdlZEV2ZW50LCBzb3J0Q2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ncmlkLWV2ZW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zzci1ncmlkLWNvbHVtbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmlkLWNvbHVtbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dyaWQtY29sdW1uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR3JpZENvbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY29sRGVmITogRnNyQ29sdW1uRGVmO1xuICBAT3V0cHV0KCkgY29sdW1uRmlsdGVyQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8ZmlsdGVyQ2hhbmdlZEV2ZW50PigpO1xuICBAT3V0cHV0KCkgY29sdW1uU29ydENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHNvcnRDaGFuZ2VkRXZlbnQ+KCk7XG4gIEBWaWV3Q2hpbGQoR3JpZENvbnRhaW5lckRpcmVjdGl2ZSwge3N0YXRpYzogdHJ1ZX0pIGZzckNlbGxWaWV3Q29udGFpbmVyITogR3JpZENvbnRhaW5lckRpcmVjdGl2ZTtcblxuICBjb21wb25lbnRSZWY6IGFueTtcbiAgZWxlbWVudDogYW55O1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJDb250YWluZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmKHRoaXMuY29sRGVmLmVuYWJsZUZpbHRlcmluZykge1xuICAgICAgdGhpcy5jbGVhckNvbnRhaW5lcigpO1xuICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmZzckNlbGxWaWV3Q29udGFpbmVyLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KHRoaXMuY29sRGVmLmZpbHRlckNvbXBvbWVudCEpO1xuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Uub25DaGFuZ2UgPSAoX2V2ZW50OmFueSk9PiB7XG4gICAgICAgIHRoaXMuY29sdW1uRmlsdGVyQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICB2YWx1ZTogX2V2ZW50LFxuICAgICAgICAgIGNvbHVtbjogdGhpcy5jb2xEZWZcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZih0aGlzLmNvbERlZi5maWx0ZXJDb21wb25lbnRQYXJhbXMpIHtcbiAgICAgICAgZm9yKGNvbnN0IGtleSBpbiB0aGlzLmNvbERlZi5maWx0ZXJDb21wb25lbnRQYXJhbXMpIHtcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gdGhpcy5jb2xEZWYuZmlsdGVyQ29tcG9uZW50UGFyYW1zW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRGaWx0ZXJWYWx1ZSgpOiBmaWx0ZXJDaGFuZ2VkRXZlbnQge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UudmFsdWUsXG4gICAgICBjb2x1bW46IHRoaXMuY29sRGVmXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJDb250YWluZXIoKSB7XG4gICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMuZnNyQ2VsbFZpZXdDb250YWluZXIudmlld0NvbnRhaW5lclJlZjtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gIH1cblxuICBzb3J0Q2hhbmdlKCkge1xuICAgIGlmKCF0aGlzLmNvbERlZi4kJGRyYWdnaW5nKSB7XG4gICAgICBpZih0aGlzLmNvbERlZi5zb3J0YWJsZSkge1xuICAgICAgICBpZih0aGlzLmNvbERlZi5zb3J0ID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jb2xEZWYuc29ydCA9ICdhc2MnO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb2xEZWYuc29ydCA9PT0gJ2FzYycpIHtcbiAgICAgICAgICB0aGlzLmNvbERlZi5zb3J0ID0gJ2Rlc2MnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29sRGVmLnNvcnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sdW1uU29ydENoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgc29ydDogdGhpcy5jb2xEZWYuc29ydCEsXG4gICAgICAgICAgY29sdW1uOiB0aGlzLmNvbERlZlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyBnZXRTb3J0U3RhdHVzKCk6IHNvcnRDaGFuZ2VkRXZlbnQge1xuICAgIHJldHVybiB7XG4gICAgICBzb3J0OiB0aGlzLmNvbERlZi5zb3J0ISxcbiAgICAgIGNvbHVtbjogdGhpcy5jb2xEZWZcbiAgICB9XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImZzci1ncmlkLWhlYWRlci1jZWxsXCIgPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmc3ItZ3JpZC1oZWFkZXItY2VsbC10aXRsZS13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZnNyLWdyaWQtaGVhZGVyLWNlbGwtdGl0bGVcIiBbbmdDbGFzc109XCJ7J2ZzckRyYWdnYWJsZUNvbHVtbic6IGNvbERlZi5kcmFnZ2FibGUgfVwiIChjbGljayk9XCJzb3J0Q2hhbmdlKClcIiB0aXRsZT1cInt7Y29sRGVmLnRpdGxlfX1cIj57e2NvbERlZi50aXRsZX19PC9kaXY+XG4gICAgICA8c3BhbiAqbmdJZj1cImNvbERlZi5zb3J0YWJsZVwiIGNsYXNzPVwiZnNyLXNvcnRhYmxlLWljb25cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1kb3duIGZhLWxpZ2h0XCIgKm5nSWY9XCJjb2xEZWYuc29ydCA9PT0gJ2FzYydcIiB0aXRsZT1cIkFzY2VuZGluZ1wiPjwvaT5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYXJldC11cCBmYS1saWdodFwiICpuZ0lmPVwiY29sRGVmLnNvcnQgPT09ICdkZXNjJ1wiIHRpdGxlPVwiRGVzY2VuZGluZ1wiPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmc3ItaGVhZGVyLWZpbHRlclwiPlxuICAgIDxuZy1jb250YWluZXIgZnNyR3JpZENvbnRhaW5lcj48L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJyZXNpemFibGUtY2VsbFwiIFtuZ0NsYXNzXT1cInsnZnNyLXJlc2l6ZS1oYW5kbGUnOiBjb2xEZWYucmVzaXphYmxlfVwiPjwvZGl2PlxuPC9kaXY+XG4iXX0=