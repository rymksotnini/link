import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorManageProfileComponent } from './sponsor-manage-profile.component';

describe('SponsorManageProfileComponent', () => {
  let component: SponsorManageProfileComponent;
  let fixture: ComponentFixture<SponsorManageProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorManageProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorManageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
