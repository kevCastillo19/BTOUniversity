import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Materia } from '../../Models/materia';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.css']
})
export class AgregarMateriaComponent implements OnInit {

  frmAgregarMateria:FormGroup;
  materia:Materia = new Materia();

  constructor(private fb:FormBuilder, public materiaService: MateriaService) { 
    this.frmAgregarMateria=this.fb.group({
      codigoMateria:['',Validators.required],
      materia:['',Validators.required],
      docente:['',Validators.required],
      equivalencias:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.frmAgregarMateria=this.fb.group({
      codigoMateria:['',Validators.required],
      materia:['',Validators.required],
      docente:['',Validators.required],
      equivalencias:['',Validators.required]
    });
  }

  guardarMateria(){
    this.materia=this.frmAgregarMateria.value as Materia;
    this.materiaService.guardarMateria(this.materia);
    this.frmAgregarMateria.reset();
  }

}
