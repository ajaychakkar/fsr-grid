import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[fsrResizable]'
})
export class ResizableDirective {
  @Input() resizable: boolean = true;
  @Output() onResize = new EventEmitter<number>();
  @Output() onResizeEnd = new EventEmitter<number>();

  resizableElement: HTMLElement;
  resizing: boolean = false;
  subscription?: Subscription;
  constructor(element: ElementRef) {
    this.resizableElement = element.nativeElement;
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent): void {
    if (this.resizable) {
      let isResizeHandle = (<HTMLElement>event.target).classList.contains('fsr-resize-handle');
      if(isResizeHandle) {
        let elementWidth = this.resizableElement.clientWidth;
        let mouseDownX = event.screenX;
        event.stopPropagation();
        let mouseup = fromEvent(document, 'mouseup');
        this.subscription = mouseup.subscribe((mouseupEvent:any) =>
          this.onResizeStop(this.calculateWidth(mouseupEvent, elementWidth, mouseDownX)));
        let resizeSubscription = fromEvent(document, 'mousemove').pipe(takeUntil(mouseup))
        .subscribe((mouseMoveEvent: any) => {
          this.resizeElement(this.calculateWidth(mouseMoveEvent, elementWidth, mouseDownX));
        });
        this.subscription.add(resizeSubscription);
      }
    }
  }

  private onResizeStop(width:number) {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
    this.onResizeEnd.emit(width);
  }

  private resizeElement(width:number) {
    this.onResize.emit(width);
  }

  private calculateWidth(event: MouseEvent, elementWidth: number, mouseDownX: number) {
    const movementX = event.screenX - mouseDownX;
    return elementWidth + movementX
  }


}
