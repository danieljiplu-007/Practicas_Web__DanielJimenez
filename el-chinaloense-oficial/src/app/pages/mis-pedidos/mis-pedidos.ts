import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';

@Component({
selector:'app-mis-pedidos',
standalone:true,
imports:[CommonModule],
templateUrl:'./mis-pedidos.html',
styleUrls:['./mis-pedidos.css']
})
export class MisPedidosComponent{

pedidos:any[]=[]

constructor(private pedidosService:PedidosService){}

ngOnInit(){

const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

this.pedidosService.getPedidos().subscribe(data => {

  if(usuario?.correo === 'admin@admin.com'){
    this.pedidos = data;
  } else {
    this.pedidos = data.filter((p:any) => p.usuarioId === usuario?._id);
  }

});

}

}