import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { PromoService } from '../../services/promo.service'
import { Promo } from '../../models/promo'

@Component({

selector:'app-admin-promo',

standalone:true,

imports:[CommonModule,FormsModule],

templateUrl:'./admin-promo.html',

styleUrls:['./admin-promo.css']

})

export class AdminPromoComponent{

promo:Promo

constructor(private promoService:PromoService){

this.promo=this.promoService.getPromo()

}

guardar(){

this.promoService.actualizarPromo(this.promo)

alert('Promoción actualizada')

}

subirImagen(event:any){

const file=event.target.files[0]

if(!file)return

const reader=new FileReader()

reader.onload=(e:any)=>{

this.promo.imagen=e.target.result

}

reader.readAsDataURL(file)

}

}