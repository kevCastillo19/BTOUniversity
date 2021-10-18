import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from '../../Models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {

  frmAgregarAlumno:FormGroup;
  alumno:Alumno = new Alumno();

  constructor(private fb:FormBuilder, public alumnoService: AlumnoService) { 
    this.frmAgregarAlumno=this.fb.group({
      codigo:['',Validators.required],
      nombre:['',Validators.required],
      carrera:['',Validators.required],
      ciclo:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.frmAgregarAlumno=this.fb.group({
      codigo:['',Validators.required],
      nombre:['',Validators.required],
      carrera:['',Validators.required],
      ciclo:['',Validators.required]
    });
  }

  guardarAlumno(){
    this.alumno=this.frmAgregarAlumno.value as Alumno;
    this.alumnoService.guardarAlumno(this.alumno);
    this.frmAgregarAlumno.reset();
  }
}
