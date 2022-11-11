import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsrDataGridComponent } from './fsr-data-grid.component';

describe('FsrDataGridComponent', () => {
  let component: FsrDataGridComponent;
  let fixture: ComponentFixture<FsrDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsrDataGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsrDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
