import { EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RowExpandableDirective {
    expandableHeight: number;
    _templateInput: TemplateRef<any>;
    _templateQuery: TemplateRef<any>;
    get template(): TemplateRef<any>;
    /**
     * Row expandable toggle.
     */
    toggle: EventEmitter<any>;
    /**
     * Toggle row expansion
     */
    toggleExpandRow(row: any): void;
    /**
     * Method to expand all rows
     */
    expandAllRows(): void;
    /**
     * Method to collase all rows
     */
    collapseAllRows(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RowExpandableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RowExpandableDirective, "[fsrRowExpandable]", never, { "expandableHeight": "expandableHeight"; "_templateInput": "template"; }, { "toggle": "toggle"; }, ["_templateQuery"], never, false>;
}
