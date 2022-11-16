import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MetodoAlumnoService } from './Services/metodo-alumno.service';
import { ListarAlumnoComponent } from './Components/alumno/listar-alumno/listar-alumno.component';
import { EditarAlumnoComponent } from './Components/alumno/editar-alumno/editar-alumno.component';
import { CrearAlumnoComponent } from './Components/alumno/crear-alumno/crear-alumno.component';
import { EditarCursoComponent } from './Components/curso/editar-curso/editar-curso.component';
import { CrearCursoComponent } from './Components/curso/crear-curso/crear-curso.component';
import { MetodoCursoService } from './Services/metodo-curso.service';
import { ListarFamiliaComponent } from './Components/Familias/listar-familia/listar-familia.component';
import { MetodoFamiliaService } from './Services/metodo-familia.service';
import { EditarFamiliaComponent } from './components/familias/editar-familia/editar-familia.component';
import { ListarCursoComponent } from './components/curso/listar-curso/listar-curso.component';
import { CrearFamiliaComponent } from './components/familias/crear-familia/crear-familia.component';
import { CrearSeccionComponent } from './components/Seccion/crear-seccion/crear-seccion.component';
import { ListarSeccionComponent } from './components/Seccion/listar-seccion/listar-seccion.component';
import { EditarSeccionComponent } from './components/Seccion/editar-seccion/editar-seccion.component';
import { MetodoSeccionService } from './Services/metodo-seccion.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ListarAlumnoComponent,
    EditarAlumnoComponent,
    CrearAlumnoComponent,
    EditarCursoComponent,
    CrearCursoComponent,
    ListarFamiliaComponent,
    EditarFamiliaComponent,
    ListarCursoComponent,
    CrearFamiliaComponent,
    CrearSeccionComponent,
    ListarSeccionComponent,
    EditarSeccionComponent,
    
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'ListarAlumno', component: ListarAlumnoComponent },
      { path: 'EditarAlumno/:id_alumno', component: EditarAlumnoComponent },
      { path: 'CrearAlumno', component: CrearAlumnoComponent },
      { path: 'EditarCurso/:id_curso', component: EditarCursoComponent },
      { path: 'CrearCurso', component: CrearCursoComponent },
      { path: 'ListarFamilia', component: ListarFamiliaComponent },
      { path: 'ListarCurso', component: ListarCursoComponent },
      { path: 'EditarFamilia/:id_familia', component: EditarFamiliaComponent },
      { path: 'CrearFamilia', component: CrearFamiliaComponent },
      { path: 'ListarSeccion', component: ListarSeccionComponent },
      { path: 'EditarSeccion/:id_seccion', component: EditarSeccionComponent },
      { path: 'CrearSeccion', component: CrearSeccionComponent },
    ])
  ],
  providers: [MetodoAlumnoService, MetodoCursoService, MetodoFamiliaService, MetodoSeccionService],
  bootstrap: [AppComponent]
   
})
export class AppModule { }
