import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-servicios',
  templateUrl: './registrar-servicios.component.html',
  styleUrls: ['./registrar-servicios.component.css']
})
export class RegistrarServiciosComponent implements OnInit {
  hide1 = false;
  hide2 = false;
  hide3 = false;
  shw1 = true;
  shw2 = true;
  shw3 = true;
  constructor() { }

  ngOnInit(): void {
  }

  show(val){
    if (val === 1){
      this.hide1 = true;
    }
    else if (val === 2){
      this.hide2 = true;
    }
    else if (val === 3){
      this.hide3 = true;
    }
  }

  hide(val){
    if (val === 1){
      this.shw1 = false;
    }
    else if (val === 2){
      this.shw2 = false;
    }
    else if (val === 3){
      this.shw3 = false;
    }
  }

}
