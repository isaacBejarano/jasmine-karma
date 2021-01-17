import { EventEmitter, Output } from '@angular/core';

export class EmitterComponent {
  totalVotes = 0;
  @Output() totalVotesEmmiter = new EventEmitter<null | number>();

  upVote() {
    this.totalVotes++;
    this.totalVotesEmmiter.emit(this.totalVotes);
  }
}
