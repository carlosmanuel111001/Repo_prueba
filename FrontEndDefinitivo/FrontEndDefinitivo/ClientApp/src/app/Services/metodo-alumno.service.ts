import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../Model/Alumno';
import { Respuesta } from '../Model/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class MetodoAlumnoService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:44379/api/Alumno';

  getAlumno() {
    return this.http.get<Alumno[]>(this.url)
  }

  getAlumnoId(id_alumno) {
    return this.http.get<Alumno>(this.url + "/" + id_alumno)
  }

  putAlumno(form: Alumno) {
    return this.http.put<Respuesta>(this.url, form);
  }

  postAlumno(form: Alumno) {
    return this.http.post<Respuesta>(this.url, form);
  }

  deleteAlumno(id) {
    return this.http.delete<Respuesta>(this.url + "/" + id);
  }
  
}
