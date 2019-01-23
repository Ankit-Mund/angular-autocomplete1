import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDeleteComponent } from './checkbox-delete.component';

describe('CheckboxDeleteComponent', () => {
  let component: CheckboxDeleteComponent;
  let fixture: ComponentFixture<CheckboxDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
