import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(idUsuario:string, password:string):Observable<any>{
    let url ="http://3.136.18.2:8002/login";
    let params= new HttpParams();
    params = params.append("idUsuario", idUsuario);
    params = params.append("pwd", password);
    return this.http.get(url,{params:params});

  }
}
