import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Directive, Input, Output, HostListener, TemplateRef, ContentChild, Component, ViewChild, Inject, ContentChildren, ViewChildren, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as _ from 'lodash';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';

class FsrDataGridService {
    constructor() { }
    getAllSelectedRows() {
        console.log('inside all');
    }
}
FsrDataGridService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: FsrDataGridService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FsrDataGridService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: FsrDataGridService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: FsrDataGridService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class DraggableDirective {
    constructor(element) {
        this.columnDragStart = new EventEmitter();
        this.columnDragging = new EventEmitter();
        this.columnDragEnd = new EventEmitter();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    onMousedown(event) {
        const isDragElm = event.target.classList.contains('fsrDraggableColumn');
        if (isDragElm && this.draggable) {
            event.preventDefault();
            this.isDragging = true;
            this.dragColumn.$$dragging = true;
            const mouseDownPos = { x: event.clientX, y: event.clientY };
            const mouseup = fromEvent(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup(ev));
            const mouseMoveSub = fromEvent(document, 'mousemove')
                .pipe(takeUntil(mouseup))
                .subscribe((ev) => this.move(ev, mouseDownPos));
            this.subscription.add(mouseMoveSub);
            this.columnDragStart.emit({
                event,
                element: this.element,
                column: this.dragColumn
            });
        }
    }
    move(event, mouseDownPos) {
        if (!this.isDragging)
            return;
        const x = event.clientX - mouseDownPos.x;
        const y = event.clientY - mouseDownPos.y;
        if (this.draggable) {
            this.element.style.left = `${x}px`;
            this.element.classList.add('dragging');
            this.columnDragging.emit({
                event,
                element: this.element,
                column: this.dragColumn
            });
        }
    }
    onMouseup(event) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.columnDragEnd.emit({
                event,
                element: this.element,
                column: this.dragColumn
            });
        }
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
DraggableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: DraggableDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
DraggableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.11", type: DraggableDirective, selector: "[fsrDraggable]", inputs: { dragColumn: "dragColumn", draggable: "draggable" }, outputs: { columnDragStart: "columnDragStart", columnDragging: "columnDragging", columnDragEnd: "columnDragEnd" }, host: { listeners: { "mousedown": "onMousedown($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: DraggableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fsrDraggable]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { dragColumn: [{
                type: Input
            }], draggable: [{
                type: Input
            }], columnDragStart: [{
                type: Output
            }], columnDragging: [{
                type: Output
            }], columnDragEnd: [{
                type: Output
            }], onMousedown: [{
                type: HostListener,
                args: ['mousedown', ['$event']]
            }] } });

class CellTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
CellTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: CellTemplateDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
CellTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.11", type: CellTemplateDirective, selector: "[fsrCellTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: CellTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fsrCellTemplate]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });

class HeaderCellDirective {
    constructor(template) {
        this.template = template;
    }
}
HeaderCellDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: HeaderCellDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
HeaderCellDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.11", type: HeaderCellDirective, selector: "[fsrHeaderCell]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: HeaderCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fsrHeaderCell]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });

class GridColumnDirective {
    constructor() {
        this.name = '';
        this.title = '';
        this.resizeable = false;
        //@Input() comparator: any;
        //@Input() pipe: any;
        this.visible = true;
        this.sortable = true;
        this.draggable = true;
    }
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    ngOnChanges() {
    }
}
GridColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridColumnDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
GridColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.11", type: GridColumnDirective, selector: "fsrGridColumn", inputs: { name: "name", title: "title", pinLeft: "pinLeft", pinRight: "pinRight", resizeable: "resizeable", visible: "visible", sortable: "sortable", draggable: "draggable", minWidth: "minWidth", width: "width", maxWidth: "maxWidth", checkboxable: "checkboxable", headerCheckboxable: "headerCheckboxable", headerClass: "headerClass", cellClass: "cellClass", _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"], _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"] }, queries: [{ propertyName: "_cellTemplateQuery", first: true, predicate: CellTemplateDirective, descendants: true, read: TemplateRef, static: true }, { propertyName: "_headerTemplateQuery", first: true, predicate: HeaderCellDirective, descendants: true, read: TemplateRef, static: true }], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'fsrGridColumn'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { name: [{
                type: Input
            }], title: [{
                type: Input
            }], pinLeft: [{
                type: Input
            }], pinRight: [{
                type: Input
            }], resizeable: [{
                type: Input
            }], visible: [{
                type: Input
            }], sortable: [{
                type: Input
            }], draggable: [{
                type: Input
            }], minWidth: [{
                type: Input
            }], width: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }], checkboxable: [{
                type: Input
            }], headerCheckboxable: [{
                type: Input
            }], headerClass: [{
                type: Input
            }], cellClass: [{
                type: Input
            }], _cellTemplateInput: [{
                type: Input,
                args: ['cellTemplate']
            }], _cellTemplateQuery: [{
                type: ContentChild,
                args: [CellTemplateDirective, { read: TemplateRef, static: true }]
            }], _headerTemplateInput: [{
                type: Input,
                args: ['headerTemplate']
            }], _headerTemplateQuery: [{
                type: ContentChild,
                args: [HeaderCellDirective, { read: TemplateRef, static: true }]
            }] } });

class RowExpandableTemplateDirective {
    constructor(template) {
        this.template = template;
        this.expandableHeight = 100;
    }
}
RowExpandableTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: RowExpandableTemplateDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
RowExpandableTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.11", type: RowExpandableTemplateDirective, selector: "[fsrRowExpandableTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: RowExpandableTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fsrRowExpandableTemplate]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });

