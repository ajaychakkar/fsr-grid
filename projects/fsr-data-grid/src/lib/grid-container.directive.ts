import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[fsrGridContainer]'
})
export class GridContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
