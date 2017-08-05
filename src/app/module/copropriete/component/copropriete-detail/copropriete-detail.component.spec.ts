import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoproprieteComponent } from './copropriete-detail.component';

describe('CoproprieteComponent', () => {
  let component: CoproprieteComponent;
  let fixture: ComponentFixture<CoproprieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoproprieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoproprieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
