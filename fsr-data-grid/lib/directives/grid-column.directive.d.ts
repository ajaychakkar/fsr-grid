import { OnChanges, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class GridColumnDirective implements OnChanges {
    name: string;
    title: string;
    pinLeft?: boolean;
    pinRight?: boolean;
    resizeable?: boolean;
    visible?: boolean;
    sortable: boolean;
    draggable: boolean;
    minWidth?: number;
    width?: number;
    maxWidth?: number;
    checkboxable?: boolean;
    headerCheckboxable?: boolean;
    headerClass?: string | ((data: any) => string | any);
    cellClass?: string | ((data: any) => string | any);
    _cellTemplateInput: TemplateRef<any>;
    _cellTemplateQuery: TemplateRef<any>;
    get cellTemplate(): TemplateRef<any>;
    _headerTemplateInput: TemplateRef<any>;
    _headerTemplateQuery: TemplateRef<any>;
    get headerTemplate(): TemplateRef<any>;
    constructor();
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridColumnDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GridColumnDirective, "fsrGridColumn", never, { "name": "name"; "title": "title"; "pinLeft": "pinLeft"; "pinRight": "pinRight"; "resizeable": "resizeable"; "visible": "visible"; "sortable": "sortable"; "draggable": "draggable"; "minWidth": "minWidth"; "width": "width"; "maxWidth": "maxWidth"; "checkboxable": "checkboxable"; "headerCheckboxable": "headerCheckboxable"; "headerClass": "headerClass"; "cellClass": "cellClass"; "_cellTemplateInput": "cellTemplate"; "_headerTemplateInput": "headerTemplate"; }, {}, ["_cellTemplateQuery", "_headerTemplateQuery"], never, false>;
}
