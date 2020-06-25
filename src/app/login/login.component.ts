import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  constructor(private router: Router) {
    this.forma = new FormGroup({
      rol: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  login() {
    switch (this.forma.value.rol) {
      case '1':
        console.log('vendedor');
        this.router.navigate(['/vendedor']);
        break;
      case '2':
        this.router.navigate(['/administrador']);
        break;
      case '3':
        this.router.navigate(['/encargado-facturacion']);
        break;
      case '4':
        this.router.navigate(['/encargado-acceso']);
        break;
      case '5':
        this.router.navigate(['/encargado-taller']);
        break;
      case '6':
        this.router.navigate(['/supervisor-taller']);
        break;
      case '7':
        this.router.navigate(['/cuadrilla-mecanicos']);
        break;
    }
  }

}
