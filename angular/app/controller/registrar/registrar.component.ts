import { RegistrarService } from './../../service/registrar.service';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from './../../model/Usuarios';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  usuario:Usuario=new Usuario();

  constructor(private RegistrarService:RegistrarService,
              private router:Router){

  }
  registrar(){
      this.RegistrarService.registrar(this.usuario).subscribe({
      next:data=>this.notificar(),
      error:data=>alert("Usuario ya existe")
    });
  }
  notificar(){
    alert("Usuario CREADO"),
    this.router.navigate(["/login"])
  }

}
