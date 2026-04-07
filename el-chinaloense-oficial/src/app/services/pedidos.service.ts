import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private apiUrl = 'https://elchinaloense-backend.onrender.com/pedidos';

  constructor(private http: HttpClient) {}

  
  guardarPedido(pedido: any): Observable<any> {
    return this.http.post(this.apiUrl, pedido);
  }

 
  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  
  actualizarEstado(id: string, estado: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { estado });
  }

}