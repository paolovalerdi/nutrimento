import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersSingupComponent } from './workers-singup.component';

describe('WorkersSingupComponent', () => {
  let component: WorkersSingupComponent;
  let fixture: ComponentFixture<WorkersSingupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersSingupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
