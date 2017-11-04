import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonBeltComponent } from './python-belt.component';

describe('PythonBeltComponent', () => {
  let component: PythonBeltComponent;
  let fixture: ComponentFixture<PythonBeltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonBeltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonBeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
