import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregarReporteComponent } from './entregar-reporte.component';

describe('EntregarReporteComponent', () => {
  let component: EntregarReporteComponent;
  let fixture: ComponentFixture<EntregarReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregarReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregarReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
