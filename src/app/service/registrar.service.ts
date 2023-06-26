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
    let url="http://3.136.18.2:8002/registrar";
    return this.http.post(url,usuario);
  }
}
