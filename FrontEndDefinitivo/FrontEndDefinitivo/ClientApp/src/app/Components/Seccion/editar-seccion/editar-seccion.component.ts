import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MetodoSeccionService } from 'src/app//Services/metodo-seccion.service';
import { Seccion } from '../../../Model/Seccion';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-seccion',
  templateUrl: './editar-seccion.component.html',
  styleUrls: ['./editar-seccion.component.css']
})
export class EditarSeccionComponent implements OnInit {

  constructor(private services: MetodoSeccionService, private router: Router, private activedRouter: ActivatedRoute) { }
  secciondata: Seccion;

  editarSeccionform = new FormGroup({
    id_seccion: new FormControl(''),
    aula_sec: new FormControl(''),
    fecha_registro_seccion: new FormControl(''),
    id_curso: new FormControl(''),
    error: new FormControl('')
  });

  ngOnInit() {
    let seccionid = this.activedRouter.snapshot.paramMap.get('id_seccion');
    this.services.getSeccionId(seccionid).subscribe(data => {
      this.secciondata = data;
      console.log(data);
      this.editarSeccionform.patchValue({
        'id_seccion': this.secciondata.id_seccion,
        'aula_sec': this.secciondata.aula_sec,
        'fecha_registro_seccion': this.secciondata.fecha_registro_seccion,
        'id_curso': this.secciondata.id_seccion
      });

    });
  }
  putSeccion(form: Seccion) {
    this.services.putSeccion(form).subscribe(Data => {
      console.log(Data);
      alert("Datos Actualizados");
    });
    this.router.navigate(["ListarSeccion"]);
  }

  Salir() {
    this.router.navigate(["ListarSeccion"]);
  }


}
