var expect = require('chai').expect,
    Deck = require('../deck').Deck;
 Card = require('../card').Card;

describe('Deck object tests', function () {
    var deck;

    beforeEach(function () {
        deck = new Deck();
    });
   
    describe('constructor', function () {
        it('deck should be truthy (exists)', function () {
            expect(deck).to.be.ok;
            });
            it ('should store cards', function() {
            expect(deck).to.have.property("cards");
            });
            it ('should have some number of cards', function(){
            expect(deck.cards.length).to.have.length.equal(52);
            });

    });
});