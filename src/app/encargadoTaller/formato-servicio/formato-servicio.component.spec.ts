import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoServicioComponent } from './formato-servicio.component';

describe('FormatoServicioComponent', () => {
  let component: FormatoServicioComponent;
  let fixture: ComponentFixture<FormatoServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatoServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
