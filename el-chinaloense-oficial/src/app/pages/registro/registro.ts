import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports:[CommonModule, FormsModule, RouterModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {

  nombre = '';
  email = '';
  password = '';

  constructor(private router: Router){}

  registrar(){

    // VALIDAR CAMPOS VACÍOS
    if(!this.nombre || !this.email || !this.password){
      alert('Todos los campos son obligatorios');
      return;
    }

    // VALIDAR LONGITUD DE CONTRASEÑA
    if(this.password.length < 6){
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // VALIDAR CORREO REPETIDO
    const existe = usuarios.find((u:any) => u.email === this.email);

    if(existe){
      alert('Este correo ya está registrado');
      return;
    }

    const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      rol: 'cliente'
    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cuenta creada correctamente');

    this.router.navigate(['/login']);

  }

}