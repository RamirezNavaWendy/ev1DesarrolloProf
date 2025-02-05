import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado-ejemplo2',
  imports: [],
  templateUrl: './dado-ejemplo2.component.html',
  styleUrl: './dado-ejemplo2.component.css'
})
export class DadoEjemplo2Component {
//propiedades
 /*valor: number = Math.floor(Math.random()*6)+1*/
 @Input() valor: string ='';
}
