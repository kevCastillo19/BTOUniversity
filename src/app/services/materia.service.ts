import { Injectable } from '@angular/core';
import { Materia } from '../Models/materia';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  indice:number = -1;

  constructor(private ruta: Router) { }

  guardarMateria(materia: Materia) {
    let materias: Materia[] = this.materiaLocalStorage;
    materias.push(materia);
    localStorage.setItem('materias',JSON.stringify(materias));
  }

  get materiaLocalStorage(): Materia[] {
    let getMaterias: Materia[] = JSON.parse(localStorage.getItem("materias") || "null");
    if (getMaterias == null) {
      return new Array<Materia>();
    }
    return getMaterias;
  }

  editarMateria(indice: number, materiaNuevo: Materia){
    let materias: Materia[] = this.materiaLocalStorage;
    materias[indice] = materiaNuevo;
    localStorage.setItem('materias', JSON.stringify(materias));
    this.ruta.navigate(['listar-materia']);
  }

  borrarMateria(codigoP:string){
    let materias: Materia[] = this.materiaLocalStorage;
    materias.forEach((element, index) => {
      if (element.codigoMateria == codigoP) {
        this.indice = index;
      }
    })

    materias.splice(this.indice, 1);
    localStorage.setItem('materias', JSON.stringify(materias));
  }
  
}
