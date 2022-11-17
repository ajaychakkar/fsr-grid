import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[fsrCellTemplate]'
})
export class CellTemplateDirective {

  constructor(public template: TemplateRef<any>) {}

}
