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

    const rol = this.authService.login(this.email, this.password);

    // ADMIN
    if(rol === 'admin'){
      this.router.navigate(['/admin']);
    }

    // CLIENTE
    else if(rol === 'cliente'){
      this.router.navigate(['/']);
    }

    // SI ES NULL NO HACE NADA (YA SE MOSTRÓ ALERT EN EL SERVICE)

  }

}