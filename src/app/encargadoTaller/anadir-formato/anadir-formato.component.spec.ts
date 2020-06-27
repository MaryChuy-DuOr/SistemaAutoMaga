import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirFormatoComponent } from './anadir-formato.component';

describe('AnadirFormatoComponent', () => {
  let component: AnadirFormatoComponent;
  let fixture: ComponentFixture<AnadirFormatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirFormatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
