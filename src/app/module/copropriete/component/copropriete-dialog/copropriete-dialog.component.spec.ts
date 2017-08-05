import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoproprieteDialogComponent } from './copropriete-dialog.component';

describe('CoproprieteDialogComponent', () => {
  let component: CoproprieteDialogComponent;
  let fixture: ComponentFixture<CoproprieteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoproprieteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoproprieteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
