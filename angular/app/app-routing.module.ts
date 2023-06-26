import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './controller/login/login.component';
import { RegistrarComponent } from './controller/registrar/registrar.component';
import { VerClientesComponent } from './controller/ver-clientes/ver-clientes.component';
import { NuevoClienteComponent } from './controller/nuevo-cliente/nuevo-cliente.component';
import { VerSoportesComponent } from './controller/ver-soportes/ver-soportes.component';
import { VerVisitasComponent } from './controller/ver-visitas/ver-visitas.component';
import { NuevoSoporteComponent } from './controller/nuevo-soporte/nuevo-soporte.component';
import { WindowCliComponent } from './controller/window-cli/window-cli.component';
import { UpdateVisitasComponent } from './controller/update-visitas/update-visitas.component';
import { PrincipalComponent } from './controller/principal/principal.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"registrar",component:RegistrarComponent},
  {path:"ver-clientes",component:VerClientesComponent},
  {path:"nuevo-cliente",component:NuevoClienteComponent},
  {path:"ver-soportes",component:VerSoportesComponent},
  {path:"ver-visitas",component:VerVisitasComponent},
  {path:"nuevo-soporte",component:NuevoSoporteComponent},
  {path:"ventana-cli",component:WindowCliComponent},
  {path:"update-visita",component:UpdateVisitasComponent},
  {path:"principal",component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
