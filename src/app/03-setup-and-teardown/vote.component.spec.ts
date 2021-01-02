import { VoteComponent } from './vote.component';

// UNIT TEST
describe('VoteComponent{}', () => {
  let vote: VoteComponent;

  beforeEach(() => {
    vote = new VoteComponent(); // -> totalVotes = 0;
  });

  it(`should increase 'totalVotes' when upvoted`, () => {
    vote.upVote();

    expect(vote.getTotalVotes).toBe(1); // log -> totalVotes = 1;
  });

  it(`should decrease 'totalVotes' when downvoted`, () => {
    vote.downVote();

    expect(vote.getTotalVotes).toBe(-1); // log -> totalVotes = -1;
  });
});

/*
  NOTE:
  Use beforeEach() to isolate specs and not pipe their result in 
  spec state. Here we wanna test upVote(),downVote() separately.
*/

//  "SETUP" => beforeEach() is perfect to initialize variables.

//  "TEAR DOWN" => afterEach() is perfect for clean up after specs.
