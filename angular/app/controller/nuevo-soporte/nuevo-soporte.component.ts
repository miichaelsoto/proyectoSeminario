
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Clientes';
import { Soporte } from 'src/app/model/Soporte';
import { Ubicacion } from 'src/app/model/Ubicacion';
import { RegistarSoporteService } from 'src/app/service/registar-soporte.service';
import { VerSoporteService } from 'src/app/service/ver-soporte.service';

@Component({
  selector: 'app-nuevo-soporte',
  templateUrl: './nuevo-soporte.component.html',
  styleUrls: ['./nuevo-soporte.component.css']
})
export class NuevoSoporteComponent {
  clientes:Cliente[];
  ubicacion:Ubicacion[];
  soporte:Soporte=new Soporte;
  idClienteSel:number;

  constructor(private verClientes:VerSoporteService,
              private verUbicacion:VerSoporteService,
              private RegistrarSoporte: RegistarSoporteService,
              private router:Router){

  }
ngOnInit(): void {
  this.verClientes.clientes().subscribe(c=>this.clientes=c);
}

detUbicacion(){
  this.verUbicacion.detalleUbicacion(this.idClienteSel).subscribe(p=>this.ubicacion=p);
}
registrarSop(){
  this.soporte.idCliente=this.idClienteSel;
  this.soporte.idUsuario=1;
  this.soporte.estado="Pendiente Agendar"
  this.RegistrarSoporte.registrar(this.soporte).subscribe({
    next:data=>this.idClienteSel=0,
    error:data=>alert("ERROR en ingreso de datos")
  });
}
salir(){
  this.router.navigate(["/ver-soportes"])
}
}
