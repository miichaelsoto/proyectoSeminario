import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soporte } from '../model/Soporte';

@Injectable({
  providedIn: 'root'
})
export class VerSoporteService {

  constructor(private http:HttpClient) { }

  clientes():Observable<any>{
    let url="http://34.125.195.31:8003/cliente";
    return this.http.get(url)
  }
    detalleSoporte(idSoporte:number):Observable<any>{
    let url="http://34.125.195.31:8003/soportes";
    let params=new HttpParams();
    params=params.append("idSoporte",idSoporte);
    return this.http.get(url,{"params":params});
  }
  detalleUbicacion(idCliente:number):Observable<any>{
    let url="http://34.125.195.31:8003/ubicacion";
    let params=new HttpParams();
    params=params.append("idCliente",idCliente);
    return this.http.get(url,{"params":params});
  }
  updateSoporte(soporte:Soporte):Observable<any>{
    let url="http://34.125.195.31:8003/updSop";
    return this.http.post(url,soporte);
  }
}
