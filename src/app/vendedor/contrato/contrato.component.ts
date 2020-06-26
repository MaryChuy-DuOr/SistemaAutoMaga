import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styles: []
})
export class ContratoComponent implements OnInit {

  bandera1: boolean = false;
  bandera2: boolean = false;
  bandera3: boolean = false;
  bandera4: boolean = false;
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

  imprimir() {
    if (this.bandera3) {
      this.bandera3 = false;
    } else {
      this.bandera3 = true;
    }
  }

  anexar() {
    if (this.bandera4) {
      this.bandera4 = false;
    } else {
      this.bandera4 = true;
    }
  }
}