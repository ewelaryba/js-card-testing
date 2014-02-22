/*jshint expr: true*/

var expect = require('chai').expect,
    Card = require('../card').Card;

describe('Card object tests', function () {
    var card;

    beforeEach(function () {
        card = new Card("Diamond", "King");
    });
    //
    describe('constructor', function () {
        it('card should be truthy (exists)', function () {
            expect(card).to.be.ok;
        });
        it('card should have suit property', function () {
            expect(card).to.have.property('getSuit');
        });
        it('card should have rank property', function () {
            expect(card).to.have.property('getRank');
        });
        it('card should have suit property "diamond"', function () {
            expect(card.getSuit()).to.equal('Diamond');
        });
        it('card should have rank property "king"', function () {
            expect(card.getRank()).to.equal('King');
        });
    });


    describe('constructor', function () {
        it('card should not change property from "king"', function () {
            card.rank = '8';
            expect(card.getRank()).to.equal('King');
        });
        it('card should not change property from "diamond"', function () {
            card.suit = 'heart';
            expect(card.getSuit()).to.equal('Diamond');
        });
    });


});


