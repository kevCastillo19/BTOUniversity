import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Materia } from 'src/app/Models/materia';
import { MateriaService } from '../../services/materia.service';

@Component({
  selector: 'app-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrls: ['./editar-materia.component.css']
})
export class EditarMateriaComponent implements OnInit {

  frmEditarMateria:FormGroup;
  materiaOld: Materia = new Materia();
  materiaNew: Materia = new Materia();
  materias: Array<Materia> = new Array<Materia>();
  indice:number = -1;

  constructor(private fb:FormBuilder, private route: ActivatedRoute, private materiaService: MateriaService) { 
    this.frmEditarMateria=this.fb.group({
      codigoMateria:['',Validators.required],
      materia:['',Validators.required],
      docente:['',Validators.required],
      equivalencias:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.frmEditarMateria=this.fb.group({
      codigoMateria:['',Validators.required],
      materia:['',Validators.required],
      docente:['',Validators.required],
      equivalencias:['',Validators.required]
    });

    this.materiaOld = JSON.parse(this.route.snapshot.params.materia);

    this.materias = this.materiaService.materiaLocalStorage;

    this.materias.forEach((element, index) => {
      if (element.codigoMateria == this.materiaOld.codigoMateria) {
        this.indice = index;
      }
    })
  }

  editarMateria(){
    this.materiaNew = this.frmEditarMateria.value;
    this.materiaService.editarMateria(this.indice, this.materiaNew)
  }

}
