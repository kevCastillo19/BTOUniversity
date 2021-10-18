import { Injectable } from '@angular/core';
import { Alumno } from '../Models/alumno';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  indice:number = -1;

  constructor(private ruta: Router) { }

  guardarAlumno(alumno: Alumno) {
    let alumnos: Alumno[] = this.alumnoLocalStorage;
    alumnos.push(alumno);
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }

  get alumnoLocalStorage(): Alumno[] {
    let getAlumnos: Alumno[] = JSON.parse(localStorage.getItem("alumnos") || "null");
    if (getAlumnos == null) {
      return new Array<Alumno>();
    }
    return getAlumnos;
  }

  editarAlumno(indice: number, alumnoNuevo: Alumno){
    let alumnos: Alumno[] = this.alumnoLocalStorage;
    alumnos[indice] = alumnoNuevo;
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
    this.ruta.navigate(['listar-alumno']);
  }

  borrarAlumno(codigoP:string){
    let alumnos: Alumno[] = this.alumnoLocalStorage;
    alumnos.forEach((element, index) => {
      if (element.codigo == codigoP) {
        this.indice = index
      }
    })

    alumnos.splice(this.indice, 1);
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }

}
