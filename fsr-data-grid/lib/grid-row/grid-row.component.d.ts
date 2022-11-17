import { EventEmitter, OnInit } from '@angular/core';
import { FsrColumnDef } from '../interfaces/fsr-column';
import { onRowClickEvent, rowExpandableEvent, rowSelectionChangedEvent } from '../interfaces/grid-events';
import * as i0 from "@angular/core";
export declare class GridRowComponent implements OnInit {
    columns: FsrColumnDef[];
    expandable: boolean | undefined;
    _data: any;
    set data(_data: any);
    get data(): any;
    rowSelection: boolean | undefined;
    rowSelectionChange: EventEmitter<rowSelectionChangedEvent>;
    onRowClicked: EventEmitter<onRowClickEvent>;
    onRowExpandCollapse: EventEmitter<rowExpandableEvent>;
    isSelected: boolean;
    expandableDetail?: any;
    _isExpanded: boolean;
    expandableContext: any;
    set isExpanded(_isExpanded: boolean);
    get isExpanded(): boolean;
    constructor();
    private setRowContext;
    ngOnInit(): void;
    rowSelectionChanged(event: any): void;
    rowExpand(): void;
    onClicked(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridRowComponent, "fsr-grid-row", never, { "columns": "columns"; "expandable": "expandable"; "data": "data"; "rowSelection": "rowSelection"; "isSelected": "isSelected"; "expandableDetail": "expandableDetail"; "isExpanded": "isExpanded"; }, { "rowSelectionChange": "rowSelectionChange"; "onRowClicked": "onRowClicked"; "onRowExpandCollapse": "onRowExpandCollapse"; }, never, never, false>;
}
