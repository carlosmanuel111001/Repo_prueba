import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MetodoAlumnoService } from 'src/app//Services/metodo-alumno.service';
import { Alumno } from '../../../Model/Alumno';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {

  constructor(private services: MetodoAlumnoService, private router: Router, private activedRouter: ActivatedRoute) { }

  alumnosdata: Alumno;

  editarform = new FormGroup({
    id_alumno: new FormControl(''),
    nombre_alumno: new FormControl(''),
    apellido_alumno: new FormControl(''),
    correo: new FormControl(''),
    contraseña: new FormControl(''),
    usuario: new FormControl(''),
    error: new FormControl('')
  });

  ngOnInit() {
    let alumnoid = this.activedRouter.snapshot.paramMap.get('id_alumno');
    this.services.getAlumnoId(alumnoid).subscribe(data => {
      this.alumnosdata = data;
      console.log(data);
      this.editarform.patchValue({
        'id_alumno': this.alumnosdata.id_alumno,
        'nombre_alumno': this.alumnosdata.nombre_alumno,
        'apellido_alumno': this.alumnosdata.apellido_alumno,
        'correo': this.alumnosdata.correo,
        'contraseña': this.alumnosdata.contraseña,
        'usuario': this.alumnosdata.usuario
      });

    });
  }

  putAlumno(form: Alumno) {
    this.services.putAlumno(form).subscribe(Data => {
      console.log(Data);
      alert("Datos Actualizados");
    });
    this.router.navigate(["ListarAlumno"]);
  }

  Salir() {
    this.router.navigate(["ListarAlumno"]);
  }
}
