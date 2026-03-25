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

this.pedidos=this.pedidosService.getPedidos()

}

}