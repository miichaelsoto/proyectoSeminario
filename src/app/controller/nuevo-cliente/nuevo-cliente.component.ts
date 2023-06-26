import { RegistrarClienteService } from './../../service/registrar-cliente.service';
import { Component } from '@angular/core';
import { Cliente } from './../../model/Clientes';
import { Ubicacion } from './../../model/Ubicacion';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent {
  cliente:Cliente=new Cliente();
  ubicacion:Ubicacion=new Ubicacion();

  constructor(private RegistrarClienteService:RegistrarClienteService,
              private router:Router){

  }
  registrarCli(){
      this.RegistrarClienteService.registrar(this.cliente).subscribe({
      next:data=>this.ubicacion.nomCli="",
      error:data=>alert("ERROR en ingreso de datos")
    });

  }

  registrarUbi(){
    this.ubicacion.nomCli=this.cliente.nombre;
    this.RegistrarClienteService.registrarUbi(this.ubicacion).subscribe({
      next:data=>this.router.navigate(["/ver-clientes"]),
      error:data=>alert("Ubicacion NO Guardada")
    });
  }
}