class RowExpandableDirective {
    constructor() {
        this.expandableHeight = 100;
        /**
         * Row expandable toggle.
         */
        this.toggle = new EventEmitter();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle row expansion
     */
    toggleExpandRow(row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    }
    /**
     * Method to expand all rows
     */
    expandAllRows() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * Method to collase all rows
     */
    collapseAllRows() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
RowExpandableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: RowExpandableDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RowExpandableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.11", type: RowExpandableDirective, selector: "[fsrRowExpandable]", inputs: { expandableHeight: "expandableHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" }, queries: [{ propertyName: "_templateQuery", first: true, predicate: RowExpandableTemplateDirective, descendants: true, read: TemplateRef, static: true }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: RowExpandableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fsrRowExpandable]'
                }]
        }], propDecorators: { expandableHeight: [{
                type: Input
            }], _templateInput: [{
                type: Input,
                args: ['template']
            }], _templateQuery: [{
                type: ContentChild,
                args: [RowExpandableTemplateDirective, { read: TemplateRef, static: true }]
            }], toggle: [{
                type: Output
            }] } });

class GridContainerDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
GridContainerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridContainerDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
GridContainerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.11", type: GridContainerDirective, selector: "[fsrGridContainer]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridContainerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fsrGridContainer]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });

class GridColumnComponent {
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
GridColumnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.11", type: GridColumnComponent, selector: "fsr-grid-column", inputs: { colDef: "colDef" }, outputs: { columnFilterChanged: "columnFilterChanged", columnSortChanged: "columnSortChanged" }, viewQueries: [{ propertyName: "fsrCellViewContainer", first: true, predicate: GridContainerDirective, descendants: true, static: true }], ngImport: i0, template: "<div class=\"fsr-grid-header-cell\" >\n  <div>\n    <div class=\"fsr-grid-header-cell-title-wrapper\">\n      <div class=\"fsr-grid-header-cell-title\" [ngClass]=\"{'fsrDraggableColumn': colDef.draggable }\" (click)=\"sortChange()\" title=\"{{colDef.title}}\">{{colDef.title}}</div>\n      <span *ngIf=\"colDef.sortable\" class=\"fsr-sortable-icon\">\n        <i class=\"fa fa-caret-down fa-light\" *ngIf=\"colDef.sort === 'asc'\" title=\"Ascending\"></i>\n        <i class=\"fa fa-caret-up fa-light\" *ngIf=\"colDef.sort === 'desc'\" title=\"Descending\"></i>\n      </span>\n  </div>\n  </div>\n\n  <div class=\"fsr-header-filter\">\n    <ng-container fsrGridContainer></ng-container>\n  </div>\n  <div class=\"resizable-cell\" [ngClass]=\"{'fsr-resize-handle': colDef.resizable}\"></div>\n</div>\n", styles: [".fsr-grid-header-cell .fsr-grid-header-cell-title-wrapper{display:flex;display:-ms-flexbox}.fsr-grid-header-cell .fsr-grid-header-cell-title-wrapper .fsr-grid-header-cell-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:calc(100% - 16px)}.fsr-grid-header-cell .fsr-grid-header-cell-title-wrapper .fsr-sortable-icon{margin-left:7px}.fsr-grid-header-cell .fsr-header-filter{margin-top:5px}.fsr-grid-header-cell .resizable-cell{width:2px;right:0;position:absolute;height:100%;top:5px;background:var(--grid-header-column-resize-handle-color)!important}.fsr-grid-header-cell .fsr-resize-handle{cursor:ew-resize}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: GridContainerDirective, selector: "[fsrGridContainer]" }] });
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

class GridCellComponent {
    constructor() { }
    ngOnDestroy() {
        this.clearContainer();
    }
    ngOnInit() {
        this.clearContainer();
        this.componentRef = this.fsrCellViewContainer.viewContainerRef.createComponent(this.colDef.renderer);
        this.componentRef.instance.value = this.value;
        if (this.colDef.rendererParams) {
            for (const key in this.colDef.rendererParams) {
                this.componentRef.instance[key] = this.colDef.rendererParams[key];
            }
        }
    }
    clearContainer() {
        const viewContainerRef = this.fsrCellViewContainer.viewContainerRef;
        viewContainerRef.clear();
    }
}
GridCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
GridCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.11", type: GridCellComponent, selector: "fsr-grid-cell", inputs: { colDef: "colDef", value: "value" }, viewQueries: [{ propertyName: "fsrCellViewContainer", first: true, predicate: GridContainerDirective, descendants: true, static: true }], ngImport: i0, template: "<div>\n  <ng-container fsrGridContainer>\n  </ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: GridContainerDirective, selector: "[fsrGridContainer]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fsr-grid-cell', template: "<div>\n  <ng-container fsrGridContainer>\n  </ng-container>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { colDef: [{
                type: Input
            }], value: [{
                type: Input
            }], fsrCellViewContainer: [{
                type: ViewChild,
                args: [GridContainerDirective, { static: true }]
            }] } });

class GridRowComponent {
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
GridRowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.11", type: GridRowComponent, selector: "fsr-grid-row", inputs: { columns: "columns", expandable: "expandable", data: "data", rowSelection: "rowSelection", isSelected: "isSelected", expandableDetail: "expandableDetail", isExpanded: "isExpanded" }, outputs: { rowSelectionChange: "rowSelectionChange", onRowClicked: "onRowClicked", onRowExpandCollapse: "onRowExpandCollapse" }, ngImport: i0, template: "<div class=\"fsr-grid-row\" (click)=\"onClicked($event)\">\n  <fsr-grid-cell *ngFor=\"let column of columns\" class=\"fsr-grid-cell font-size-12px\" [colDef]=\"column\" [value]=\"data[column.key]\"\n    [ngStyle]=\"{'width': column.$$width +'px'}\">\n  </fsr-grid-cell>\n</div>\n\n", styles: [".fsr-grid-cell{display:inline-flex;display:-ms-inline-flexbox;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 10px;height:100%;align-items:center}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: GridCellComponent, selector: "fsr-grid-cell", inputs: ["colDef", "value"] }] });
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

class ResizableDirective {
    constructor(element) {
        this.resizable = true;
        this.onResize = new EventEmitter();
        this.onResizeEnd = new EventEmitter();
        this.resizing = false;
        this.resizableElement = element.nativeElement;
    }
    onMousedown(event) {
        if (this.resizable) {
            let isResizeHandle = event.target.classList.contains('fsr-resize-handle');
            if (isResizeHandle) {
                let elementWidth = this.resizableElement.clientWidth;
                let mouseDownX = event.screenX;
                event.stopPropagation();
                let mouseup = fromEvent(document, 'mouseup');
                this.subscription = mouseup.subscribe((mouseupEvent) => this.onResizeStop(this.calculateWidth(mouseupEvent, elementWidth, mouseDownX)));
                let resizeSubscription = fromEvent(document, 'mousemove').pipe(takeUntil(mouseup))
                    .subscribe((mouseMoveEvent) => {
                    this.resizeElement(this.calculateWidth(mouseMoveEvent, elementWidth, mouseDownX));
                });
                this.subscription.add(resizeSubscription);
            }
        }
    }
    onResizeStop(width) {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
        this.onResizeEnd.emit(width);
    }
    resizeElement(width) {
        this.onResize.emit(width);
    }
    calculateWidth(event, elementWidth, mouseDownX) {
        const movementX = event.screenX - mouseDownX;
        return elementWidth + movementX;
    }
}
ResizableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: ResizableDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ResizableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.11", type: ResizableDirective, selector: "[fsrResizable]", inputs: { resizable: "resizable" }, outputs: { onResize: "onResize", onResizeEnd: "onResizeEnd" }, host: { listeners: { "mousedown": "onMousedown($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: ResizableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fsrResizable]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { resizable: [{
                type: Input
            }], onResize: [{
                type: Output
            }], onResizeEnd: [{
                type: Output
            }], onMousedown: [{
                type: HostListener,
                args: ['mousedown', ['$event']]
            }] } });

