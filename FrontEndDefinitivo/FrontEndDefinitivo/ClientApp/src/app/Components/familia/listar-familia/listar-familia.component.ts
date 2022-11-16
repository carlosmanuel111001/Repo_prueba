import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamiliaService } from 'src/app/Services/familia.service';
import { Familia } from '../../../Model/Familia';


@Component({
  selector: 'app-listar-familia',
  templateUrl: './listar-familia.component.html',
  styleUrls: ['./listar-familia.component.css']
})
export class ListarFamiliaComponent implements OnInit {

  constructor(private services: FamiliaService, private router: Router) { }

  familias: Familia[];

  ngOnInit() {
    this.services.getFamilia().subscribe(Data => {
      this.familias = Data;
    });
  }

  EliminarFamilia(id) {
    this.services.deleteFamilia(id).subscribe(Data => console.log(Data));
    window.location.reload();
  }

}
