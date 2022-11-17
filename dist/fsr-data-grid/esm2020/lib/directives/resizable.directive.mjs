import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class ResizableDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Zzci1kYXRhLWdyaWQvc3JjL2xpYi9kaXJlY3RpdmVzL3Jlc2l6YWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUszQyxNQUFNLE9BQU8sa0JBQWtCO0lBUTdCLFlBQVksT0FBbUI7UUFQdEIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUN6QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHbkQsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUd4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNoRCxDQUFDO0lBR0QsV0FBVyxDQUFDLEtBQWlCO1FBQzNCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLGNBQWMsR0FBaUIsS0FBSyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDekYsSUFBRyxjQUFjLEVBQUU7Z0JBQ2pCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7Z0JBQ3JELElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQy9CLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBZ0IsRUFBRSxFQUFFLENBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEYsSUFBSSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ2pGLFNBQVMsQ0FBQyxDQUFDLGNBQW1CLEVBQUUsRUFBRTtvQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDcEYsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUMzQztTQUNGO0lBQ0gsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFZO1FBQy9CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVPLGFBQWEsQ0FBQyxLQUFZO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxjQUFjLENBQUMsS0FBaUIsRUFBRSxZQUFvQixFQUFFLFVBQWtCO1FBQ2hGLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzdDLE9BQU8sWUFBWSxHQUFHLFNBQVMsQ0FBQTtJQUNqQyxDQUFDOztnSEEvQ1Usa0JBQWtCO29HQUFsQixrQkFBa0I7NEZBQWxCLGtCQUFrQjtrQkFIOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjtpR0FFVSxTQUFTO3NCQUFqQixLQUFLO2dCQUNJLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csV0FBVztzQkFBcEIsTUFBTTtnQkFVUCxXQUFXO3NCQURWLFlBQVk7dUJBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZzclJlc2l6YWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6YWJsZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHJlc2l6YWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBPdXRwdXQoKSBvblJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgb25SZXNpemVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICByZXNpemFibGVFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5yZXNpemFibGVFbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXNpemFibGUpIHtcbiAgICAgIGxldCBpc1Jlc2l6ZUhhbmRsZSA9ICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zzci1yZXNpemUtaGFuZGxlJyk7XG4gICAgICBpZihpc1Jlc2l6ZUhhbmRsZSkge1xuICAgICAgICBsZXQgZWxlbWVudFdpZHRoID0gdGhpcy5yZXNpemFibGVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBsZXQgbW91c2VEb3duWCA9IGV2ZW50LnNjcmVlblg7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBsZXQgbW91c2V1cCA9IGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNldXAnKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBtb3VzZXVwLnN1YnNjcmliZSgobW91c2V1cEV2ZW50OmFueSkgPT5cbiAgICAgICAgICB0aGlzLm9uUmVzaXplU3RvcCh0aGlzLmNhbGN1bGF0ZVdpZHRoKG1vdXNldXBFdmVudCwgZWxlbWVudFdpZHRoLCBtb3VzZURvd25YKSkpO1xuICAgICAgICBsZXQgcmVzaXplU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2Vtb3ZlJykucGlwZSh0YWtlVW50aWwobW91c2V1cCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKG1vdXNlTW92ZUV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc2l6ZUVsZW1lbnQodGhpcy5jYWxjdWxhdGVXaWR0aChtb3VzZU1vdmVFdmVudCwgZWxlbWVudFdpZHRoLCBtb3VzZURvd25YKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQocmVzaXplU3Vic2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uUmVzaXplU3RvcCh3aWR0aDpudW1iZXIpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5vblJlc2l6ZUVuZC5lbWl0KHdpZHRoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplRWxlbWVudCh3aWR0aDpudW1iZXIpIHtcbiAgICB0aGlzLm9uUmVzaXplLmVtaXQod2lkdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVXaWR0aChldmVudDogTW91c2VFdmVudCwgZWxlbWVudFdpZHRoOiBudW1iZXIsIG1vdXNlRG93blg6IG51bWJlcikge1xuICAgIGNvbnN0IG1vdmVtZW50WCA9IGV2ZW50LnNjcmVlblggLSBtb3VzZURvd25YO1xuICAgIHJldHVybiBlbGVtZW50V2lkdGggKyBtb3ZlbWVudFhcbiAgfVxuXG5cbn1cbiJdfQ==