import { MenuComponent } from './../menu/menu.component';
import { LoginService } from './../../service/login.service';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/Usuarios'

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
               private menuComponent:MenuComponent){}

  login(){
    this.loginService.login(this.usuario, this.password).subscribe(data=>{
      this.user=data;
      if(this.user!=null){//usuraio invalido
        this.menuComponent.usuario=this.user;
        alert("Usuario correcto");
      }else{
        alert("Usuario incorrecto");
      }
    })
  }

}
