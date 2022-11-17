import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../grid-cell/grid-cell.component";
export class GridRowComponent {
    constructor() {
        this.columns = [];
        this.expandable = false;
        this.rowSelection = false; // to show checkbox at row level
        this.rowSelectionChange = new EventEmitter();
        this.onRowClicked = new EventEmitter();
        this.onRowExpandCollapse = new EventEmitter();
        this.isSelected = false;
        this._isExpanded = false;
    }
    set data(_data) {
        this._data = _data;
        this.setRowContext();
    }
    get data() {
        return this._data;
    }
    set isExpanded(_isExpanded) {
        this._isExpanded = _isExpanded;
    }
    get isExpanded() {
        return this._isExpanded;
    }
    setRowContext() {
        this.expandableContext = {
            data: this.data,
            expanded: this.isExpanded
        };
    }
    ngOnInit() {
    }
    rowSelectionChanged(event) {
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
    onClicked(event) {
        this.onRowClicked.emit({
            data: this.data,
            event: event
        });
    }
}
GridRowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridRowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
GridRowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.11", type: GridRowComponent, selector: "fsr-grid-row", inputs: { columns: "columns", expandable: "expandable", data: "data", rowSelection: "rowSelection", isSelected: "isSelected", expandableDetail: "expandableDetail", isExpanded: "isExpanded" }, outputs: { rowSelectionChange: "rowSelectionChange", onRowClicked: "onRowClicked", onRowExpandCollapse: "onRowExpandCollapse" }, ngImport: i0, template: "<div class=\"fsr-grid-row\" (click)=\"onClicked($event)\">\n  <fsr-grid-cell *ngFor=\"let column of columns\" class=\"fsr-grid-cell font-size-12px\" [colDef]=\"column\" [value]=\"data[column.key]\"\n    [ngStyle]=\"{'width': column.$$width +'px'}\">\n  </fsr-grid-cell>\n</div>\n\n", styles: [".fsr-grid-cell{display:inline-flex;display:-ms-inline-flexbox;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 10px;height:100%;align-items:center}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.GridCellComponent, selector: "fsr-grid-cell", inputs: ["colDef", "value"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridRowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fsr-grid-row', template: "<div class=\"fsr-grid-row\" (click)=\"onClicked($event)\">\n  <fsr-grid-cell *ngFor=\"let column of columns\" class=\"fsr-grid-cell font-size-12px\" [colDef]=\"column\" [value]=\"data[column.key]\"\n    [ngStyle]=\"{'width': column.$$width +'px'}\">\n  </fsr-grid-cell>\n</div>\n\n", styles: [".fsr-grid-cell{display:inline-flex;display:-ms-inline-flexbox;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 10px;height:100%;align-items:center}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { columns: [{
                type: Input
            }], expandable: [{
                type: Input
            }], data: [{
                type: Input
            }], rowSelection: [{
                type: Input
            }], rowSelectionChange: [{
                type: Output
            }], onRowClicked: [{
                type: Output
            }], onRowExpandCollapse: [{
                type: Output
            }], isSelected: [{
                type: Input
            }], expandableDetail: [{
                type: Input
            }], isExpanded: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZnNyLWRhdGEtZ3JpZC9zcmMvbGliL2dyaWQtcm93L2dyaWQtcm93LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Zzci1kYXRhLWdyaWQvc3JjL2xpYi9ncmlkLXJvdy9ncmlkLXJvdy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUy9FLE1BQU0sT0FBTyxnQkFBZ0I7SUE2QjNCO1FBNUJTLFlBQU8sR0FBa0IsRUFBRSxDQUFBO1FBQzNCLGVBQVUsR0FBd0IsS0FBSyxDQUFDO1FBV3hDLGlCQUFZLEdBQXVCLEtBQUssQ0FBQyxDQUFFLGdDQUFnQztRQUMxRSx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBNEIsQ0FBQztRQUNsRSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ25ELHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBRTlELGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFckMsZ0JBQVcsR0FBVyxLQUFLLENBQUM7SUFVNUIsQ0FBQztJQTFCRCxJQUFhLElBQUksQ0FBQyxLQUFTO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFXRCxJQUFhLFVBQVUsQ0FBQyxXQUFvQjtRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFLTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDMUIsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQVU7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztZQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN6QixVQUFVLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWdCO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OEdBakVVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLHFYQ1Q3QiwyUkFNQTs0RkRHYSxnQkFBZ0I7a0JBTDVCLFNBQVM7K0JBQ0UsY0FBYzswRUFLZixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFFTyxJQUFJO3NCQUFoQixLQUFLO2dCQVNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0ksa0JBQWtCO3NCQUEzQixNQUFNO2dCQUNHLFlBQVk7c0JBQXJCLE1BQU07Z0JBQ0csbUJBQW1CO3NCQUE1QixNQUFNO2dCQUVFLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUdPLFVBQVU7c0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGc3JDb2x1bW5EZWYgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Zzci1jb2x1bW4nO1xuaW1wb3J0IHsgb25Sb3dDbGlja0V2ZW50LCByb3dFeHBhbmRhYmxlRXZlbnQsIHJvd1NlbGVjdGlvbkNoYW5nZWRFdmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvZ3JpZC1ldmVudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmc3ItZ3JpZC1yb3cnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC1yb3cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncmlkLXJvdy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2x1bW5zOkZzckNvbHVtbkRlZltdID0gW11cbiAgQElucHV0KCkgZXhwYW5kYWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IGZhbHNlO1xuICBfZGF0YTogYW55O1xuICBASW5wdXQoKSBzZXQgZGF0YShfZGF0YTphbnkpIHtcbiAgICB0aGlzLl9kYXRhID0gX2RhdGE7XG4gICAgdGhpcy5zZXRSb3dDb250ZXh0KCk7XG4gIH1cblxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIEBJbnB1dCgpIHJvd1NlbGVjdGlvbjpib29sZWFuIHwgdW5kZWZpbmVkID0gZmFsc2U7ICAvLyB0byBzaG93IGNoZWNrYm94IGF0IHJvdyBsZXZlbFxuICBAT3V0cHV0KCkgcm93U2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxyb3dTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBvblJvd0NsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG9uUm93Q2xpY2tFdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uUm93RXhwYW5kQ29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHJvd0V4cGFuZGFibGVFdmVudD4oKTtcblxuICBASW5wdXQoKSBpc1NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGV4cGFuZGFibGVEZXRhaWw/OiBhbnk7XG4gIF9pc0V4cGFuZGVkOmJvb2xlYW4gPSBmYWxzZTtcbiAgZXhwYW5kYWJsZUNvbnRleHQ6YW55O1xuICBASW5wdXQoKSBzZXQgaXNFeHBhbmRlZChfaXNFeHBhbmRlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRXhwYW5kZWQgPSBfaXNFeHBhbmRlZDtcbiAgfVxuICBnZXQgaXNFeHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNFeHBhbmRlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRSb3dDb250ZXh0KCkge1xuICAgIHRoaXMuZXhwYW5kYWJsZUNvbnRleHQgPSB7XG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBleHBhbmRlZDogdGhpcy5pc0V4cGFuZGVkXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcm93U2VsZWN0aW9uQ2hhbmdlZChldmVudDogYW55KSB7XG4gICAgdGhpcy5yb3dTZWxlY3Rpb25DaGFuZ2UuZW1pdCh7XG4gICAgICBzZWxlY3RlZDogdGhpcy5pc1NlbGVjdGVkLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgfSk7XG4gIH1cblxuICByb3dFeHBhbmQoKSB7XG4gICAgdGhpcy5pc0V4cGFuZGVkID0gIXRoaXMuaXNFeHBhbmRlZDtcbiAgICB0aGlzLmV4cGFuZGFibGVDb250ZXh0LmV4cGFuZGVkID0gdGhpcy5pc0V4cGFuZGVkO1xuICAgIHRoaXMub25Sb3dFeHBhbmRDb2xsYXBzZS5lbWl0KHtcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIGV4cGFuZGVkOiB0aGlzLmlzRXhwYW5kZWQsXG4gICAgICBleHBhbmRUeXBlOiAnU0lOR0xFJ1xuICAgIH0pO1xuICB9XG5cbiAgb25DbGlja2VkKGV2ZW50Ok1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLm9uUm93Q2xpY2tlZC5lbWl0KHtcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIGV2ZW50OiBldmVudFxuICAgIH0pO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJmc3ItZ3JpZC1yb3dcIiAoY2xpY2spPVwib25DbGlja2VkKCRldmVudClcIj5cbiAgPGZzci1ncmlkLWNlbGwgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgY2xhc3M9XCJmc3ItZ3JpZC1jZWxsIGZvbnQtc2l6ZS0xMnB4XCIgW2NvbERlZl09XCJjb2x1bW5cIiBbdmFsdWVdPVwiZGF0YVtjb2x1bW4ua2V5XVwiXG4gICAgW25nU3R5bGVdPVwieyd3aWR0aCc6IGNvbHVtbi4kJHdpZHRoICsncHgnfVwiPlxuICA8L2Zzci1ncmlkLWNlbGw+XG48L2Rpdj5cblxuIl19