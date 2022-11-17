import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { GridContainerDirective } from '../grid-container.directive';
import { FsrColumnDef } from '../interfaces/fsr-column';
import { filterChangedEvent, sortChangedEvent } from '../interfaces/grid-events';
import * as i0 from "@angular/core";
export declare class GridColumnComponent implements OnInit, OnDestroy {
    colDef: FsrColumnDef;
    columnFilterChanged: EventEmitter<filterChangedEvent>;
    columnSortChanged: EventEmitter<sortChangedEvent>;
    fsrCellViewContainer: GridContainerDirective;
    componentRef: any;
    element: any;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
    getFilterValue(): filterChangedEvent;
    private clearContainer;
    sortChange(): void;
    getSortStatus(): sortChangedEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridColumnComponent, "fsr-grid-column", never, { "colDef": "colDef"; }, { "columnFilterChanged": "columnFilterChanged"; "columnSortChanged": "columnSortChanged"; }, never, never, false>;
}
