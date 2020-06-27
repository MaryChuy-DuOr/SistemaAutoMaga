import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entregar-reporte',
  templateUrl: './entregar-reporte.component.html',
  styleUrls: ['./entregar-reporte.component.css']
})
export class EntregarReporteComponent implements OnInit {
  shw1 = true;
  shw2 = true;
  shw3 = true;
  shw4 = true;
  shw5 = true;

  constructor() { }

  ngOnInit(): void {
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
    else if (val === 4){
      this.shw4 = false;
    }
    else if (val === 5){
      this.shw5 = false;
    }
  }

}
