import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/Models/nota';
import { Router } from '@angular/router';
import { NotaService } from '../../services/nota.service';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit {

  notas:Array<Nota> = new Array<Nota>();
  nota:Nota = new Nota();

  constructor(public notaService: NotaService, private ruta: Router) { };

  search:string = '';

  ngOnInit(): void {
    this.notas=this.notaService.notaLocalStorage;
  }

  borrarNota(notaP: Nota){
    this.notaService.borrarNota(notaP);
    this.notas=this.notaService.notaLocalStorage;
  }

  editarNota(notaP: Nota){
    this.nota = notaP;
    this.ruta.navigate(['editar-nota',{nota:JSON.stringify(notaP)}]);
  }

}
