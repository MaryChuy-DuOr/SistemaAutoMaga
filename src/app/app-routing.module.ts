import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VendedorComponent } from './vendedor/vendedor/vendedor.component';
import { CuadrillaMecanicosComponent } from './cuadrillaMecanicos/cuadrilla-mecanicos/cuadrilla-mecanicos.component';
import { SupervisorTallerComponent } from './supervisorTaller/supervisor-taller/supervisor-taller.component';
import { EncargadoTallerComponent } from './encargadoTaller/encargado-taller/encargado-taller.component';
import { EncargadoAccesoComponent } from './encargadoAcceso/encargado-acceso/encargado-acceso.component';
import { EncargadoFacturacionComponent } from './encargadoFacturacion/encargado-facturacion/encargado-facturacion.component';
import { AdministradorComponent } from './administrador/administrador/administrador.component';
import { UnidadesDisponiblesComponent } from './vendedor/unidades-disponibles/unidades-disponibles.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'vendedor', component: VendedorComponent},
  {path: 'administrador', component: AdministradorComponent},
  {path: 'encargado-facturacion', component: EncargadoFacturacionComponent},
  {path: 'encargado-acceso', component: EncargadoAccesoComponent},
  {path: 'encargado-taller', component: EncargadoTallerComponent},
  {path: 'supervisor-taller', component: SupervisorTallerComponent},
  {path: 'cuadrilla-mecanicos', component: CuadrillaMecanicosComponent},
  {path: 'unidades-disponibles', component: UnidadesDisponiblesComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
