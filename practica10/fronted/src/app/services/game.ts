import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Game {

  private apiUrl = 'http://localhost:5000/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createGame(game: any): Observable<any> {
    return this.http.post(this.apiUrl, game);
  }

  deleteGame(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateGame(id: string, game: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, game);
  }
}