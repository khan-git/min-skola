import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonsensComponent } from './nonsens.component';

describe('NonsensComponent', () => {
  let component: NonsensComponent;
  let fixture: ComponentFixture<NonsensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonsensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonsensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
