import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs'
import { Producto } from '../models/producto'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'https://elchinaloense-backend.onrender.com/platillos'

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.map(p => ({
        ...p,
        ingredientes: p.ingredientes || [],
        extras: p.extras || [],
        imagen: p.imagen || '',
        nombre: p.nombre || '',
        descripcion: p.descripcion || '',
        categoria: p.categoria || '',
        precio: p.precio || 0
      })))
    )
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