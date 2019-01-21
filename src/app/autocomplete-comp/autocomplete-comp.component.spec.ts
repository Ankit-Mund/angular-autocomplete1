import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteCompComponent } from './autocomplete-comp.component';

describe('AutocompleteCompComponent', () => {
  let component: AutocompleteCompComponent;
  let fixture: ComponentFixture<AutocompleteCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
