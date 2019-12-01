import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSponsorsComponent } from './top-sponsors.component';

describe('TopSponsorsComponent', () => {
  let component: TopSponsorsComponent;
  let fixture: ComponentFixture<TopSponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSponsorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
