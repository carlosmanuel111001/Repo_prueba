import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetodoCursoService } from 'src/app/Services/metodo-curso.service';
import { Curso } from '../../../Model/Curso';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {

  constructor(private services: MetodoCursoService, private router: Router) { }
  cursos: Curso[];
  ngOnInit() {
    this.services.getCurso().subscribe(Data => {
      this.cursos = Data;
    });
  }
  EditarCurso(id_curso) {
    this.router.navigate(["EditarCurso", id_curso]);
  }

  EliminarCurso(id) {
    this.services.deleteCurso(id).subscribe(Data => console.log(Data));
    window.location.reload();
  }

  CrearCurso() {
    this.router.navigate(["CrearCurso"]);
  }
}
