import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FsrColumnDef } from '../interfaces/fsr-column';
import { columnDragEvent } from '../interfaces/grid-events';

@Directive({
  selector: '[fsrDraggable]'
})
export class DraggableDirective implements OnDestroy {
  @Input() dragColumn!: FsrColumnDef;
  @Input() draggable!: boolean;

  @Output() columnDragStart = new EventEmitter<columnDragEvent>();
  @Output() columnDragging = new EventEmitter<columnDragEvent>();
  @Output() columnDragEnd = new EventEmitter<columnDragEvent>();

  element: HTMLElement;
  isDragging: boolean = false;
  subscription?: Subscription;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent): void {
    const isDragElm = (<HTMLElement>event.target).classList.contains('fsrDraggableColumn');

    if (isDragElm && this.draggable) {
      event.preventDefault();
      this.isDragging = true;
      this.dragColumn.$$dragging = true;
      const mouseDownPos = { x: event.clientX, y: event.clientY };

      const mouseup = fromEvent(document, 'mouseup');
      this.subscription = mouseup.subscribe((ev: any) => this.onMouseup(ev));

      const mouseMoveSub = fromEvent(document, 'mousemove')
        .pipe(takeUntil(mouseup))
        .subscribe((ev: any) => this.move(ev, mouseDownPos));

      this.subscription.add(mouseMoveSub);

      this.columnDragStart.emit({
        event,
        element: this.element,
        column: this.dragColumn
      });
    }
  }

  move(event: MouseEvent, mouseDownPos: { x: number; y: number }): void {
    if (!this.isDragging) return;

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

  onMouseup(event: MouseEvent) {
    if (!this.isDragging) return;

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

  ngOnDestroy(): void {
    this._destroySubscription();
  }

  private _destroySubscription(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }

}
