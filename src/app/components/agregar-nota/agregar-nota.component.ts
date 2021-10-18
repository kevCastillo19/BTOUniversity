import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Nota } from '../../Models/nota';
import { NotaService } from '../../services/nota.service';
import { AlumnoService } from '../../services/alumno.service';
import { MateriaService } from '../../services/materia.service';
import { Alumno } from 'src/app/Models/alumno';
import { Materia } from 'src/app/Models/materia';


@Component({
  selector: 'app-agregar-nota',
  templateUrl: './agregar-nota.component.html',
  styleUrls: ['./agregar-nota.component.css']
})
export class AgregarNotaComponent implements OnInit {

  alumnos:Array<Alumno> = new Array<Alumno>();
  materias:Array<Materia> = new Array<Materia>();

  frmAgregarNota:FormGroup;
  nota:Nota = new Nota();

  constructor(private fb:FormBuilder, 
              public NotaService: NotaService, 
              public alumnoService: AlumnoService,
              public materiaService: MateriaService) { 
    this.frmAgregarNota=this.fb.group({
      alumnoN:['',Validators.required],
      materiaN:['',Validators.required],
      evaluacion:['',Validators.required],
      nota:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.frmAgregarNota=this.fb.group({
      alumnoN:['',Validators.required],
      materiaN:['',Validators.required],
      evaluacion:['',Validators.required],
      nota:['',Validators.required]
    });

    this.alumnos=this.alumnoService.alumnoLocalStorage;
    this.materias=this.materiaService.materiaLocalStorage;
  }

  guardarNota(){
    this.nota=this.frmAgregarNota.value as Nota;
    this.NotaService.guardarNota(this.nota);
    this.frmAgregarNota.reset();
  }

}
