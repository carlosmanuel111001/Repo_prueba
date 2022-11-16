import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../Model/Curso';
import { Respuesta } from '../Model/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class MetodoCursoService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:44379/api/Curso';

  getCurso() {
    return this.http.get<Curso[]>(this.url)
  }

  getCursoId(id_curso) {
    return this.http.get<Curso>(this.url + "/" + id_curso)
  }

  putCurso(form: Curso) {
    return this.http.put<Respuesta>(this.url, form);
  }

  postCurso(form: Curso) {
    return this.http.post<Respuesta>(this.url, form);
  }

  deleteCurso(id_curso) {
    return this.http.delete<Respuesta>(this.url + "/" + id_curso);
  }
}
