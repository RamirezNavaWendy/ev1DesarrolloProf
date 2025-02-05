import { Component } from '@angular/core';
import { DadoEjemplo2Component } from '../../dado/dado-ejemplo2/dado-ejemplo2.component';

@Component({
  selector: 'app-ejemplo-2',
  imports: [DadoEjemplo2Component],
  templateUrl: './ejemplo-2.component.html',
  styleUrl: './ejemplo-2.component.css'
})
export class Ejemplo2Component {
  title = 'ejemplo2';

  //propiedades
  resultado:string ='';
  valor1:number = this.generarAleatorio();
  valor2:number = this.generarAleatorio();
  valor3:number = this.generarAleatorio();

  //funcion para generar los aletorios entre 1 y 6
  generarAleatorio(){
    return Math.floor(Math.random()*6)+1;
  }

  //funcion que hace la tirada y verifica el resultado
  tirarDados(){
    this.valor1=this.generarAleatorio();
    this.valor2=this.generarAleatorio();
    this.valor3=this.generarAleatorio();

    //comparamos si los 3 son iguales
    if(this.valor1 == this.valor2 && this.valor1 == this.valor3){
      this.resultado="Felicidades, GANASTE!!";
    }else{
      this.resultado="Lastima, perdiste. Sigue participando";
    }
  }
}
