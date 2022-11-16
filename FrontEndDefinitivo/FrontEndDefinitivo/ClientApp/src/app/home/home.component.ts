import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent{
  constructor(private router: Router) { }

  Listar() {
    this.router.navigate(["ListarAlumno"])
  }

  ListarCurso() {
    this.router.navigate(["ListarCurso"])
  }

  ListarFamilia() {
    this.router.navigate(["ListarFamilia"])
  }

  ListarSeccion() {
    this.router.navigate(["ListarSeccion"])
  }
}
