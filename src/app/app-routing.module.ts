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
import { ServicioComponent } from './vendedor/servicio/servicio.component';
import { ClientesComponent } from './vendedor/clientes/clientes.component';
import { CotizacionComponent } from './vendedor/cotizacion/cotizacion.component';
import { ContratoComponent } from './vendedor/contrato/contrato.component';
import { ReciboAnticipoComponent } from './vendedor/recibo-anticipo/recibo-anticipo.component';
import { FacturaComponent } from './encargadoFacturacion/factura/factura.component';
import { AsigUnOpComponent } from './administrador/asig-un-op/asig-un-op.component';
import { GasolinaComponent } from './administrador/gasolina/gasolina.component';
import { ViaticosComponent } from'./administrador/viaticos/viaticos.component';
import { UnidadComponent } from './administrador/unidad/unidad.component';
import { OperadorComponent } from './administrador/operador/operador.component';
import { UnidadAccesoComponent } from './encargadoAcceso/unidad-acceso/unidad-acceso.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'vendedor', component: VendedorComponent},
  {path: 'administrador', component: AdministradorComponent},
  {path: 'encargado-facturacion', component: EncargadoFacturacionComponent},
  {path: 'encargado-acceso', component: EncargadoAccesoComponent},
  {path: 'encargado-taller', component: EncargadoTallerComponent},
  {path: 'supervisor-taller', component: SupervisorTallerComponent},
  {path: 'cuadrilla-mecanicos', component: CuadrillaMecanicosComponent},
  {path: 'unidades-disponibles-vendedor', component: UnidadesDisponiblesComponent},
  {path: 'clientes-vendedor', component: ClientesComponent},
  {path: 'cotizacion-vendedor', component: CotizacionComponent},
  {path: 'servicio-vendedor', component: ServicioComponent},
  {path: 'contrato-vendedor', component: ContratoComponent},
  {path: 'recibo-vendedor', component: ReciboAnticipoComponent},
  {path: 'factura-encfac', component: FacturaComponent},
  {path: 'unidad', component: UnidadComponent},
  {path: 'operador', component: OperadorComponent},
  {path: 'asig-UnOp', component: AsigUnOpComponent},
  {path: 'gasolina', component: GasolinaComponent},
  {path: 'viaticos', component: ViaticosComponent},
  {path: 'acceso', component: UnidadAccesoComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
