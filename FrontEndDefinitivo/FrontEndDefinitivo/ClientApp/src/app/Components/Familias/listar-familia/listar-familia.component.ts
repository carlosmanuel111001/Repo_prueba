import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetodoFamiliaService } from 'src/app/Services/metodo-familia.service';
import { Familias } from '../../../Model/Familias';

@Component({
  selector: 'app-listar-familia',
  templateUrl: './listar-familia.component.html',
  styleUrls: ['./listar-familia.component.css']
})
export class ListarFamiliaComponent implements OnInit {

  constructor(private services: MetodoFamiliaService, private router: Router) { }
  familias: Familias[];
  ngOnInit() {
    this.services.getFamilia().subscribe(Data => {
      this.familias = Data;
    });
  }
  EditarFamilia(id_familia) {
    this.router.navigate(["EditarFamilia", id_familia]);
  }

  EliminarFamilia(id) {
    this.services.deleteFamilia(id).subscribe(Data => console.log(Data));
    window.location.reload();
  }

  CrearFamilia() {
    this.router.navigate(["CrearFamilia"]);
  }
}
