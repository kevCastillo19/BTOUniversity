import { Injectable } from '@angular/core';
import { Nota } from '../Models/nota';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  indice:number = -1;

  constructor(private ruta: Router) { }

  guardarNota(nota: Nota) {
    let notas: Nota[] = this.notaLocalStorage;
    notas.push(nota);
    localStorage.setItem('notas', JSON.stringify(notas));
  }

  get notaLocalStorage(): Nota[] {
    let getNotas: Nota[] = JSON.parse(localStorage.getItem("notas") || "null");
    if (getNotas == null) {
      return new Array<Nota>();
    }
    return getNotas;
  }

  editarNota(indice: number, notaNuevo: Nota){
    let notas: Nota[] = this.notaLocalStorage;
    notas[indice] = notaNuevo;
    localStorage.setItem('alumnos', JSON.stringify(notas));
    this.ruta.navigate(['listar-nota']);
  }

  borrarNota(notaP: Nota){
    let notas: Nota[] = this.notaLocalStorage;
    notas.forEach((element, index) => {
      if (element.alumnoN == notaP.alumnoN && element.materiaN == notaP.materiaN && element.evaluacion == notaP.evaluacion) {
        this.indice = index;
      }
    })
    
    notas.splice(this.indice,1);
    localStorage.setItem('notas', JSON.stringify(notas));
  }

}
