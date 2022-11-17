import { ContentChild, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { RowExpandableTemplateDirective } from './row-expandable-template.directive';

@Directive({
  selector: '[fsrRowExpandable]'
})
export class RowExpandableDirective {
  @Input() expandableHeight: number = 100;

  @Input('template')
  _templateInput!: TemplateRef<any>;

  @ContentChild(RowExpandableTemplateDirective, { read: TemplateRef, static: true })
  _templateQuery!: TemplateRef<any>;

  get template(): TemplateRef<any> {
    return this._templateInput || this._templateQuery;
  }

  /**
   * Row expandable toggle.
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  /**
   * Toggle row expansion
   */
  toggleExpandRow(row: any): void {
    this.toggle.emit({
      type: 'row',
      value: row
    });
  }

  /**
   * Method to expand all rows
   */
  expandAllRows(): void {
    this.toggle.emit({
      type: 'all',
      value: true
    });
  }

  /**
   * Method to collase all rows
   */
  collapseAllRows(): void {
    this.toggle.emit({
      type: 'all',
      value: false
    });
  }

}
