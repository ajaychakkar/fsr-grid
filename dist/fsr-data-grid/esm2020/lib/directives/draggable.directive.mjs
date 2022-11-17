import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class DraggableDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Zzci1kYXRhLWdyaWQvc3JjL2xpYi9kaXJlY3RpdmVzL2RyYWdnYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQU8zQyxNQUFNLE9BQU8sa0JBQWtCO0lBWTdCLFlBQVksT0FBbUI7UUFSckIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUN0RCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ3JELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFHOUQsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUkxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUdELFdBQVcsQ0FBQyxLQUFpQjtRQUMzQixNQUFNLFNBQVMsR0FBaUIsS0FBSyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFdkYsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMvQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFF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QU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTTtnQkFXUCxXQUFXO3NCQURWLFlBQVk7dUJBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRnNyQ29sdW1uRGVmIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9mc3ItY29sdW1uJztcbmltcG9ydCB7IGNvbHVtbkRyYWdFdmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvZ3JpZC1ldmVudHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZnNyRHJhZ2dhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZHJhZ0NvbHVtbiE6IEZzckNvbHVtbkRlZjtcbiAgQElucHV0KCkgZHJhZ2dhYmxlITogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgY29sdW1uRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxjb2x1bW5EcmFnRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBjb2x1bW5EcmFnZ2luZyA9IG5ldyBFdmVudEVtaXR0ZXI8Y29sdW1uRHJhZ0V2ZW50PigpO1xuICBAT3V0cHV0KCkgY29sdW1uRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8Y29sdW1uRHJhZ0V2ZW50PigpO1xuXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBpc0RyYWdnaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHN1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpc0RyYWdFbG0gPSAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdmc3JEcmFnZ2FibGVDb2x1bW4nKTtcblxuICAgIGlmIChpc0RyYWdFbG0gJiYgdGhpcy5kcmFnZ2FibGUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5kcmFnQ29sdW1uLiQkZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgbW91c2VEb3duUG9zID0geyB4OiBldmVudC5jbGllbnRYLCB5OiBldmVudC5jbGllbnRZIH07XG5cbiAgICAgIGNvbnN0IG1vdXNldXAgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZXVwJyk7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG1vdXNldXAuc3Vic2NyaWJlKChldjogYW55KSA9PiB0aGlzLm9uTW91c2V1cChldikpO1xuXG4gICAgICBjb25zdCBtb3VzZU1vdmVTdWIgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZW1vdmUnKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwobW91c2V1cCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2OiBhbnkpID0+IHRoaXMubW92ZShldiwgbW91c2VEb3duUG9zKSk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChtb3VzZU1vdmVTdWIpO1xuXG4gICAgICB0aGlzLmNvbHVtbkRyYWdTdGFydC5lbWl0KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgY29sdW1uOiB0aGlzLmRyYWdDb2x1bW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQsIG1vdXNlRG93blBvczogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcpIHJldHVybjtcblxuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gbW91c2VEb3duUG9zLng7XG4gICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25Qb3MueTtcblxuICAgIGlmICh0aGlzLmRyYWdnYWJsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgdGhpcy5jb2x1bW5EcmFnZ2luZy5lbWl0KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgY29sdW1uOiB0aGlzLmRyYWdDb2x1bW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2V1cChldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuXG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9kZXN0cm95U3Vic2NyaXB0aW9uKCk7XG4gICAgICB0aGlzLmNvbHVtbkRyYWdFbmQuZW1pdCh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIGNvbHVtbjogdGhpcy5kcmFnQ29sdW1uXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95U3Vic2NyaXB0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95U3Vic2NyaXB0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=