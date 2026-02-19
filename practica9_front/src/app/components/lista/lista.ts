import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumnos } from '../../services/alumnos';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.html'
})
export class Lista implements OnInit {

  alumnos:any[] = [];

  constructor(private servicio:Alumnos){}

  ngOnInit(){
    this.servicio.obtenerAlumnos().subscribe((data:any)=>{
      this.alumnos = data;
    });
  }
}
