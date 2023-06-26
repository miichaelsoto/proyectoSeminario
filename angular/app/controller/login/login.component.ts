import { MenuComponent } from './../menu/menu.component';
import { LoginService } from './../../service/login.service';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/Usuarios'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario:string;
  password:string;
  user:Usuario;
  constructor (private loginService:LoginService,
               private menuComponent:MenuComponent,
               private router:Router){}

  login(){
    this.loginService.login(this.usuario, this.password).subscribe(data=>{
      this.user=data;
      if(this.user!=null){//usuraio invalido
        this.menuComponent.usuario=this.user;
        this.menuComponent.enabled=true;
        this.menuComponent.enabled1=false;
        alert("Usuario correcto");
        this.router.navigate(["/principal"]);
      }else{
        alert("Usuario incorrecto");
      }
    })
  }

}
