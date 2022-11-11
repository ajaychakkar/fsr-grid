import { TestBed } from '@angular/core/testing';

import { FsrDataGridService } from './fsr-data-grid.service';

describe('FsrDataGridService', () => {
  let service: FsrDataGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsrDataGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
