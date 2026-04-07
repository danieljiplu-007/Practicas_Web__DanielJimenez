export interface Extra{
nombre:string
precio:number
}

export interface Producto{

_id?: string   // 🔥 AGREGADO PARA MONGO

id:number
nombre:string
descripcion:string
precio:number
imagen:string
categoria:string

ingredientes:string[]
extras:Extra[]

popular?:boolean

}