import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private apiUrl = 'http://127.0.0.1:5000/eventos';

  constructor(private http: HttpClient) {}

  getEventos() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
