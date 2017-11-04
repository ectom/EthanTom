import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanBeltComponent } from './mean-belt.component';

describe('MeanBeltComponent', () => {
  let component: MeanBeltComponent;
  let fixture: ComponentFixture<MeanBeltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeanBeltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanBeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
