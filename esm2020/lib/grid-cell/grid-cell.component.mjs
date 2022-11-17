import { Component, Input, ViewChild } from '@angular/core';
import { GridContainerDirective } from '../grid-container.directive';
import * as i0 from "@angular/core";
import * as i1 from "../grid-container.directive";
export class GridCellComponent {
    constructor() { }
    ngOnDestroy() {
        this.clearContainer();
    }
    ngOnInit() {
        this.clearContainer();
        this.componentRef = this.fsrCellViewContainer.viewContainerRef.createComponent(this.colDef.renderer);
        this.componentRef.instance.value = this.value;
        if (this.colDef.rendererParams) {
            for (const key in this.colDef.rendererParams) {
                this.componentRef.instance[key] = this.colDef.rendererParams[key];
            }
        }
    }
    clearContainer() {
        const viewContainerRef = this.fsrCellViewContainer.viewContainerRef;
        viewContainerRef.clear();
    }
}
GridCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
GridCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.11", type: GridCellComponent, selector: "fsr-grid-cell", inputs: { colDef: "colDef", value: "value" }, viewQueries: [{ propertyName: "fsrCellViewContainer", first: true, predicate: GridContainerDirective, descendants: true, static: true }], ngImport: i0, template: "<div>\n  <ng-container fsrGridContainer>\n  </ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.GridContainerDirective, selector: "[fsrGridContainer]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fsr-grid-cell', template: "<div>\n  <ng-container fsrGridContainer>\n  </ng-container>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { colDef: [{
                type: Input
            }], value: [{
                type: Input
            }], fsrCellViewContainer: [{
                type: ViewChild,
                args: [GridContainerDirective, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Zzci1kYXRhLWdyaWQvc3JjL2xpYi9ncmlkLWNlbGwvZ3JpZC1jZWxsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Zzci1kYXRhLWdyaWQvc3JjL2xpYi9ncmlkLWNlbGwvZ3JpZC1jZWxsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQVFyRSxNQUFNLE9BQU8saUJBQWlCO0lBSzVCLGdCQUFnQixDQUFDO0lBQ2pCLFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtZQUM3QixLQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuRTtTQUNGO0lBQ0gsQ0FBQztJQUVPLGNBQWM7UUFDcEIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7UUFDcEUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7K0dBeEJVLGlCQUFpQjttR0FBakIsaUJBQWlCLHlKQUdqQixzQkFBc0IsOERDWm5DLHVFQUlBOzRGREthLGlCQUFpQjtrQkFMN0IsU0FBUzsrQkFDRSxlQUFlOzBFQUtoQixNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUM2QyxvQkFBb0I7c0JBQXRFLFNBQVM7dUJBQUMsc0JBQXNCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JpZENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4uL2dyaWQtY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGc3JDb2x1bW5EZWYgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Zzci1jb2x1bW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmc3ItZ3JpZC1jZWxsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dyaWQtY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dyaWQtY2VsbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjb2xEZWYhOkZzckNvbHVtbkRlZjtcbiAgQElucHV0KCkgdmFsdWU6YW55XG4gIEBWaWV3Q2hpbGQoR3JpZENvbnRhaW5lckRpcmVjdGl2ZSwge3N0YXRpYzogdHJ1ZX0pIGZzckNlbGxWaWV3Q29udGFpbmVyITogR3JpZENvbnRhaW5lckRpcmVjdGl2ZTtcbiAgY29tcG9uZW50UmVmOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJDb250YWluZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJDb250YWluZXIoKTtcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuZnNyQ2VsbFZpZXdDb250YWluZXIudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQodGhpcy5jb2xEZWYucmVuZGVyZXIpO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBpZih0aGlzLmNvbERlZi5yZW5kZXJlclBhcmFtcykge1xuICAgICAgZm9yKGNvbnN0IGtleSBpbiB0aGlzLmNvbERlZi5yZW5kZXJlclBhcmFtcykge1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gdGhpcy5jb2xEZWYucmVuZGVyZXJQYXJhbXNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmZzckNlbGxWaWV3Q29udGFpbmVyLnZpZXdDb250YWluZXJSZWY7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICB9XG5cbn1cbiIsIjxkaXY+XG4gIDxuZy1jb250YWluZXIgZnNyR3JpZENvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==