import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersLoginComponent } from './workers-login.component';

describe('WorkersLoginComponent', () => {
  let component: WorkersLoginComponent;
  let fixture: ComponentFixture<WorkersLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
