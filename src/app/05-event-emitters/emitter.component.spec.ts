import { EmitterComponent } from './emitter.component';

describe('EmitterComponent{}', () => {

  // owner THIS !
  beforeEach(function () {
    this.component = new EmitterComponent();
  });

  it('should increase "totalVotes" when upVoted()', function () {
    let emitedVotes: null | number;
    this.component.totalVotesEmmiter.subscribe(
      (tv: null | number) => (emitedVotes = tv)
    );

    this.component.upVote();

    expect(emitedVotes).toBe(1);
  });
});
