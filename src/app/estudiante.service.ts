import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Estudiante } from './interfaces/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private estudiantes: Estudiante[] = [];

  constructor() {}

  getEstudiantes(): Estudiante[] {
    return this.estudiantes;
  }

  agregarEstudiante(estudiante: Estudiante): void {
    this.estudiantes.push(estudiante);
  }

  eliminarEstudiante(id: number): void {
    this.estudiantes = this.estudiantes.filter(est => est.id !== id);
  }
}