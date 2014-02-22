var Card = require('./card').Card;
var Player = require('./player').Player;
var Deck = require('./deck').Deck;

exports.Dealer = function () {
    var constructor = function () {
        this.deck = new Deck();

    };
    constructor.prototype.deal = function (player) {
        var randomIndex = Math.floor(Math.random() * this.deck.cards.length) + 1;
        var randomCard = this.deck.cards[randomIndex];
        player.hand.push(randomCard);
        this.deck.cards.splice(randomIndex, 1);

    };



    return new constructor();
};