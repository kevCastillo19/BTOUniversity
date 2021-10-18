import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services-api/personajes.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  search:string = '';

  constructor(private personajesService: PersonajesService) { }

  allPersonajes: Observable<any> | undefined;
  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes(){
    this.allPersonajes = this.personajesService.getAll();
  }

}
