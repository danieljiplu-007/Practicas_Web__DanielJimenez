import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../services/game';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  games: any[] = [];
  selectedGame: any = null;

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

  selectGame(game: any) {
    this.selectedGame = game;
  }

  closeModal() {
    this.selectedGame = null;
  }

}