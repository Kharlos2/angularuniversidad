import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(public servicio:HttpClient) { }

  public registarEstudiante(){}

  public buscarEstudiantes():Observable<any>{
    let url="http://localhost:8080/api/v1/estudiantes"
    return this.servicio.get(url)
  }

}
