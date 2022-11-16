import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MetodoCursoService } from 'src/app//Services/metodo-curso.service';
import { Curso } from '../../../Model/Curso';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  constructor(private services: MetodoCursoService, private router: Router, private activedRouter: ActivatedRoute) { }
  cursosdata: Curso;

  editarCursoform = new FormGroup({
    id_curso: new FormControl(''),
    descripcion_curso: new FormControl(''),
    precio_curso: new FormControl(''),
    dias_curso: new FormControl(''),
    error: new FormControl('')
  });

  ngOnInit() {
    let cursoid = this.activedRouter.snapshot.paramMap.get('id_curso');
    this.services.getCursoId(cursoid).subscribe(data => {
      this.cursosdata = data;
      console.log(data);
      this.editarCursoform.patchValue({
        'id_curso': this.cursosdata.id_curso,
        'descripcion_curso': this.cursosdata.descripcion_curso,
        'precio_curso': this.cursosdata.precio_curso,
        'dias_curso': this.cursosdata.dias_curso
      });

    });
  }
  putCurso(form: Curso) {
    this.services.putCurso(form).subscribe(Data => {
      console.log(Data);
      alert("Datos Actualizados");
    });
    this.router.navigate(["ListarCurso"]);
  }

  Salir() {
    this.router.navigate(["ListarCurso"]);
  }

}
