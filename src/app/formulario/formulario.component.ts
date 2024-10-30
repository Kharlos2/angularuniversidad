import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { EstudianteService } from '../estudiante.service';
import { Estudiante } from '../interfaces/Estudiante';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  public formulario: FormGroup;

  constructor(private fabricaDatos: FormBuilder, private estudianteService: EstudianteService) {
    this.formulario = this.inicializarFormulario();
  }

  public inicializarFormulario(): FormGroup {
    return this.fabricaDatos.group({
      nombre: [''],
      correo: [''],
      documento: ['']
    });
  }

  public capturarDatos(): void {
    if (this.formulario.valid) {
      const nuevoEstudiante: Estudiante = {
        id: Date.now(), 
        nombre: this.formulario.value.nombre,
        correo: this.formulario.value.correo,
        documento: this.formulario.value.documento,
        acudiente: { id: 0, nombres: '', telefono: '' },
      };
      this.estudianteService.agregarEstudiante(nuevoEstudiante);
      this.formulario.reset();
    }
  }
}