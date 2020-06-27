import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirFormatoComponent } from './imprimir-formato.component';

describe('ImprimirFormatoComponent', () => {
  let component: ImprimirFormatoComponent;
  let fixture: ComponentFixture<ImprimirFormatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimirFormatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimirFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
