import { ElementRef, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ResizableDirective {
    resizable: boolean;
    onResize: EventEmitter<number>;
    onResizeEnd: EventEmitter<number>;
    resizableElement: HTMLElement;
    resizing: boolean;
    subscription?: Subscription;
    constructor(element: ElementRef);
    onMousedown(event: MouseEvent): void;
    private onResizeStop;
    private resizeElement;
    private calculateWidth;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResizableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ResizableDirective, "[fsrResizable]", never, { "resizable": "resizable"; }, { "onResize": "onResize"; "onResizeEnd": "onResizeEnd"; }, never, never, false>;
}
