export interface Extra {
  nombre: string
  precio: number
}

export interface Producto {

  _id?: string   // 🔥 Mongo ID

  nombre: string
  descripcion: string
  precio: number
  imagen: string
  categoria: string

  ingredientes: string[]
  extras: Extra[]

  popular?: boolean
}