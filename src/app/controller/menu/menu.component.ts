import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/Usuarios';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  enabled:boolean =false;
  usuario:Usuario;
}
