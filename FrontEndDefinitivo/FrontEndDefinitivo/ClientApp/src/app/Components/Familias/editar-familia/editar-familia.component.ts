import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MetodoFamiliaService } from 'src/app//Services/metodo-familia.service';
import { Familias } from '../../../Model/Familias';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-familia',
  templateUrl: './editar-familia.component.html',
  styleUrls: ['./editar-familia.component.css']
})
export class EditarFamiliaComponent implements OnInit {

  constructor(private services: MetodoFamiliaService, private router: Router, private activedRouter: ActivatedRoute) { }
  familiadata: Familias;

  editarFamiliaform = new FormGroup({
    id_familia: new FormControl(''),
    nombre_madre: new FormControl(''),
    nombre_padre: new FormControl(''),
    numero_hermanos: new FormControl(''),
    id_alumno: new FormControl(''),
    error: new FormControl('')
  });
  ngOnInit() {
    let familiaid = this.activedRouter.snapshot.paramMap.get('id_familia');
    this.services.getFamiliaId(familiaid).subscribe(data => {
      this.familiadata = data;
      console.log(data);
      this.editarFamiliaform.patchValue({
        'id_familia': this.familiadata.id_familia,
        'nombre_madre': this.familiadata.nombre_madre,
        'nombre_padre': this.familiadata.nombre_padre,
        'numero_hermanos': this.familiadata.numero_hermanos,
        'id_alumno': this.familiadata.id_alumno
      });

    });
  }
  putFamilia(form: Familias) {
    this.services.putFamilia(form).subscribe(Data => {
      console.log(Data);
      alert("Datos Actualizados");
    });
    this.router.navigate(["ListarFamilia"]);
  }

  Salir() {
    this.router.navigate(["ListarFamilia"]);
  }

}
