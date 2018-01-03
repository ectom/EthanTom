import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThehomeComponent } from './thehome.component';

describe('ThehomeComponent', () => {
  let component: ThehomeComponent;
  let fixture: ComponentFixture<ThehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
