import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formato-servicio',
  templateUrl: './formato-servicio.component.html',
  styleUrls: ['./formato-servicio.component.css']
})
export class FormatoServicioComponent implements OnInit {
  shw = false;

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.shw = true;
  }

}
