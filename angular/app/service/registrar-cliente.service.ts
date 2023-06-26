import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/Clientes'
import { Observable } from 'rxjs';
import { Ubicacion } from '../model/Ubicacion';

@Injectable({
  providedIn: 'root'
})
export class RegistrarClienteService {

  constructor(private http:HttpClient) { }

  registrar(cliente:Cliente):Observable<any>{
    let url="http://34.125.195.31:8001/registrarCli";
    return this.http.post(url,cliente);
  }

  registrarUbi(ubicacion:Ubicacion):Observable<any>{
    let url="http://34.125.195.31:8001/registrarUbi";
    return this.http.post(url,ubicacion);
  }
}
