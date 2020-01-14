import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileLoderComponent } from './file-loder.component';

describe('FileLoderComponent', () => {
  let component: FileLoderComponent;
  let fixture: ComponentFixture<FileLoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileLoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileLoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
