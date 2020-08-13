import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnappsatsComponent } from './knappsats.component';

describe('KnappsatsComponent', () => {
  let component: KnappsatsComponent;
  let fixture: ComponentFixture<KnappsatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnappsatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnappsatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
