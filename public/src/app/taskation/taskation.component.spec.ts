import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskationComponent } from './taskation.component';

describe('TaskationComponent', () => {
  let component: TaskationComponent;
  let fixture: ComponentFixture<TaskationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
