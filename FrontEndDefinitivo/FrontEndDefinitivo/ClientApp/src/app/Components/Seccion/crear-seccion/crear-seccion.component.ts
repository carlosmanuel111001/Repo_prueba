import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Seccion } from '../../../Model/Seccion';
import { MetodoSeccionService } from '../../../Services/metodo-seccion.service';

@Component({
  selector: 'app-crear-seccion',
  templateUrl: './crear-seccion.component.html',
  styleUrls: ['./crear-seccion.component.css']
})
export class CrearSeccionComponent implements OnInit {

  constructor(private service: MetodoSeccionService, private router: Router) { }
  secciondata: Seccion;

  crearSeccionform = new FormGroup({
    id_seccion: new FormControl(''),
    aula_sec: new FormControl(''),
    fecha_registro_seccion: new FormControl(''),
    id_curso: new FormControl(''),
  });


  ngOnInit() {
  }
  postSeccion(form: Seccion) {
    this.service.postSeccion(form).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(["ListarSeccion"]);
  }

  Salir() {
    this.router.navigate(["ListarSeccion"]);
  }
}

