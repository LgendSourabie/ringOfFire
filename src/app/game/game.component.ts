import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    NgFor,
    NgStyle,
    NgIf,
    PlayerComponent,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    GameInfoComponent,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  pickCardAnimation = false;
  game: Game = new Game();
  currentCard: string = '';
  animal: string = '';
  name: string = '';

  constructor(public dialog: MatDialog) {
    this.newGame();
  }

  /**
   * starts new game
   */
  newGame() {
    this.game = new Game();
  }

  /**
   * take card when the user clicks on it
   */
  pickCard() {
    if (!this.pickCardAnimation) {
      let removedCard = this.game.stack.pop();
      if (removedCard != undefined) {
        this.currentCard = removedCard;
      }
      this.pickCardAnimation = true;
    }

    this.game.currentPlayer++;
    this.game.currentPlayer =
      this.game.currentPlayer % this.game.players.length;

    setTimeout(() => {
      this.game.playedCard.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
  }

  /**
   * open dialog to dynamically add new users to the game
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe((name: string) => {
      if (name) this.game.players.push(name);
    });
  }
}
