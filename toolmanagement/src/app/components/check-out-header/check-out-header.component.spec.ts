import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutHeaderComponent } from './check-out-header.component';

describe('CheckOutHeaderComponent', () => {
  let component: CheckOutHeaderComponent;
  let fixture: ComponentFixture<CheckOutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
