import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './controller/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrarComponent } from './controller/registrar/registrar.component';
import { MenuComponent } from './controller/menu/menu.component';
import { VerClientesComponent } from './controller/ver-clientes/ver-clientes.component';
import { NuevoClienteComponent } from './controller/nuevo-cliente/nuevo-cliente.component';
import { VerSoportesComponent } from './controller/ver-soportes/ver-soportes.component';
import { VerVisitasComponent } from './controller/ver-visitas/ver-visitas.component';
import { NuevoSoporteComponent } from './controller/nuevo-soporte/nuevo-soporte.component';
import { WindowCliComponent } from './controller/window-cli/window-cli.component';
import { UpdateVisitasComponent } from './controller/update-visitas/update-visitas.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    MenuComponent,
    VerClientesComponent,
    NuevoClienteComponent,
    VerSoportesComponent,
    VerVisitasComponent,
    NuevoSoporteComponent,
    WindowCliComponent,
    UpdateVisitasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
