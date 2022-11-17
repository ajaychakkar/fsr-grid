import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[fsrHeaderCell]'
})
export class HeaderCellDirective {

  constructor(public template: TemplateRef<any>) {}

}
