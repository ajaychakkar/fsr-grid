import { Type } from "@angular/core";

export interface FsrColumnDef {
  /**
   * Used to display column header text
   */
  title: string;
  /**
   * Used as a unique key for a column
   */
  key: string;
  /**
   * this will contain any data user needs to store with column
   */
  field?: any;
  /**
   * show/hide filter for particular column
   */
  enableFiltering: boolean;
  /**
   * Component used to filter data
   */
  filterCompoment?: Type<any>;
  /**
   * Parameters to pass to filtercomponent
   */
  filterComponentParams?: any;
  /**
   * enables sorting for column (up/down arrow)
   */
  sortable?: boolean;
  /**
   * Sorting options
   */
  sort?: 'asc' | 'desc' | null;
  /**
   * Makes column resizable
   */
  resizable?: boolean;
  /**
   * pin column to left or right
   */
  pinnedColumn?: 'LEFT' | 'RIGHT';
  /**
   * Make column draggable to change the position
   */
  draggable?: boolean;
  /**
   * Sets column visibility
   */
  visible?: boolean;
  /**
   * Width of the column
   */
  width?: number | string;
  /**
   * Render angular component inside grid
   */
  renderer: Type<any>;

  /**
   * parameteres to pass to renderer component
   */
  rendererParams?: any;
  /**
   * Minimum width for a column
   */
  minWidth?: number | string;

  /**
   * cellTemplate- will be type of ng-template/html
   */
   cellTemplate?: any;

   /**
    * this will use internally to calculate width of the each column
    */
   $$width?: number;

   /**
    * this will use internally for column dragging
    */

   $$dragging?: boolean;
}
