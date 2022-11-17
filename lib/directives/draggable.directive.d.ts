import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FsrColumnDef } from '../interfaces/fsr-column';
import { columnDragEvent } from '../interfaces/grid-events';
import * as i0 from "@angular/core";
export declare class DraggableDirective implements OnDestroy {
    dragColumn: FsrColumnDef;
    draggable: boolean;
    columnDragStart: EventEmitter<columnDragEvent>;
    columnDragging: EventEmitter<columnDragEvent>;
    columnDragEnd: EventEmitter<columnDragEvent>;
    element: HTMLElement;
    isDragging: boolean;
    subscription?: Subscription;
    constructor(element: ElementRef);
    onMousedown(event: MouseEvent): void;
    move(event: MouseEvent, mouseDownPos: {
        x: number;
        y: number;
    }): void;
    onMouseup(event: MouseEvent): void;
    ngOnDestroy(): void;
    private _destroySubscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<DraggableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DraggableDirective, "[fsrDraggable]", never, { "dragColumn": "dragColumn"; "draggable": "draggable"; }, { "columnDragStart": "columnDragStart"; "columnDragging": "columnDragging"; "columnDragEnd": "columnDragEnd"; }, never, never, false>;
}
