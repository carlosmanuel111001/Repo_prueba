import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Familia } from '../Model/Familia';
import { Respuesta } from '../Model/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class FamiliaService {
  constructor(private http: HttpClient) { }

  url = 'https://localhost:44379/api/Familia';

  getFamilia() {
    return this.http.get<Familia[]>(this.url)
  }

  getFamiliaId(id_familia) {
    return this.http.get<Familia>(this.url + "/" + id_familia)
  }

  putFamilia(form: Familia) {
    return this.http.put<Respuesta>(this.url, form);
  }

  postFamilia(form: Familia) {
    return this.http.post<Respuesta>(this.url, form);
  }

  deleteFamilia(id) {
    return this.http.delete<Respuesta>(this.url + "/" + id);
  }
}
