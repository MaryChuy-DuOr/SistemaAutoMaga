import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styles: []
})
export class UnidadComponent implements OnInit {

  bandera1: boolean = false;
  bandera2: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarTabla() {
    if (this.bandera1) {
      this.bandera1 = false;
    } else {
      this.bandera1 = true;
    }
  }

  registrar() {
    if (this.bandera2) {
      this.bandera2 = false;
    } else {
      this.bandera2 = true;
    }
  }

}
