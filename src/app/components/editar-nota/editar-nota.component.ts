import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';
import { MateriaService } from '../../services/materia.service';
import { Alumno } from 'src/app/Models/alumno';
import { Materia } from 'src/app/Models/materia';
import { Nota } from 'src/app/Models/nota';
import { ActivatedRoute } from '@angular/router';
import { NotaService } from '../../services/nota.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {

  alumnos: Array<Alumno> = new Array<Alumno>();
  materias: Array<Materia> = new Array<Materia>();

  frmEditarNota: FormGroup;
  notaOld: Nota = new Nota();
  notaNew: Nota = new Nota();
  notas: Array<Nota> = new Array<Nota>();
  indice:number = -1;

  constructor(private fb: FormBuilder,
    public alumnoService: AlumnoService,
    public materiaService: MateriaService,
    public notaService: NotaService,
    private route: ActivatedRoute) {
    this.frmEditarNota = this.fb.group({
      alumnoN: ['', Validators.required],
      materiaN: ['', Validators.required],
      evaluacion: ['', Validators.required],
      nota: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.frmEditarNota = this.fb.group({
      alumnoN: ['', Validators.required],
      materiaN: ['', Validators.required],
      evaluacion: ['', Validators.required],
      nota: ['', Validators.required]
    });

    this.alumnos = this.alumnoService.alumnoLocalStorage;
    this.materias = this.materiaService.materiaLocalStorage;

    this.notaOld = JSON.parse(this.route.snapshot.params.nota);

    this.notas = this.notaService.notaLocalStorage;

    this.notas.forEach((element, index) => {
      if (element.alumnoN == this.notaOld.alumnoN &&
          element.materiaN == this.notaOld.materiaN &&
          element.evaluacion == this.notaOld.evaluacion) {
        this.indice = index;
      }
    })
  }

  editarNota(){
    this.notaNew = this.frmEditarNota.value;
    this.notaService.editarNota(this.indice, this.notaNew);
  }

}
