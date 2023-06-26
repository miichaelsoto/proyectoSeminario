import { VerClientesService } from 'src/app/service/ver-clientes.service';
import { Cliente } from './../../model/Clientes';
import { Soporte } from './../../model/Soporte';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {
    clientes:Cliente[];
    soporte:Soporte[];
    idClienteSel:number;
    constructor(private verClientes:VerClientesService){

    }
  ngOnInit(): void {
    this.verClientes.clientes().subscribe(c=>this.clientes=c);
  }

  detSoporte(){
    this.verClientes.detalleSoporte(this.idClienteSel).subscribe(p=>this.soporte=p);
  }
}
