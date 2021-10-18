import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from '../../Models/alumno';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {

  alumnos:Array<Alumno> = new Array<Alumno>();
  alumno:Alumno = new Alumno();

  constructor(public alumnoService: AlumnoService, private ruta: Router) { }

  search:string = '';

  ngOnInit(): void {
    this.alumnos=this.alumnoService.alumnoLocalStorage;
  }

  borrarAlumno(codigoP:string){
    this.alumnoService.borrarAlumno(codigoP);
    this.alumnos=this.alumnoService.alumnoLocalStorage;
  }

  editarAlumno(alumnoP: Alumno){
    this.alumno = alumnoP;
    this.ruta.navigate(['editar-alumno',{alumno:JSON.stringify(alumnoP)}]);
  }
}
