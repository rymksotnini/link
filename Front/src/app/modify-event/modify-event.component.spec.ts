import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEventComponent } from './modify-event.component';

describe('ModifyEventComponent', () => {
  let component: ModifyEventComponent;
  let fixture: ComponentFixture<ModifyEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
