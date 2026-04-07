import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Producto } from '../models/producto'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'https://elchinaloense-backend.onrender.com'

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl)
  }

  agregarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.apiUrl, producto)
  }

  actualizarProducto(id: string, producto: Producto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto)
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}