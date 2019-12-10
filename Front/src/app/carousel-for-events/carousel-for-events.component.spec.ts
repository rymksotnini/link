import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselForEventsComponent } from './carousel-for-events.component';

describe('CarouselForEventsComponent', () => {
  let component: CarouselForEventsComponent;
  let fixture: ComponentFixture<CarouselForEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselForEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselForEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
