import { ContentChild, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { RowExpandableTemplateDirective } from './row-expandable-template.directive';
import * as i0 from "@angular/core";
export class RowExpandableDirective {
    constructor() {
        this.expandableHeight = 100;
        /**
         * Row expandable toggle.
         */
        this.toggle = new EventEmitter();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle row expansion
     */
    toggleExpandRow(row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    }
    /**
     * Method to expand all rows
     */
    expandAllRows() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * Method to collase all rows
     */
    collapseAllRows() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
RowExpandableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: RowExpandableDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RowExpandableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.11", type: RowExpandableDirective, selector: "[fsrRowExpandable]", inputs: { expandableHeight: "expandableHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" }, queries: [{ propertyName: "_templateQuery", first: true, predicate: RowExpandableTemplateDirective, descendants: true, read: TemplateRef, static: true }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: RowExpandableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fsrRowExpandable]'
                }]
        }], propDecorators: { expandableHeight: [{
                type: Input
            }], _templateInput: [{
                type: Input,
                args: ['template']
            }], _templateQuery: [{
                type: ContentChild,
                args: [RowExpandableTemplateDirective, { read: TemplateRef, static: true }]
            }], toggle: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWV4cGFuZGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZnNyLWRhdGEtZ3JpZC9zcmMvbGliL2RpcmVjdGl2ZXMvcm93LWV4cGFuZGFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFLckYsTUFBTSxPQUFPLHNCQUFzQjtJQUhuQztRQUlXLHFCQUFnQixHQUFXLEdBQUcsQ0FBQztRQVl4Qzs7V0FFRztRQUNPLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQWdDMUQ7SUF2Q0MsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDcEQsQ0FBQztJQU9EOztPQUVHO0lBQ0gsZUFBZSxDQUFDLEdBQVE7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxHQUFHO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYTtRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDOztvSEE5Q1Usc0JBQXNCO3dHQUF0QixzQkFBc0IsdU9BTW5CLDhCQUE4QiwyQkFBVSxXQUFXOzRGQU50RCxzQkFBc0I7a0JBSGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7OEJBRVUsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUdOLGNBQWM7c0JBRGIsS0FBSzt1QkFBQyxVQUFVO2dCQUlqQixjQUFjO3NCQURiLFlBQVk7dUJBQUMsOEJBQThCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBVXZFLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3dFeHBhbmRhYmxlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3Jvdy1leHBhbmRhYmxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmc3JSb3dFeHBhbmRhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgUm93RXhwYW5kYWJsZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGV4cGFuZGFibGVIZWlnaHQ6IG51bWJlciA9IDEwMDtcblxuICBASW5wdXQoJ3RlbXBsYXRlJylcbiAgX3RlbXBsYXRlSW5wdXQhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBDb250ZW50Q2hpbGQoUm93RXhwYW5kYWJsZVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgX3RlbXBsYXRlUXVlcnkhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVJbnB1dCB8fCB0aGlzLl90ZW1wbGF0ZVF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIFJvdyBleHBhbmRhYmxlIHRvZ2dsZS5cbiAgICovXG4gIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgcm93IGV4cGFuc2lvblxuICAgKi9cbiAgdG9nZ2xlRXhwYW5kUm93KHJvdzogYW55KTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUuZW1pdCh7XG4gICAgICB0eXBlOiAncm93JyxcbiAgICAgIHZhbHVlOiByb3dcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZXhwYW5kIGFsbCByb3dzXG4gICAqL1xuICBleHBhbmRBbGxSb3dzKCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlLmVtaXQoe1xuICAgICAgdHlwZTogJ2FsbCcsXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjb2xsYXNlIGFsbCByb3dzXG4gICAqL1xuICBjb2xsYXBzZUFsbFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUuZW1pdCh7XG4gICAgICB0eXBlOiAnYWxsJyxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==