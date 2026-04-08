import { Component } from '@angular/core'; 
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  login(){

    const data = {
      correo: this.email,
      password: this.password
    };

    this.authService.login(data).subscribe({

      next: (res:any) => {

        localStorage.setItem('usuario', JSON.stringify(res.usuario));

        if(res.usuario.correo === 'admin@admin.com'){
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }

      },

      error: () => {
        alert("Credenciales incorrectas ❌");
      }

    });

  }

}