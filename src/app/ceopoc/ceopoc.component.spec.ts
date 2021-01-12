import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeopocComponent } from './ceopoc.component';

describe('CeopocComponent', () => {
  let component: CeopocComponent;
  let fixture: ComponentFixture<CeopocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeopocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeopocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
