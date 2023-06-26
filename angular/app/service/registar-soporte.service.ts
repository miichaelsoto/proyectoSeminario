import { Injectable } from '@angular/core';
import { Soporte } from '../model/Soporte';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistarSoporteService {

  constructor(private http:HttpClient) { }

  registrar(soporte:Soporte):Observable<any>{
    let url="http://34.125.195.31:8003/registrarSop";
    return this.http.post(url,soporte);
  }

}
