import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Soporte } from 'src/app/model/Soporte';
import { VerVisitasService } from 'src/app/service/ver-visitas.service';

@Component({
  selector: 'app-update-visitas',
  templateUrl: './update-visitas.component.html',
  styleUrls: ['./update-visitas.component.css']
})
export class UpdateVisitasComponent {
  updVisita:Soporte= new Soporte;
  idSoporte:number;
  constructor(private updateVisita:VerVisitasService,
    private router:Router){

}
updateSoporte(idSoporte:number){

}
}
