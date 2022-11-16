import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetodoSeccionService } from 'src/app/Services/metodo-seccion.service';
import { Seccion } from '../../../Model/Seccion';

@Component({
  selector: 'app-listar-seccion',
  templateUrl: './listar-seccion.component.html',
  styleUrls: ['./listar-seccion.component.css']
})
export class ListarSeccionComponent implements OnInit {

  constructor(private services: MetodoSeccionService, private router: Router) { }
  seccions: Seccion[];

  ngOnInit() {
    this.services.getSeccion().subscribe(Data => {
      this.seccions = Data;
    });
  }
  EditarSeccion(id_seccion) {
    this.router.navigate(["EditarSeccion", id_seccion]);
  }

  EliminarSeccion(id) {
    this.services.deleteSeccion(id).subscribe(Data => console.log(Data));
    window.location.reload();
  }

  CrearSeccion() {
    this.router.navigate(["CrearSeccion"]);
  }
}
