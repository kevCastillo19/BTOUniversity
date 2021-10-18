import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarMateriaComponent } from './components/agregar-materia/agregar-materia.component';
import { ListarMateriasComponent } from './components/listar-materias/listar-materias.component';
import { ListarNotasComponent } from './components/listar-notas/listar-notas.component';
import { AgregarNotaComponent } from './components/agregar-nota/agregar-nota.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonajesComponent } from './components-api/personajes/personajes.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { EditarMateriaComponent } from './components/editar-materia/editar-materia.component';
import { EditarNotaComponent } from './components/editar-nota/editar-nota.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AgregarAlumnoComponent,
    ListarAlumnosComponent,
    AgregarMateriaComponent,
    ListarMateriasComponent,
    ListarNotasComponent,
    AgregarNotaComponent,
    PersonajesComponent,
    EditarAlumnoComponent,
    EditarMateriaComponent,
    EditarNotaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
