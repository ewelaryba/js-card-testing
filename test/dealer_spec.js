var expect = require('chai').expect,
    Card = require('../card').Card,
    Player = require('../player').Player,
    Dealer = require('../dealer').Dealer;

describe('Dealers', function () {
    'use strict';
    var dealer;
    var player;

    beforeEach(function () {
        dealer = new Dealer();
        player = new Player();
    });
    describe('constructor', function () {
        it('card should be truthy (exists)', function () {
            expect(dealer).to.be.ok;
        });
        it('should have a deck', function () {
            expect(dealer).to.have.property("deck");
        });
       
        it('should be able to pass a card from the deck',
            function () {
                var previousLength = dealer.deck.cards.length;
                dealer.deal(player);
                expect(previousLength).to.be.above(dealer.deck.cards.length);
            });
        it('should know the number of cards dealt out of the deck', function () {
            dealer.deal(player);
            var cardsDealt = 52 - dealer.deck.cards.length ;
            expect(player.hand.length).to.be.equal(cardsDealt);
        });
    });

});