import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationManageProfileComponent } from './organization-manage-profile.component';

describe('OrganizationManageProfileComponent', () => {
  let component: OrganizationManageProfileComponent;
  let fixture: ComponentFixture<OrganizationManageProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationManageProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationManageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
