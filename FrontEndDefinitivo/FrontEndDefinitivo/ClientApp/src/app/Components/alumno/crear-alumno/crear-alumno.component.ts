import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Alumno } from '../../../Model/Alumno';
import { MetodoAlumnoService } from '../../../Services/metodo-alumno.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  constructor(private service: MetodoAlumnoService, private router: Router) { }
  alumnosdata: Alumno;

  crearform = new FormGroup({
    id_alumno: new FormControl(''),
    nombre_alumno: new FormControl(''),
    apellido_alumno: new FormControl(''),
    correo: new FormControl(''),
    contraseña: new FormControl(''),
    usuario: new FormControl(''),
  });

  ngOnInit() {
  }

  postAlumno(form: Alumno) {
    this.service.postAlumno(form).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(["ListarAlumno"]); 
  }

  Salir() {
    this.router.navigate(["ListarAlumno"]);
  }
}
