import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { CellTemplateDirective } from './cell-template.directive';
import { HeaderCellDirective } from './header-cell.directive';
import * as i0 from "@angular/core";
export class GridColumnDirective {
    constructor() {
        this.name = '';
        this.title = '';
        this.resizeable = false;
        //@Input() comparator: any;
        //@Input() pipe: any;
        this.visible = true;
        this.sortable = true;
        this.draggable = true;
    }
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    ngOnChanges() {
    }
}
GridColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridColumnDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
GridColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.11", type: GridColumnDirective, selector: "fsrGridColumn", inputs: { name: "name", title: "title", pinLeft: "pinLeft", pinRight: "pinRight", resizeable: "resizeable", visible: "visible", sortable: "sortable", draggable: "draggable", minWidth: "minWidth", width: "width", maxWidth: "maxWidth", checkboxable: "checkboxable", headerCheckboxable: "headerCheckboxable", headerClass: "headerClass", cellClass: "cellClass", _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"], _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"] }, queries: [{ propertyName: "_cellTemplateQuery", first: true, predicate: CellTemplateDirective, descendants: true, read: TemplateRef, static: true }, { propertyName: "_headerTemplateQuery", first: true, predicate: HeaderCellDirective, descendants: true, read: TemplateRef, static: true }], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: GridColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'fsrGridColumn'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { name: [{
                type: Input
            }], title: [{
                type: Input
            }], pinLeft: [{
                type: Input
            }], pinRight: [{
                type: Input
            }], resizeable: [{
                type: Input
            }], visible: [{
                type: Input
            }], sortable: [{
                type: Input
            }], draggable: [{
                type: Input
            }], minWidth: [{
                type: Input
            }], width: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }], checkboxable: [{
                type: Input
            }], headerCheckboxable: [{
                type: Input
            }], headerClass: [{
                type: Input
            }], cellClass: [{
                type: Input
            }], _cellTemplateInput: [{
                type: Input,
                args: ['cellTemplate']
            }], _cellTemplateQuery: [{
                type: ContentChild,
                args: [CellTemplateDirective, { read: TemplateRef, static: true }]
            }], _headerTemplateInput: [{
                type: Input,
                args: ['headerTemplate']
            }], _headerTemplateQuery: [{
                type: ContentChild,
                args: [HeaderCellDirective, { read: TemplateRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb2x1bW4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZnNyLWRhdGEtZ3JpZC9zcmMvbGliL2RpcmVjdGl2ZXMvZ3JpZC1jb2x1bW4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBSzlELE1BQU0sT0FBTyxtQkFBbUI7SUF5QzlCO1FBeENTLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUduQixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBQ3RDLDJCQUEyQjtRQUMzQixxQkFBcUI7UUFDWixZQUFPLEdBQWEsSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsY0FBUyxHQUFZLElBQUksQ0FBQztJQStCcEIsQ0FBQztJQWRoQixJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDNUQsQ0FBQztJQVFELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDaEUsQ0FBQztJQUlELFdBQVc7SUFDWCxDQUFDOztpSEE1Q1UsbUJBQW1CO3FHQUFuQixtQkFBbUIsMmtCQXdCaEIscUJBQXFCLDJCQUFVLFdBQVcsa0ZBVTFDLG1CQUFtQiwyQkFBVSxXQUFXOzRGQWxDM0MsbUJBQW1CO2tCQUgvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjswRUFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBR0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFJTixrQkFBa0I7c0JBRGpCLEtBQUs7dUJBQUMsY0FBYztnQkFJckIsa0JBQWtCO3NCQURqQixZQUFZO3VCQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQVF4RSxvQkFBb0I7c0JBRG5CLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQUl2QixvQkFBb0I7c0JBRG5CLFlBQVk7dUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vY2VsbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4vaGVhZGVyLWNlbGwuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnZnNyR3JpZENvbHVtbidcbn0pXG5leHBvcnQgY2xhc3MgR3JpZENvbHVtbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlc3tcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgcGluTGVmdD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBpblJpZ2h0PzogYm9vbGVhbjtcbiAgQElucHV0KCkgcmVzaXplYWJsZT86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy9ASW5wdXQoKSBjb21wYXJhdG9yOiBhbnk7XG4gIC8vQElucHV0KCkgcGlwZTogYW55O1xuICBASW5wdXQoKSB2aXNpYmxlPzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNvcnRhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZHJhZ2dhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgLy9ASW5wdXQoKSBjYW5BdXRvUmVzaXplOiBib29sZWFuO1xuICBASW5wdXQoKSBtaW5XaWR0aD86IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg/OiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heFdpZHRoPzogbnVtYmVyO1xuICBASW5wdXQoKSBjaGVja2JveGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBoZWFkZXJDaGVja2JveGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBoZWFkZXJDbGFzcz86IHN0cmluZyB8ICgoZGF0YTogYW55KSA9PiBzdHJpbmcgfCBhbnkpO1xuICBASW5wdXQoKSBjZWxsQ2xhc3M/OiBzdHJpbmcgfCAoKGRhdGE6IGFueSkgPT4gc3RyaW5nIHwgYW55KTtcblxuXG4gIEBJbnB1dCgnY2VsbFRlbXBsYXRlJylcbiAgX2NlbGxUZW1wbGF0ZUlucHV0ITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAQ29udGVudENoaWxkKENlbGxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIF9jZWxsVGVtcGxhdGVRdWVyeSE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZ2V0IGNlbGxUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fY2VsbFRlbXBsYXRlSW5wdXQgfHwgdGhpcy5fY2VsbFRlbXBsYXRlUXVlcnk7XG4gIH1cblxuICBASW5wdXQoJ2hlYWRlclRlbXBsYXRlJylcbiAgX2hlYWRlclRlbXBsYXRlSW5wdXQhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBDb250ZW50Q2hpbGQoSGVhZGVyQ2VsbERpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIF9oZWFkZXJUZW1wbGF0ZVF1ZXJ5ITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBnZXQgaGVhZGVyVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlclRlbXBsYXRlSW5wdXQgfHwgdGhpcy5faGVhZGVyVGVtcGxhdGVRdWVyeTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgfVxuXG59XG4iXX0=