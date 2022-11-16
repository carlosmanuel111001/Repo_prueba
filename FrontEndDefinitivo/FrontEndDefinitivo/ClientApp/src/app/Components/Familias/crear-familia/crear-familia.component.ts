import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Familias } from '../../../Model/Familias';
import { MetodoFamiliaService } from '../../../Services/metodo-familia.service';

@Component({
  selector: 'app-crear-familia',
  templateUrl: './crear-familia.component.html',
  styleUrls: ['./crear-familia.component.css']
})
export class CrearFamiliaComponent implements OnInit {

  constructor(private service: MetodoFamiliaService, private router: Router) { }
  familiadata: Familias;

  crearFamiliaform = new FormGroup({
    id_familia: new FormControl(''),
    nombre_madre: new FormControl(''),
    nombre_padre: new FormControl(''),
    numero_hermanos: new FormControl(''),
    id_alumno: new FormControl(''),
  });


  ngOnInit() {
  }
  postFamilia(form: Familias) {
    this.service.postFamilia(form).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(["ListarFamilia"]);
  }

  Salir() {
    this.router.navigate(["ListarFamilia"]);
  }
}



