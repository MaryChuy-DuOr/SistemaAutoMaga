import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  shw1 = true;
  shw2 = true;
  shw3 = true;

  egreso(val){
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

  constructor() { }

  ngOnInit(): void {
  }

}
