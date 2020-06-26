import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidades-disponibles',
  templateUrl: './unidades-disponibles.component.html',
  styles: []
})
export class UnidadesDisponiblesComponent implements OnInit {

  bandera: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarTabla() {
    this.bandera = true;
  }
}
