import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSponsorComponent } from './signup-sponsor.component';

describe('SignupSponsorComponent', () => {
  let component: SignupSponsorComponent;
  let fixture: ComponentFixture<SignupSponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
