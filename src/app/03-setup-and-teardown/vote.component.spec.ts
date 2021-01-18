import { VoteComponent } from './vote.component';

// UNIT TEST
describe('VoteComponent{}', () => {
  // NOTE: variables assigned an instances must be defined outside SETUP/TEAR DOWN
  let vote: VoteComponent;

  beforeEach(() => {
    vote = new VoteComponent(); // state -> totalVotes = 0;
  });

  it(`should increase 'totalVotes' when upvoted`, () => {
    vote.upVote();

    expect(vote.getTotalVotes).toBe(1); // state  0 + 1 -> totalVotes = 1;
  });

  it(`should decrease 'totalVotes' when downvoted`, () => {
    vote.downVote();

    expect(vote.getTotalVotes).toBe(-1); // state 0 - 1 -> totalVotes = -1;
  });
});

/*
  NOTE:
  Use beforeEach() to isolate specs and not pipe their result in 
  spec state. Here we wanna test upVote(),downVote() separately.
  ie. stateless Tests. Every it() ha sits own state.


//  "SETUP" => beforeEach() is perfect to initialize variables.

//  "TEAR DOWN" => afterEach() is perfect for clean up after specs.

//  befreAll() and afterAll() are executed after/before all tests.



NOTE: SETUP/TEAR DOWN accept timeout as second Arg

beforeEach(() => { // code..., 1000 });


NOTE: use "THIS" only in testing "OBJECTS" to get rid of declaring variables outta SETUP/TEAR DOWN

  // OJO! You need "function" with "THIS" to scope to immediatley parent function (beforeEach()) and it()
  // instead of pointing to the HO function (describre) of the suite
  
   beforeEach( function () {
    this.model = new Model();
    this.view = new Card(this.model);
  });

  
https://gist.github.com/traviskaufman/11131303


NOTE: You can use SETUP/TEARDOWN inside tests!!!



describe('views.Card', function() {
  'use strict';
  
  beforeEach(function() {
    this.model = {};
    this.view = new CardView(this.model);
  });
  
  describe('.render', function() {
    beforeEach(function() {
      this.model.title = 'An Article';
      this.view.render();
    });
    
    it('creates a "cardTitle" h3 element set to the model\'s title', function() {
      expect(this.view.$el.find('.cardTitle')).toContainText(this.model.title);
    });
    
    describe('when the model card type is "author_card"', function() {
      beforeEach(function() {
        this.model.type = 'author_card';
        this.view.render();
      });
      
      it('adds an "authorCard" class to its $el', function() {
        expect(this.view.$el).toHaveClass('authorCard');
      });
    });
  });
  
  // ...
});

Because jasmine instantiates a new userContext object for each test case, we didn't have to worry about test pollution any more. This helped ensure isolation between our tests, making them a lot more reliable.

*/
