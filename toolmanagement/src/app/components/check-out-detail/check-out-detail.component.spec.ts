import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutDetailComponent } from './check-out-detail.component';

describe('CheckOutDetailComponent', () => {
  let component: CheckOutDetailComponent;
  let fixture: ComponentFixture<CheckOutDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
