import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/Models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {

  frmEditarAlumno: FormGroup;
  alumnoOld: Alumno = new Alumno();
  alumnoNew: Alumno = new Alumno();
  alumnos: Array<Alumno> = new Array<Alumno>();
  indice:number = -1;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private alumnoService: AlumnoService) {
    this.frmEditarAlumno = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      carrera: ['', Validators.required],
      ciclo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.frmEditarAlumno = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      carrera: ['', Validators.required],
      ciclo: ['', Validators.required]
    });

    this.alumnoOld = JSON.parse(this.route.snapshot.params.alumno);

    this.alumnos = this.alumnoService.alumnoLocalStorage;

    this.alumnos.forEach((element, index) => {
      if (element.codigo == this.alumnoOld.codigo) {
        this.indice = index;
      }
    })
  }

  editarAlumno() {
    this.alumnoNew = this.frmEditarAlumno.value;
    this.alumnoService.editarAlumno(this.indice, this.alumnoNew);
  }

}
