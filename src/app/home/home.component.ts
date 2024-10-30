import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../interfaces/Estudiante';
import { EstudianteService } from '../estudiante.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public estudiantes: Estudiante[] = [];

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.estudiantes = this.estudianteService.getEstudiantes();
    // Inicializar estudiantes moqueados
    this.estudianteService.agregarEstudiante({
      id: 1,
      nombre: 'Juan José',
      correo: 'juan@gmail.com',
      documento: '123456',
      acudiente: { id: 1, nombres: 'Jose Gallego', telefono: '32565' },
    });
    this.estudianteService.agregarEstudiante({
      id: 2,
      nombre: 'Sara Sofia',
      correo: 'sara@gmail.com',
      documento: '123456',
      acudiente: { id: 2, nombres: 'Andres Mazo', telefono: '32565' },
    });
  }

  eliminarEstudiante(id: number): void {
    this.estudianteService.eliminarEstudiante(id);
    this.estudiantes = this.estudianteService.getEstudiantes();
  }
}