import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerClientesService {

  constructor(private http:HttpClient) { }

  clientes():Observable<any>{
    let url="http://34.125.195.31:8001/cliente";
    return this.http.get(url)
  }
    detalleSoporte(idCliente:number):Observable<any>{
    let url="http://34.125.195.31:8001/soportes";
    let params=new HttpParams();
    params=params.append("idCliente",idCliente);
    return this.http.get(url,{"params":params});
  }
}
