import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  pickCardAnimation = false;
  constructor() {}
  pickCard() {
    this.pickCardAnimation = true;
  }
}
