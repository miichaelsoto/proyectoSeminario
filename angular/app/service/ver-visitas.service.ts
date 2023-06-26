import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soporte } from '../model/Soporte';

@Injectable({
  providedIn: 'root'
})
export class VerVisitasService {

  constructor(private http:HttpClient) { }


    detalleSoporte(idSoporte:number):Observable<any>{
    let url="http://34.125.195.31:8004/soportes";
    let params=new HttpParams();
    params=params.append("idSoporte",idSoporte);
    return this.http.get(url,{"params":params});
  }

  updateSoporte(soporte:Soporte):Observable<any>{
    let url="http://34.125.195.31:8004/updSopVis";
    return this.http.post(url,soporte);
  }
}
