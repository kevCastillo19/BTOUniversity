import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import { AgregarMateriaComponent } from './components/agregar-materia/agregar-materia.component';
import { ListarMateriasComponent } from './components/listar-materias/listar-materias.component';
import { AgregarNotaComponent } from './components/agregar-nota/agregar-nota.component';
import { ListarNotasComponent } from './components/listar-notas/listar-notas.component';
import { PersonajesComponent } from './components-api/personajes/personajes.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { EditarMateriaComponent } from './components/editar-materia/editar-materia.component';
import { EditarNotaComponent } from './components/editar-nota/editar-nota.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'agregar-alumno', component: AgregarAlumnoComponent
  },
  {
    path: 'listar-alumno', component: ListarAlumnosComponent
  },
  {
    path: 'agregar-materia', component: AgregarMateriaComponent
  },
  {
    path: 'listar-materia', component: ListarMateriasComponent
  },
  {
    path: 'agregar-nota', component: AgregarNotaComponent
  },
  {
    path: 'listar-nota', component: ListarNotasComponent
  },
  {
    path: 'personajes', component: PersonajesComponent
  },
  {
    path: 'editar-alumno', component: EditarAlumnoComponent
  },
  { 
    path: 'editar-materia', component: EditarMateriaComponent 
  },
  {
    path: 'editar-nota', component: EditarNotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
