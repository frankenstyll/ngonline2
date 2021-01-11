import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoTableComponent } from './ceo-table.component';

describe('CeoTableComponent', () => {
  let component: CeoTableComponent;
  let fixture: ComponentFixture<CeoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
