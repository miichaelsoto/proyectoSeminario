import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/Clientes';
import { Ubicacion } from 'src/app/model/Ubicacion';
import { Soporte } from 'src/app/model/Soporte';
import { VerSoporteService } from 'src/app/service/ver-soporte.service';

@Component({
  selector: 'app-ver-soportes',
  templateUrl: './ver-soportes.component.html',
  styleUrls: ['./ver-soportes.component.css']
})
export class VerSoportesComponent {
  clientes:Cliente[];
  ubicacion:Ubicacion[];
  soporte:Soporte[];
  idSoporteSel:number;
  updVisita:Soporte=new Soporte();
  router: any;
  constructor(private verSoporte:VerSoporteService,
              private updateSoporte:VerSoporteService){

  }
ngOnInit(): void {
  this.verSoporte.clientes().subscribe(c=>this.clientes=c);
}

detSoporte(){
  this.verSoporte.detalleSoporte(this.idSoporteSel).subscribe(p=>this.soporte=p);
}
updSoporte(){
  this.updVisita.idSoporte=this.idSoporteSel;
  this.updateSoporte.updateSoporte(this.updVisita).subscribe({
    next:data=>this.router.navigate[("/ver-soportes")],
    error:data=>alert("ERROR en ingreso de datos")
  });
}
}