const checkboxSelectionWidth = 30;
const rowExpandableWidth = 30;
class FsrDataGridComponent {
    constructor(element, fsrDataGridService, document) {
        this.fsrDataGridService = fsrDataGridService;
        this.document = document;
        // All output events
        this.onGridReady = new EventEmitter();
        this.onRowClick = new EventEmitter();
        this.selectAllRowsChanged = new EventEmitter();
        this.rowSelectionChanged = new EventEmitter();
        this.columnResized = new EventEmitter();
        this.columnResizeEnd = new EventEmitter();
        this.rowExpandableEvent = new EventEmitter();
        this.filterChanged = new EventEmitter();
        this.sortChanged = new EventEmitter();
        this.columnReorder = new EventEmitter();
        this._gridOptions = {
            rowSelection: true,
            rowExpandable: false
        };
        this._rows = [];
        this._columnDefs = [];
        this.visibleColumns = [];
        this.selectAllRows = false;
        this.expandAllRows = false;
        this.leftPinnedColumns = [];
        this.rightPinnedColumns = [];
        this.viewPortColumns = [];
        this.viewPort = {};
        this.loadingData = true;
        this.positions = {};
        this.draggableColumnsOrder = [];
        this.element = element.nativeElement;
    }
    set ColumnDefs(defs) {
        this._columnDefs = defs;
        this.setGridColumns();
    }
    set data(_data) {
        this.setGridRows(_data);
    }
    set gridOptions(gridOptions) {
        _.extend(this._gridOptions, gridOptions);
    }
    set columnTemplates(templates) {
        this._columnTemplates = templates;
        this.translateToColumns(templates);
    }
    ngAfterViewInit() {
        this.calculateColumnsWidth();
    }
    ngOnInit() {
        this.onGridReady.emit({
            api: this
        });
    }
    setGridRows(data) {
        this._rows = [];
        data.forEach((d) => {
            this._rows.push({
                data: d,
                isSelected: false,
                isExpanded: false
            });
        });
    }
    setGridColumns() {
        this.visibleColumns = this._columnDefs.filter((column) => {
            return column.visible;
        });
        this.calculateColumnsWidth();
    }
    calculateColumnsWidth() {
        let viewportWidth = this.viewPort.width;
        if (this._gridOptions.rowSelection) {
            viewportWidth -= checkboxSelectionWidth;
        }
        if (this._gridOptions.rowExpandable) {
            viewportWidth -= rowExpandableWidth;
        }
        this.visibleColumns.forEach((column) => {
            if (!column.$$width) {
                column.$$width = this._getColumnWidth(column, viewportWidth);
            }
        });
        this.separateColumnsByPin();
    }
    separateColumnsByPin() {
        this.leftPinnedColumns = this.visibleColumns.filter((column) => {
            return column.pinnedColumn === 'LEFT';
        });
        this.viewPortColumns = this.visibleColumns.filter((column) => {
            return column.pinnedColumn !== 'RIGHT' && column.pinnedColumn !== 'LEFT';
        });
        if (this.draggableColumnsOrder.length === 0) {
            this.draggableColumnsOrder = this.viewPortColumns.map((col) => col.key);
        }
        this.orderViewportColumns();
        this.rightPinnedColumns = this.visibleColumns.filter((column) => {
            return column.pinnedColumn === 'RIGHT';
        });
        this.calculateViewportWidth();
    }
    orderViewportColumns() {
        this.viewPortColumns.sort((a, b) => this.draggableColumnsOrder.indexOf(a.key) - this.draggableColumnsOrder.indexOf(b.key));
    }
    calculateViewportWidth() {
        this.viewPort = this.element.getElementsByClassName('fsr-grid-wrapper')[0].getBoundingClientRect();
    }
    _getColumnWidth(column, viewportWidth) {
        let _defaultColWidth = viewportWidth / this.visibleColumns.length;
        let colWidth = _defaultColWidth;
        if (column.width) {
            if (typeof (column.width) === 'string' && column.width.indexOf('%') !== -1) {
                colWidth = viewportWidth * (parseFloat(column.width) / 100);
            }
            else {
                colWidth = parseInt(column.width);
            }
        }
        return colWidth;
    }
    translateToColumns(templates) {
        if (templates) {
        }
    }
    onWidthResize(event, column) {
        column.$$width = event;
        this.columnResized.emit({
            column: column
        });
    }
    onWidthResizeEnd(event, column) {
        column.$$width = event;
        this.columnResizeEnd.emit({
            column: column
        });
    }
    onRowClicked(rowData) {
        this.onRowClick.emit(rowData);
    }
    selectAll(event) {
        if (this.selectAllRows) {
            this._rows.forEach((row) => {
                row.isSelected = true;
            });
        }
        else {
            this._rows.forEach((row) => {
                row.isSelected = false;
            });
        }
        this.selectAllRowsChanged.emit({
            selected: this.selectAllRows,
            event: event
        });
    }
    getAllSelectedRows() {
        return (this._rows.filter((row) => {
            return row.isSelected;
        })).map((r) => r.data);
    }
    getVisibleColumns() {
        return [...this.leftPinnedColumns, ...this.viewPortColumns, ...this.rightPinnedColumns];
    }
    setColumnVisible(columns) {
        for (var i = 0; i < columns.length; i++) {
            let _index = this._columnDefs.findIndex((column) => column.key === columns[i].column);
            if (_index !== -1) {
                this._columnDefs[_index].visible = columns[i].visibility;
            }
        }
        this.setGridColumns();
    }
    expandCollapseAllRows() {
        this.expandAllRows = !this.expandAllRows;
        this._rows.forEach((row) => {
            row.isExpanded = this.expandAllRows;
        });
        this.rowExpandableEvent.emit({
            expandType: 'ALL',
            expanded: this.expandAllRows,
            data: this._rows
        });
    }
    onRowExpandCollapse(row) {
        row.isExpanded = !row.isExpanded;
        this.rowExpandableEvent.emit({
            expandType: 'SINGLE',
            expanded: row.isExpanded,
            data: row.data
        });
    }
    rowSelectionChange(event, row) {
        this.rowSelectionChanged.emit({
            data: row.data,
            event: event,
            selected: row.isSelected
        });
    }
    onColumnFilterChanged(event) {
        this.filterChanged.emit(event);
    }
    getFilteredColumns() {
        let filters = [];
        if (this.gridColumns) {
            this.gridColumns.toArray().forEach((column) => {
                const filterData = column.getFilterValue();
                if (filterData.value) {
                    filters.push(filterData);
                }
            });
        }
        return filters;
    }
    getSortedColumns() {
        let filters = [];
        if (this.gridColumns) {
            this.gridColumns.toArray().forEach((column) => {
                const filterData = column.getSortStatus();
                if (filterData) {
                    filters.push(filterData);
                }
            });
        }
        return filters;
    }
    columnSortChanged($event) {
        this.sortChanged.emit($event);
    }
    setGridData(data) {
        this.setGridRows(data);
        this.loadingData = false;
    }
    columnDragStart(event) {
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
    columnDragging(event) {
    }
    columnDragEnd(event) {
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
    reorderColumns(prevIndex, newIndex) {
        let dragColumn = this.draggableColumnsOrder[prevIndex];
        this.draggableColumnsOrder.splice(prevIndex, 1);
        this.draggableColumnsOrder.splice(newIndex, 0, dragColumn);
        this.orderViewportColumns();
    }
    isTarget(column, event) {
        let i = 0;
        const x = event.x || event.clientX;
        const y = event.y || event.clientY;
        const targets = this.document.elementsFromPoint(x, y);
        for (const key in this.positions) {
            const pos = this.positions[key];
            if (column.key !== key && targets.find((el) => el === pos.element)) {
                return { pos, i };
            }
            i++;
        }
    }
    resetColumns() {
        this.draggableColumnsOrder = [];
    }
}
FsrDataGridComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: FsrDataGridComponent, deps: [{ token: i0.ElementRef }, { token: FsrDataGridService }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
FsrDataGridComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.11", type: FsrDataGridComponent, selector: "fsr-data-grid", inputs: { ColumnDefs: "ColumnDefs", data: "data", gridOptions: "gridOptions" }, outputs: { onGridReady: "onGridReady", onRowClick: "onRowClick", selectAllRowsChanged: "selectAllRowsChanged", rowSelectionChanged: "rowSelectionChanged", columnResized: "columnResized", columnResizeEnd: "columnResizeEnd", rowExpandableEvent: "rowExpandableEvent", filterChanged: "filterChanged", sortChanged: "sortChanged", columnReorder: "columnReorder" }, queries: [{ propertyName: "expandableDetail", first: true, predicate: RowExpandableDirective, descendants: true }, { propertyName: "columnTemplates", predicate: GridColumnDirective }, { propertyName: "draggables", predicate: DraggableDirective, descendants: true }], viewQueries: [{ propertyName: "gridColumns", predicate: GridColumnComponent, descendants: true }], ngImport: i0, template: "<div class=\"fsr-grid-wrapper\">\n  <div class=\"fsr-grid-body-wrapper\" *ngIf=\"_columnDefs.length > 0\">\n    <!-- Left pinned container -->\n    <div class=\"fsr-left-pinned-container\">\n      <div class=\"fsr-header-row\">\n        <div class=\"fsr-header-rows-action-container\" *ngIf=\"_gridOptions.rowExpandable || _gridOptions.rowSelection\">\n          <div *ngIf=\"_gridOptions.rowExpandable\" (click)=\"expandCollapseAllRows()\" class=\"actionable\">\n            <i class=\"fa fa-light {{ expandAllRows ? 'fa-chevron-down' : 'fa-chevron-right'}} font-size-12px\"></i>\n          </div>\n          <div *ngIf=\"_gridOptions.rowSelection\" class=\"actionable\">\n            <input type=\"checkbox\" [(ngModel)]=\"selectAllRows\" (change)=\"selectAll($event)\"\n              class=\"form-control-xs align-middle\">\n          </div>\n        </div>\n        <fsr-grid-column *ngFor=\"let column of leftPinnedColumns\" [colDef]=\"column\" fsrResizable\n          [ngStyle]=\"{'width': column.$$width +'px'}\" [resizable]=\"column.resizable!\"\n          (onResize)=\"onWidthResize($event, column)\" (onResizeEnd)=\"onWidthResizeEnd($event, column)\"\n          (columnFilterChanged)=\"onColumnFilterChanged($event)\" (columnSortChanged)=\"columnSortChanged($event)\">\n        </fsr-grid-column>\n      </div>\n      <div class=\"fsr-viewport-rows\">\n        <div *ngFor=\"let row of _rows\">\n          <div class=\"fsr-viewport-row-data\">\n            <div class=\"fsr-viewport-rows-action-container\"  *ngIf=\"_gridOptions.rowExpandable || _gridOptions.rowSelection\">\n              <div *ngIf=\"_gridOptions.rowExpandable\" class=\"actionable\" (click)=\"onRowExpandCollapse(row)\">\n                <i class=\"fa fa-light {{ row.isExpanded ? 'fa-chevron-down' : 'fa-chevron-right'}} font-size-12px\"></i>\n              </div>\n              <div *ngIf=\"_gridOptions.rowSelection\" class=\"actionable\">\n                <input type=\"checkbox\" [(ngModel)]=\"row.isSelected\" (change)=\"rowSelectionChange($event, row)\"\n                  class=\"form-control-xs align-middle\">\n              </div>\n            </div>\n            <fsr-grid-row *ngIf=\"leftPinnedColumns.length\" [data]=\"row.data\" [isSelected]=\"row.isSelected\"\n              [ngClass]=\"{'fsr-row-selected' : row.isSelected}\" [isExpanded]=\"row.isExpanded\"\n              [columns]=\"leftPinnedColumns\" [rowSelection]=\"_gridOptions.rowSelection\"\n              [expandableDetail]=\"expandableDetail\" [expandable]=\"_gridOptions.rowExpandable\"\n              (onRowClicked)=\"onRowClicked($event)\">\n            </fsr-grid-row>\n          </div>\n          <div *ngIf=\"expandableDetail && expandableDetail.template && row.isExpanded\" class=\"row-expandable-wrapper\"\n            [style.height.px]=\"expandableDetail.expandableHeight!\">\n            <ng-template *ngIf=\"expandableDetail && expandableDetail.template\"\n              [ngTemplateOutlet]=\"expandableDetail.template\"\n              [ngTemplateOutletContext]=\"{data: row.data, expanded: row.isExpanded}\">\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Viewport container -->\n    <div class=\"fsr-viewport-container\">\n      <div class=\"fsr-header-row\">\n        <fsr-grid-column *ngFor=\"let column of viewPortColumns\" fsrResizable fsrDraggable\n        [ngStyle]=\"{'width': column.$$width +'px'}\"\n        [colDef]=\"column\"\n        [draggable]=\"column.draggable!\"\n        [dragColumn]=\"column\"\n        [resizable]=\"column.resizable!\"\n        (onResize)=\"onWidthResize($event, column)\"\n        (onResizeEnd)=\"onWidthResizeEnd($event, column)\"\n        (columnFilterChanged)=\"onColumnFilterChanged($event)\"\n        (columnSortChanged)=\"columnSortChanged($event)\"\n        (columnDragStart)=\"columnDragStart($event)\"\n        (columnDragging)=\"columnDragging($event)\"\n        (columnDragEnd)=\"columnDragEnd($event)\">\n        </fsr-grid-column>\n      </div>\n      <div class=\"fsr-viewport-rows\">\n        <div *ngFor=\"let row of _rows\">\n          <div class=\"fsr-viewport-row-data\">\n            <fsr-grid-row [data]=\"row.data\" [isSelected]=\"row.isSelected\" [isExpanded]=\"row.isExpanded\"\n              [ngClass]=\"{'fsr-row-selected' : row.isSelected}\" [columns]=\"viewPortColumns\"\n              [rowSelection]=\"_gridOptions.rowSelection\" [expandableDetail]=\"expandableDetail\"\n              [expandable]=\"_gridOptions.rowExpandable\" (onRowClicked)=\"onRowClicked($event)\">\n            </fsr-grid-row>\n          </div>\n          <div *ngIf=\"expandableDetail && expandableDetail.template && row.isExpanded\" class=\"row-expandable-wrapper\"\n            [style.height.px]=\"expandableDetail.expandableHeight!\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Right pinned container -->\n    <div class=\"fsr-right-pinned-container\">\n      <div class=\"fsr-header-row\">\n        <fsr-grid-column *ngFor=\"let column of rightPinnedColumns\" [colDef]=\"column\" fsrResizable\n          [resizable]=\"column.resizable!\" (onResize)=\"onWidthResize($event, column)\"\n          (onResizeEnd)=\"onWidthResizeEnd($event, column)\" [ngStyle]=\"{'width': column.$$width +'px'}\"\n          (columnFilterChanged)=\"onColumnFilterChanged($event)\" (columnSortChanged)=\"columnSortChanged($event)\">\n        </fsr-grid-column>\n      </div>\n      <div class=\"fsr-viewport-rows\">\n        <div *ngFor=\"let row of _rows\">\n          <div class=\"fsr-viewport-row-data\">\n            <fsr-grid-row [data]=\"row.data\" [isSelected]=\"row.isSelected\" [isExpanded]=\"row.isExpanded\"\n              [ngClass]=\"{'fsr-row-selected' : row.isSelected}\" [columns]=\"rightPinnedColumns\"\n              [rowSelection]=\"_gridOptions.rowSelection\" [expandableDetail]=\"expandableDetail\"\n              [expandable]=\"_gridOptions.rowExpandable\" (onRowClicked)=\"onRowClicked($event)\"\n              (columnFilterChanged)=\"onColumnFilterChanged($event)\">\n            </fsr-grid-row>\n          </div>\n          <div *ngIf=\"expandableDetail && expandableDetail.template && row.isExpanded\" class=\"row-expandable-wrapper\"\n            [style.height.px]=\"expandableDetail.expandableHeight!\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"fsr-shimmer-wrapper\" *ngIf=\"_columnDefs.length > 0 && loadingData\">\n    <div class=\"fsr-shimmer-row\" *ngFor=\"let row of [1,2,3,4,5]\" [ngClass]=\"_gridOptions.rowExpandable && _gridOptions.rowSelection ? 'ps-60' :  _gridOptions.rowExpandable || _gridOptions.rowSelection ? 'ps-30' : ''\">\n      <div class=\"fsr-shimmer-row-cells\">\n        <div class=\"fsr-shimmer-row-cell\" *ngFor=\"let column of leftPinnedColumns\"\n          [ngStyle]=\"{'width': column.$$width +'px'}\">\n          <div class=\"bg-shimmer content\"></div>\n        </div>\n      </div>\n\n      <div class=\"fsr-shimmer-row-cells\">\n        <div class=\"fsr-shimmer-row-cell\" *ngFor=\"let column of viewPortColumns\"\n          [ngStyle]=\"{'width': column.$$width +'px'}\">\n          <div class=\"bg-shimmer content\"></div>\n        </div>\n      </div>\n\n      <div class=\"fsr-shimmer-row-cells\">\n        <div class=\"fsr-shimmer-row-cell\" *ngFor=\"let column of rightPinnedColumns\"\n          [ngStyle]=\"{'width': column.$$width +'px'}\">\n          <div class=\"bg-shimmer content\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".fsr-grid-wrapper{width:100%;overflow:hidden;position:relative}.fsr-grid-wrapper .fsr-grid-body-wrapper{display:flex;display:-ms-flexbox;flex-direction:row}.fsr-grid-wrapper .fsr-grid-body-wrapper .fsr-header-rows-action-container,.fsr-grid-wrapper .fsr-grid-body-wrapper .fsr-viewport-rows-action-container{display:flex;display:-ms-flexbox;flex-direction:row;align-items:center;align-content:center}.fsr-grid-wrapper .fsr-grid-body-wrapper .fsr-header-rows-action-container .actionable,.fsr-grid-wrapper .fsr-grid-body-wrapper .fsr-viewport-rows-action-container .actionable{width:30px;text-align:center;cursor:pointer}.fsr-grid-wrapper .fsr-header-row{background:var(--grid-header-background-color);display:inline-flex;display:-ms-inline-flexbox;align-items:center;height:70px;flex-direction:row;border-color:var(--grid-row-border-color);margin-bottom:3px}.fsr-grid-wrapper .fsr-header-row fsr-grid-column{display:flex;padding:5px 10px;flex-direction:column;position:relative;height:60px;overflow:hidden;font-size:.8em;border-color:var(--grid-row-border-color)}.fsr-grid-wrapper .fsr-header-row fsr-grid-column.dragging{z-index:2;background:var(--grid-header-background-color);cursor:move}.fsr-grid-wrapper .fsr-viewport-container{overflow-x:auto;overflow-y:hidden}.fsr-grid-wrapper .fsr-viewport-rows{flex-direction:column}.fsr-grid-wrapper .fsr-viewport-rows .fsr-viewport-row-data{display:flex;display:-ms-flexbox;margin-bottom:3px;height:40px;background:var(--grid-row-even-background-color)}.fsr-grid-wrapper .fsr-viewport-rows fsr-grid-row{height:40px;flex-direction:row;display:flex;display:-ms-flexbox;flex:0 0 auto;background:var(--grid-row-even-background-color)}.fsr-grid-wrapper .fsr-viewport-rows fsr-grid-row.fsr-row-selected{background:#f9f9f9}.fsr-grid-wrapper .fsr-shimmer-wrapper{overflow-x:auto}.fsr-grid-wrapper .fsr-shimmer-wrapper .fsr-shimmer-row{height:40px;display:flex;display:-webkit-flex;flex-direction:row;align-items:center;margin-bottom:5px;background:var(--grid-row-even-background-color)}.fsr-grid-wrapper .fsr-shimmer-wrapper .fsr-shimmer-row .fsr-shimmer-row-cells{flex-direction:row;display:flex;display:-ms-flexbox}.fsr-grid-wrapper .fsr-shimmer-wrapper .fsr-shimmer-row .fsr-shimmer-row-cells .fsr-shimmer-row-cell{padding:0 10px}.fsr-grid-wrapper .fsr-shimmer-wrapper .fsr-shimmer-row .fsr-shimmer-row-cells .fsr-shimmer-row-cell .bg-shimmer{height:10px}.fsr-grid-wrapper .ps-30{padding-left:30px}.fsr-grid-wrapper .ps-60{padding-left:60px}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: GridColumnComponent, selector: "fsr-grid-column", inputs: ["colDef"], outputs: ["columnFilterChanged", "columnSortChanged"] }, { kind: "component", type: GridRowComponent, selector: "fsr-grid-row", inputs: ["columns", "expandable", "data", "rowSelection", "isSelected", "expandableDetail", "isExpanded"], outputs: ["rowSelectionChange", "onRowClicked", "onRowExpandCollapse"] }, { kind: "directive", type: ResizableDirective, selector: "[fsrResizable]", inputs: ["resizable"], outputs: ["onResize", "onResizeEnd"] }, { kind: "directive", type: DraggableDirective, selector: "[fsrDraggable]", inputs: ["dragColumn", "draggable"], outputs: ["columnDragStart", "columnDragging", "columnDragEnd"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: FsrDataGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fsr-data-grid', template: "<div class=\"fsr-grid-wrapper\">\n  <div class=\"fsr-grid-body-wrapper\" *ngIf=\"_columnDefs.length > 0\">\n    <!-- Left pinned container -->\n    <div class=\"fsr-left-pinned-container\">\n      <div class=\"fsr-header-row\">\n        <div class=\"fsr-header-rows-action-container\" *ngIf=\"_gridOptions.rowExpandable || _gridOptions.rowSelection\">\n          <div *ngIf=\"_gridOptions.rowExpandable\" (click)=\"expandCollapseAllRows()\" class=\"actionable\">\n            <i class=\"fa fa-light {{ expandAllRows ? 'fa-chevron-down' : 'fa-chevron-right'}} font-size-12px\"></i>\n          </div>\n          <div *ngIf=\"_gridOptions.rowSelection\" class=\"actionable\">\n            <input type=\"checkbox\" [(ngModel)]=\"selectAllRows\" (change)=\"selectAll($event)\"\n              class=\"form-control-xs align-middle\">\n          </div>\n        </div>\n        <fsr-grid-column *ngFor=\"let column of leftPinnedColumns\" [colDef]=\"column\" fsrResizable\n          [ngStyle]=\"{'width': column.$$width +'px'}\" [resizable]=\"column.resizable!\"\n          (onResize)=\"onWidthResize($event, column)\" (onResizeEnd)=\"onWidthResizeEnd($event, column)\"\n          (columnFilterChanged)=\"onColumnFilterChanged($event)\" (columnSortChanged)=\"columnSortChanged($event)\">\n        </fsr-grid-column>\n      </div>\n      <div class=\"fsr-viewport-rows\">\n        <div *ngFor=\"let row of _rows\">\n          <div class=\"fsr-viewport-row-data\">\n            <div class=\"fsr-viewport-rows-action-container\"  *ngIf=\"_gridOptions.rowExpandable || _gridOptions.rowSelection\">\n              <div *ngIf=\"_gridOptions.rowExpandable\" class=\"actionable\" (click)=\"onRowExpandCollapse(row)\">\n                <i class=\"fa fa-light {{ row.isExpanded ? 'fa-chevron-down' : 'fa-chevron-right'}} font-size-12px\"></i>\n              </div>\n              <div *ngIf=\"_gridOptions.rowSelection\" class=\"actionable\">\n                <input type=\"checkbox\" [(ngModel)]=\"row.isSelected\" (change)=\"rowSelectionChange($event, row)\"\n                  class=\"form-control-xs align-middle\">\n              </div>\n            </div>\n            <fsr-grid-row *ngIf=\"leftPinnedColumns.length\" [data]=\"row.data\" [isSelected]=\"row.isSelected\"\n              [ngClass]=\"{'fsr-row-selected' : row.isSelected}\" [isExpanded]=\"row.isExpanded\"\n              [columns]=\"leftPinnedColumns\" [rowSelection]=\"_gridOptions.rowSelection\"\n              [expandableDetail]=\"expandableDetail\" [expandable]=\"_gridOptions.rowExpandable\"\n              (onRowClicked)=\"onRowClicked($event)\">\n            </fsr-grid-row>\n          </div>\n          <div *ngIf=\"expandableDetail && expandableDetail.template && row.isExpanded\" class=\"row-expandable-wrapper\"\n            [style.height.px]=\"expandableDetail.expandableHeight!\">\n            <ng-template *ngIf=\"expandableDetail && expandableDetail.template\"\n              [ngTemplateOutlet]=\"expandableDetail.template\"\n              [ngTemplateOutletContext]=\"{data: row.data, expanded: row.isExpanded}\">\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Viewport container -->\n    <div class=\"fsr-viewport-container\">\n      <div class=\"fsr-header-row\">\n        <fsr-grid-column *ngFor=\"let column of viewPortColumns\" fsrResizable fsrDraggable\n        [ngStyle]=\"{'width': column.$$width +'px'}\"\n        [colDef]=\"column\"\n        [draggable]=\"column.draggable!\"\n        [dragColumn]=\"column\"\n        [resizable]=\"column.resizable!\"\n        (onResize)=\"onWidthResize($event, column)\"\n        (onResizeEnd)=\"onWidthResizeEnd($event, column)\"\n        (columnFilterChanged)=\"onColumnFilterChanged($event)\"\n        (columnSortChanged)=\"columnSortChanged($event)\"\n        (columnDragStart)=\"columnDragStart($event)\"\n        (columnDragging)=\"columnDragging($event)\"\n        (columnDragEnd)=\"columnDragEnd($event)\">\n        </fsr-grid-column>\n      </div>\n      <div class=\"fsr-viewport-rows\">\n        <div *ngFor=\"let row of _rows\">\n          <div class=\"fsr-viewport-row-data\">\n            <fsr-grid-row [data]=\"row.data\" [isSelected]=\"row.isSelected\" [isExpanded]=\"row.isExpanded\"\n              [ngClass]=\"{'fsr-row-selected' : row.isSelected}\" [columns]=\"viewPortColumns\"\n              [rowSelection]=\"_gridOptions.rowSelection\" [expandableDetail]=\"expandableDetail\"\n              [expandable]=\"_gridOptions.rowExpandable\" (onRowClicked)=\"onRowClicked($event)\">\n            </fsr-grid-row>\n          </div>\n          <div *ngIf=\"expandableDetail && expandableDetail.template && row.isExpanded\" class=\"row-expandable-wrapper\"\n            [style.height.px]=\"expandableDetail.expandableHeight!\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Right pinned container -->\n    <div class=\"fsr-right-pinned-container\">\n      <div class=\"fsr-header-row\">\n        <fsr-grid-column *ngFor=\"let column of rightPinnedColumns\" [colDef]=\"column\" fsrResizable\n          [resizable]=\"column.resizable!\" (onResize)=\"onWidthResize($event, column)\"\n          (onResizeEnd)=\"onWidthResizeEnd($event, column)\" [ngStyle]=\"{'width': column.$$width +'px'}\"\n          (columnFilterChanged)=\"onColumnFilterChanged($event)\" (columnSortChanged)=\"columnSortChanged($event)\">\n        </fsr-grid-column>\n      </div>\n      <div class=\"fsr-viewport-rows\">\n        <div *ngFor=\"let row of _rows\">\n          <div class=\"fsr-viewport-row-data\">\n            <fsr-grid-row [data]=\"row.data\" [isSelected]=\"row.isSelected\" [isExpanded]=\"row.isExpanded\"\n              [ngClass]=\"{'fsr-row-selected' : row.isSelected}\" [columns]=\"rightPinnedColumns\"\n              [rowSelection]=\"_gridOptions.rowSelection\" [expandableDetail]=\"expandableDetail\"\n              [expandable]=\"_gridOptions.rowExpandable\" (onRowClicked)=\"onRowClicked($event)\"\n              (columnFilterChanged)=\"onColumnFilterChanged($event)\">\n            </fsr-grid-row>\n          </div>\n          <div *ngIf=\"expandableDetail && expandableDetail.template && row.isExpanded\" class=\"row-expandable-wrapper\"\n            [style.height.px]=\"expandableDetail.expandableHeight!\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"fsr-shimmer-wrapper\" *ngIf=\"_columnDefs.length > 0 && loadingData\">\n    <div class=\"fsr-shimmer-row\" *ngFor=\"let row of [1,2,3,4,5]\" [ngClass]=\"_gridOptions.rowExpandable && _gridOptions.rowSelection ? 'ps-60' :  _gridOptions.rowExpandable || _gridOptions.rowSelection ? 'ps-30' : ''\">\n      <div class=\"fsr-shimmer-row-cells\">\n        <div class=\"fsr-shimmer-row-cell\" *ngFor=\"let column of leftPinnedColumns\"\n          [ngStyle]=\"{'width': column.$$width +'px'}\">\n          <div class=\"bg-shimmer content\"></div>\n        </div>\n      </div>\n\n      <div class=\"fsr-shimmer-row-cells\">\n        <div class=\"fsr-shimmer-row-cell\" *ngFor=\"let column of viewPortColumns\"\n          [ngStyle]=\"{'width': column.$$width +'px'}\">\n          <div class=\"bg-shimmer content\"></div>\n        </div>\n      </div>\n\n      <div class=\"fsr-shimmer-row-cells\">\n        <div class=\"fsr-shimmer-row-cell\" *ngFor=\"let column of rightPinnedColumns\"\n          [ngStyle]=\"{'width': column.$$width +'px'}\">\n          <div class=\"bg-shimmer content\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".fsr-grid-wrapper{width:100%;overflow:hidden;position:relative}.fsr-grid-wrapper .fsr-grid-body-wrapper{display:flex;display:-ms-flexbox;flex-direction:row}.fsr-grid-wrapper .fsr-grid-body-wrapper .fsr-header-rows-action-container,.fsr-grid-wrapper .fsr-grid-body-wrapper .fsr-viewport-rows-action-container{display:flex;display:-ms-flexbox;flex-direction:row;align-items:center;align-content:center}.fsr-grid-wrapper .fsr-grid-body-wrapper .fsr-header-rows-action-container .actionable,.fsr-grid-wrapper .fsr-grid-body-wrapper .fsr-viewport-rows-action-container .actionable{width:30px;text-align:center;cursor:pointer}.fsr-grid-wrapper .fsr-header-row{background:var(--grid-header-background-color);display:inline-flex;display:-ms-inline-flexbox;align-items:center;height:70px;flex-direction:row;border-color:var(--grid-row-border-color);margin-bottom:3px}.fsr-grid-wrapper .fsr-header-row fsr-grid-column{display:flex;padding:5px 10px;flex-direction:column;position:relative;height:60px;overflow:hidden;font-size:.8em;border-color:var(--grid-row-border-color)}.fsr-grid-wrapper .fsr-header-row fsr-grid-column.dragging{z-index:2;background:var(--grid-header-background-color);cursor:move}.fsr-grid-wrapper .fsr-viewport-container{overflow-x:auto;overflow-y:hidden}.fsr-grid-wrapper .fsr-viewport-rows{flex-direction:column}.fsr-grid-wrapper .fsr-viewport-rows .fsr-viewport-row-data{display:flex;display:-ms-flexbox;margin-bottom:3px;height:40px;background:var(--grid-row-even-background-color)}.fsr-grid-wrapper .fsr-viewport-rows fsr-grid-row{height:40px;flex-direction:row;display:flex;display:-ms-flexbox;flex:0 0 auto;background:var(--grid-row-even-background-color)}.fsr-grid-wrapper .fsr-viewport-rows fsr-grid-row.fsr-row-selected{background:#f9f9f9}.fsr-grid-wrapper .fsr-shimmer-wrapper{overflow-x:auto}.fsr-grid-wrapper .fsr-shimmer-wrapper .fsr-shimmer-row{height:40px;display:flex;display:-webkit-flex;flex-direction:row;align-items:center;margin-bottom:5px;background:var(--grid-row-even-background-color)}.fsr-grid-wrapper .fsr-shimmer-wrapper .fsr-shimmer-row .fsr-shimmer-row-cells{flex-direction:row;display:flex;display:-ms-flexbox}.fsr-grid-wrapper .fsr-shimmer-wrapper .fsr-shimmer-row .fsr-shimmer-row-cells .fsr-shimmer-row-cell{padding:0 10px}.fsr-grid-wrapper .fsr-shimmer-wrapper .fsr-shimmer-row .fsr-shimmer-row-cells .fsr-shimmer-row-cell .bg-shimmer{height:10px}.fsr-grid-wrapper .ps-30{padding-left:30px}.fsr-grid-wrapper .ps-60{padding-left:60px}\n"] }]
        }], ctorParameters: function () {
        return [{ type: i0.ElementRef }, { type: FsrDataGridService }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }];
    }, propDecorators: { ColumnDefs: [{
                type: Input
            }], data: [{
                type: Input
            }], gridOptions: [{
                type: Input
            }], onGridReady: [{
                type: Output
            }], onRowClick: [{
                type: Output
            }], selectAllRowsChanged: [{
                type: Output
            }], rowSelectionChanged: [{
                type: Output
            }], columnResized: [{
                type: Output
            }], columnResizeEnd: [{
                type: Output
            }], rowExpandableEvent: [{
                type: Output
            }], filterChanged: [{
                type: Output
            }], sortChanged: [{
                type: Output
            }], columnReorder: [{
                type: Output
            }], columnTemplates: [{
                type: ContentChildren,
                args: [GridColumnDirective]
            }], gridColumns: [{
                type: ViewChildren,
                args: [GridColumnComponent]
            }], draggables: [{
                type: ContentChildren,
                args: [DraggableDirective, { descendants: true }]
            }], expandableDetail: [{
                type: ContentChild,
                args: [RowExpandableDirective]
            }] } });

class FsrDataGridModule {
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

/*
 * Public API Surface of fsr-data-grid
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CellTemplateDirective, FsrDataGridComponent, FsrDataGridModule, FsrDataGridService, GridColumnDirective, HeaderCellDirective, RowExpandableDirective, RowExpandableTemplateDirective };
//# sourceMappingURL=fsr-data-grid.mjs.map
