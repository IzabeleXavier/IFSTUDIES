import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosredComponent } from './exerciciosred.component';

describe('ExerciciosredComponent', () => {
  let component: ExerciciosredComponent;
  let fixture: ComponentFixture<ExerciciosredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciciosredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
