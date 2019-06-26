import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResilienceTestComponent } from './resilience-test.component';

describe('ResilienceTestComponent', () => {
  let component: ResilienceTestComponent;
  let fixture: ComponentFixture<ResilienceTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResilienceTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResilienceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
