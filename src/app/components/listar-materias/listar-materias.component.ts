import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materia } from '../../Models/materia';
import { MateriaService } from '../../services/materia.service';

@Component({
  selector: 'app-listar-materias',
  templateUrl: './listar-materias.component.html',
  styleUrls: ['./listar-materias.component.css']
})
export class ListarMateriasComponent implements OnInit {

  materias:Array<Materia> = new Array<Materia>();
  materia:Materia = new Materia();

  constructor(public materiaService: MateriaService, private ruta: Router) { };

  search:string = '';

  ngOnInit(): void {
    this.materias=this.materiaService.materiaLocalStorage;
  }

  borrarMateria(codigoP:string){
    this.materiaService.borrarMateria(codigoP);
    this.materias=this.materiaService.materiaLocalStorage;
  }


  editarMateria(materiaP: Materia){
    this.materia = materiaP;
    this.ruta.navigate(['editar-materia',{materia:JSON.stringify(materiaP)}]);
  }
}
