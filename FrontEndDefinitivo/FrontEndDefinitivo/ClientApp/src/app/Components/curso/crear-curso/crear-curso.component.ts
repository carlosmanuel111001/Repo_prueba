import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Curso } from '../../../Model/Curso';
import { MetodoCursoService } from '../../../Services/metodo-curso.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  constructor(private service: MetodoCursoService, private router: Router) { }
  cursosdata: Curso;

  crearCursoform = new FormGroup({
    id_curso: new FormControl(''),
    descripcion_curso: new FormControl(''),
    precio_curso: new FormControl(''),
    dias_curso: new FormControl(''),
  });

  ngOnInit() {
  }
    postCurso(form: Curso) {
      this.service.postCurso(form).subscribe(data => {
        console.log(data);
      });
      this.router.navigate(["ListarCurso"]);
    }

    Salir() {
      this.router.navigate(["ListarCurso"]);
    }
  }


