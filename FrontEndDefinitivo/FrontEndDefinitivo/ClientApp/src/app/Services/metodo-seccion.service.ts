import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seccion } from '../Model/Seccion';
import { Respuesta } from '../Model/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class MetodoSeccionService {

  constructor(private http: HttpClient) { }
  url = 'https://localhost:44379/api/Seccion';

  getSeccion() {
    return this.http.get<Seccion[]>(this.url)
  }

  getSeccionId(id_seccion) {
    return this.http.get<Seccion>(this.url + "/" + id_seccion)
  }

  putSeccion(form: Seccion) {
    return this.http.put<Respuesta>(this.url, form);
  }

  postSeccion(form: Seccion) {
    return this.http.post<Respuesta>(this.url, form);
  }

  deleteSeccion(id_seccion) {
    return this.http.delete<Respuesta>(this.url + "/" + id_seccion);
  }
}

