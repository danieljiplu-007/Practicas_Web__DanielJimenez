import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../services/game';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.html'
})
export class Listado implements OnInit {

  games: any[] = [];

  constructor(private gameService: Game) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
    this.gameService.getGames().subscribe({
      next: (data) => {
        this.games = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  deleteGame(id: string) {
    if (confirm("¿Seguro que deseas eliminar?")) {
      this.gameService.deleteGame(id).subscribe({
        next: () => {
          alert("Eliminado correctamente");
          this.loadGames();
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
}