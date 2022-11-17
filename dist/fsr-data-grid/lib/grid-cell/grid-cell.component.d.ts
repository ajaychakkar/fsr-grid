import { OnDestroy, OnInit } from '@angular/core';
import { GridContainerDirective } from '../grid-container.directive';
import { FsrColumnDef } from '../interfaces/fsr-column';
import * as i0 from "@angular/core";
export declare class GridCellComponent implements OnInit, OnDestroy {
    colDef: FsrColumnDef;
    value: any;
    fsrCellViewContainer: GridContainerDirective;
    componentRef: any;
    constructor();
    ngOnDestroy(): void;
    ngOnInit(): void;
    private clearContainer;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridCellComponent, "fsr-grid-cell", never, { "colDef": "colDef"; "value": "value"; }, {}, never, never, false>;
}
