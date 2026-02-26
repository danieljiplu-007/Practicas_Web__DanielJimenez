import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Game } from '../../services/game';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html'
})
export class Formulario {

  game = {
    nombre: '',
    genero: '',
    precio: 0,
    imagenUrl: ''
  };

  constructor(private gameService: Game) {}

  onSubmit() {
    this.gameService.createGame(this.game).subscribe({
      next: () => {
        alert("Videojuego agregado correctamente");
        this.game = {
          nombre: '',
          genero: '',
          precio: 0,
          imagenUrl: ''
        };
      },
      error: (error) => {
        console.error(error);
        alert("Error al guardar");
      }
    });
  }
}