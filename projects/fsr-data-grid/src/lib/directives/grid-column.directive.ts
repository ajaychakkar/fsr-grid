import { ContentChild, Directive, Input, OnChanges, TemplateRef } from '@angular/core';
import { CellTemplateDirective } from './cell-template.directive';
import { HeaderCellDirective } from './header-cell.directive';

@Directive({
  selector: 'fsrGridColumn'
})
export class GridColumnDirective implements OnChanges{
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() pinLeft?: boolean;
  @Input() pinRight?: boolean;
  @Input() resizeable?: boolean = false;
  //@Input() comparator: any;
  //@Input() pipe: any;
  @Input() visible?: boolean = true;
  @Input() sortable: boolean = true;
  @Input() draggable: boolean = true;
  //@Input() canAutoResize: boolean;
  @Input() minWidth?: number;
  @Input() width?: number;
  @Input() maxWidth?: number;
  @Input() checkboxable?: boolean;
  @Input() headerCheckboxable?: boolean;
  @Input() headerClass?: string | ((data: any) => string | any);
  @Input() cellClass?: string | ((data: any) => string | any);


  @Input('cellTemplate')
  _cellTemplateInput!: TemplateRef<any>;

  @ContentChild(CellTemplateDirective, { read: TemplateRef, static: true })
  _cellTemplateQuery!: TemplateRef<any>;

  get cellTemplate(): TemplateRef<any> {
    return this._cellTemplateInput || this._cellTemplateQuery;
  }

  @Input('headerTemplate')
  _headerTemplateInput!: TemplateRef<any>;

  @ContentChild(HeaderCellDirective, { read: TemplateRef, static: true })
  _headerTemplateQuery!: TemplateRef<any>;

  get headerTemplate(): TemplateRef<any> {
    return this._headerTemplateInput || this._headerTemplateQuery;
  }

  constructor() {}

  ngOnChanges() {
  }

}
