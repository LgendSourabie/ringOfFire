import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  pickCardAnimation = false;
  game: Game = new Game();
  currentCard: string = '';

  constructor() {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }
  pickCard() {
    if (!this.pickCardAnimation) {
      let removedCard = this.game.stack.pop();
      if (removedCard != undefined) {
        this.currentCard = removedCard;
      }
      this.pickCardAnimation = true;
      // console.log(this.game.playedCard);
      // console.log(this.game);
    }
    // console.log(this.currentCard);
    setTimeout(() => {
      this.game.playedCard.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
  }
}
