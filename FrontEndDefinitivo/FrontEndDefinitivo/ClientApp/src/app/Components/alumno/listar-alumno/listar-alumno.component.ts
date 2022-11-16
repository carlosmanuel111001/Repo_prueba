import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetodoAlumnoService } from 'src/app/Services/metodo-alumno.service';
import { Alumno } from '../../../Model/Alumno';

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.css']
})
export class ListarAlumnoComponent implements OnInit {

  constructor(private services: MetodoAlumnoService, private router: Router) { }

  alumnos: Alumno[];

  ngOnInit() {
    this.services.getAlumno().subscribe(Data => {
      this.alumnos = Data;
    });
  }

  EditarAlumno(id_alumno) {
    this.router.navigate(["EditarAlumno", id_alumno]);
  }

  EliminarAlumno(id) {
    this.services.deleteAlumno(id).subscribe(Data => console.log(Data));
    window.location.reload();
  }

  CrearAlumno() {
    this.router.navigate(["CrearAlumno"]);
  }

}
