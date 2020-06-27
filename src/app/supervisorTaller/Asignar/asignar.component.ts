import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.css']
})
export class AsignarComponent implements OnInit {
  shw: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  asignar(){
    this.shw = false;
  }

}
