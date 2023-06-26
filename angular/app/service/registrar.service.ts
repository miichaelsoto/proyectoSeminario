import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuarios'

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http:HttpClient) { }

  registrar(usuario:Usuario):Observable<any>{
    let url="http://34.125.195.31:8002/registrar";
    return this.http.post(url,usuario);
  }
}
