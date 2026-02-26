import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Game } from '../../services/game';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar.html'
})
export class Actualizar implements OnInit {

  games: any[] = [];
  selectedGame: any = null;

  constructor(private gameService: Game) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
    this.gameService.getGames().subscribe(data => {
      this.games = data;
    });
  }

  selectGame(game: any) {
    this.selectedGame = { ...game };
  }

  updateGame() {
    this.gameService.updateGame(
      this.selectedGame._id,
      this.selectedGame
    ).subscribe(() => {
      alert("Actualizado correctamente");
      this.loadGames();
      this.selectedGame = null;
    });
  }

  cancelEdit() {
    this.selectedGame = null;
  }
}