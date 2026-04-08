import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

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

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  registrar(){

    if(!this.nombre || !this.email || !this.password){
      alert('Todos los campos son obligatorios');
      return;
    }

    if(this.password.length < 6){
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    const data = {
      nombre: this.nombre,
      correo: this.email,
      password: this.password
    };

    this.authService.registro(data).subscribe({

      next: () => {
        alert('Cuenta creada correctamente ✅');
        this.router.navigate(['/login']);
      },

      error: (err) => {
        alert(err.error?.error || 'Error al registrar ❌');
      }

    });

  }

}