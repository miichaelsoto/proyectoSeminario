import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/Clientes';
import { Ubicacion } from 'src/app/model/Ubicacion';
import { Soporte } from 'src/app/model/Soporte';
import { VerVisitasService } from 'src/app/service/ver-visitas.service';
import { Router } from '@angular/router';
import { UpdateVisitasComponent } from '../update-visitas/update-visitas.component';

@Component({
  selector: 'app-ver-visitas',
  templateUrl: './ver-visitas.component.html',
  styleUrls: ['./ver-visitas.component.css']
})
export class VerVisitasComponent {
  clientes:Cliente[];
  ubicacion:Ubicacion[];
  soporte:Soporte[];
  updVisita:Soporte=new Soporte;
  idSoporteSel:number;
  constructor(private verVisitas:VerVisitasService,
              private updateVisitas:VerVisitasService,
              private router:Router){
  }


detSoporte(){
  this.verVisitas.detalleSoporte(this.idSoporteSel).subscribe(p=>this.soporte=p);
}
updateSoporte(){
    this.updVisita.idSoporte=this.idSoporteSel;
    this.updVisita.estado="Pendiente Ruta";
    this.updateVisitas.updateSoporte(this.updVisita).subscribe({
      next:data=>this.router.navigate[("/ver-visitas")],
      error:data=>alert("ERROR en ingreso de datos")
    });
}
}
