import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[fsrRowExpandableTemplate]'
})
export class RowExpandableTemplateDirective {
  expandableHeight: number = 100;

  constructor(public template: TemplateRef<any>) {}

}
