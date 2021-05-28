import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchsComponent } from './stopwatchs.component';

describe('StopwatchsComponent', () => {
  let component: StopwatchsComponent;
  let fixture: ComponentFixture<StopwatchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopwatchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
