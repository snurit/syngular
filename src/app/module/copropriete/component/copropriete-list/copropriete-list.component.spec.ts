import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoproprieteListComponent } from './copropriete-list.component';

describe('CoproprieteListComponent', () => {
  let component: CoproprieteListComponent;
  let fixture: ComponentFixture<CoproprieteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoproprieteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoproprieteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
