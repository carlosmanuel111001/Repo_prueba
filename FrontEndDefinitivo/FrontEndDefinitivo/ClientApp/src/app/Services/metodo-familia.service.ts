import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Familias } from '../Model/Familias';
import { Respuesta } from '../Model/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class MetodoFamiliaService {

  constructor(private http: HttpClient) { }
  url = 'https://localhost:44379/api/Familia';

  getFamilia() {
    return this.http.get<Familias[]>(this.url)
  }

  getFamiliaId(id_familia) {
    return this.http.get<Familias>(this.url + "/" + id_familia)
  }

  putFamilia(form: Familias) {
    return this.http.put<Respuesta>(this.url, form);
  }

  postFamilia(form: Familias) {
    return this.http.post<Respuesta>(this.url, form);
  }

  deleteFamilia(id_familia) {
    return this.http.delete<Respuesta>(this.url + "/" + id_familia);
  }
}
