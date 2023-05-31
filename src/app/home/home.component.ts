import { Component } from '@angular/core';
import { Estudiante } from '../interfaces/Estudiante';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //atributos
  public estudiantes:Estudiante[]=[]
 
  //quemando 5 estudaintes
  public estudiante1:Estudiante={
    id:1,
    nombre:"Juan José",
    correo:"juan@gmail.com",
    documento:"123456",
    acudiente:{
      id:1,
      nombres:"Jose Gallego",
      telefono:"32565"
    }
  }

  public estudiante2:Estudiante={
    id:2,
    nombre:"Sara Sofia",
    correo:"sara@gmail.com",
    documento:"123456",
    acudiente:{
      id:2,
      nombres:"Andres Mazo",
      telefono:"32565"
    }
  }

  public estudiante3:Estudiante={
    id:2,
    nombre:"Carlos Mario",
    correo:"carlos@gmail.com",
    documento:"123456",
    acudiente:{
      id:3,
      nombres:"Martha Gallo",
      telefono:"32565"
    }
  }

  public constructor(){
    //llamamos al servicio y cargamos los estudiantes
    this.estudiantes.push(this.estudiante1)
    this.estudiantes.push(this.estudiante2)
    this.estudiantes.push(this.estudiante3)
    console.log(this.estudiantes)
    
  }

}
