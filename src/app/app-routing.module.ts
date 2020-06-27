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
import { AsignarComponent } from './supervisorTaller/asignar/asignar.component';
import { RevisarReporteComponent } from './supervisorTaller/revisar-reporte/revisar-reporte.component';
import { RegistrarComponent } from './supervisorTaller/registrar/registrar.component';
import { FormatoServicioComponent } from './encargadoTaller/formato-servicio/formato-servicio.component';
import { ImprimirFormatoComponent } from './encargadoTaller/imprimir-formato/imprimir-formato.component';
import { AnadirFormatoComponent } from './encargadoTaller/anadir-formato/anadir-formato.component';
import { RegistrarServiciosComponent } from './cuadrillaMecanicos/registrar-servicios/registrar-servicios.component';
import { EntregarReporteComponent } from './cuadrillaMecanicos/entregar-reporte/entregar-reporte.component';

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
  {path: 'asignar', component: AsignarComponent},
  {path: 'revisar', component: RevisarReporteComponent },
  {path: 'registrar', component: RegistrarComponent},
  {path: 'formato', component: FormatoServicioComponent},
  {path: 'imprimir', component: ImprimirFormatoComponent},
  {path: 'anadir', component: AnadirFormatoComponent},
  {path: 'registrarS', component: RegistrarServiciosComponent},
  {path: 'entregar', component: EntregarReporteComponent },
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
