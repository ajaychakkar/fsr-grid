import { FsrColumnDef } from "./fsr-column";
export interface onGridReadyEvent {
    api: any;
}
export interface onRowClickEvent {
    data: any;
    event: MouseEvent;
}
export interface rowSelectionChangedEvent {
    selected: boolean;
    data: any;
    event: MouseEvent;
}
export interface selectAllRowsChangeEvent {
    selected: boolean;
    event: MouseEvent;
}
export interface fsrColumnResizeEvent {
    column: FsrColumnDef;
    event?: MouseEvent;
}
export interface fsrColumnReorderEvent {
    column: FsrColumnDef;
    event?: MouseEvent;
}
export interface columnVisibilityEvent {
    column: string;
    visibility: boolean;
}
export interface rowExpandableEvent {
    data: any;
    expanded: boolean;
    expandType: 'ALL' | 'SINGLE';
}
export interface filterChangedEvent {
    value: any;
    column: FsrColumnDef;
}
export interface sortChangedEvent {
    sort: 'asc' | 'desc' | null;
    column: FsrColumnDef;
}
export interface columnDragEvent {
    column: FsrColumnDef;
    event: MouseEvent;
    element: HTMLElement;
}
export interface columnReorderEvent {
    column: FsrColumnDef;
    event: MouseEvent;
    newPos: number;
    prevPos: number;
}
