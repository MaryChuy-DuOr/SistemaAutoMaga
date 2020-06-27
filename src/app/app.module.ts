import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendedorComponent } from './vendedor/vendedor/vendedor.component';
import { NavVendedorComponent } from './vendedor/nav-vendedor/nav-vendedor.component';
import { AdministradorComponent } from './administrador/administrador/administrador.component';
import { NavAdministradorComponent } from './administrador/nav-administrador/nav-administrador.component';
import { EncargadoFacturacionComponent } from './encargadoFacturacion/encargado-facturacion/encargado-facturacion.component';
import { NavEncargadoFacturacionComponent } from './encargadoFacturacion/nav-encargado-facturacion/nav-encargado-facturacion.component';
import { EncargadoAccesoComponent } from './encargadoAcceso/encargado-acceso/encargado-acceso.component';
import { NavEncargadoAccesoComponent } from './encargadoAcceso/nav-encargado-acceso/nav-encargado-acceso.component';
import { NavEncargadoTallerComponent } from './encargadoTaller/nav-encargado-taller/nav-encargado-taller.component';
import { EncargadoTallerComponent } from './encargadoTaller/encargado-taller/encargado-taller.component';
import { SupervisorTallerComponent } from './supervisorTaller/supervisor-taller/supervisor-taller.component';
import { NavSupervisorTallerComponent } from './supervisorTaller/nav-supervisor-taller/nav-supervisor-taller.component';
import { NavCuadrillaMecanicosComponent } from './cuadrillaMecanicos/nav-cuadrilla-mecanicos/nav-cuadrilla-mecanicos.component';
import { CuadrillaMecanicosComponent } from './cuadrillaMecanicos/cuadrilla-mecanicos/cuadrilla-mecanicos.component';
import { UnidadesDisponiblesComponent } from './vendedor/unidades-disponibles/unidades-disponibles.component';
import { ServicioComponent } from './vendedor/servicio/servicio.component';
import { ClientesComponent } from './vendedor/clientes/clientes.component';
import { CotizacionComponent } from './vendedor/cotizacion/cotizacion.component';
import { ContratoComponent } from './vendedor/contrato/contrato.component';
import { ReciboAnticipoComponent } from './vendedor/recibo-anticipo/recibo-anticipo.component';
import { FacturaComponent } from './encargadoFacturacion/factura/factura.component';
import { AsigUnOpComponent } from './administrador/asig-un-op/asig-un-op.component';
import { GasolinaComponent } from './administrador/gasolina/gasolina.component';
import { ViaticosComponent } from './administrador/viaticos/viaticos.component';
import { UnidadComponent } from './administrador/unidad/unidad.component';
import { OperadorComponent } from './administrador/operador/operador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VendedorComponent,
    NavVendedorComponent,
    AdministradorComponent,
    NavAdministradorComponent,
    EncargadoFacturacionComponent,
    NavEncargadoFacturacionComponent,
    EncargadoAccesoComponent,
    NavEncargadoAccesoComponent,
    NavEncargadoTallerComponent,
    EncargadoTallerComponent,
    SupervisorTallerComponent,
    NavSupervisorTallerComponent,
    NavCuadrillaMecanicosComponent,
    CuadrillaMecanicosComponent,
    UnidadesDisponiblesComponent,
    ServicioComponent,
    ClientesComponent,
    CotizacionComponent,
    ContratoComponent,
    ReciboAnticipoComponent,
    FacturaComponent,
    AsigUnOpComponent,
    GasolinaComponent,
    ViaticosComponent,
    UnidadComponent,
    OperadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
