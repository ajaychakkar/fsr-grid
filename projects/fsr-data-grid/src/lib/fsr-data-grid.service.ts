import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FsrDataGridService {

  constructor() { }

  getAllSelectedRows() {
    console.log('inside all');
  }
}
