/*jshint expr: true*/

var expect = require('chai').expect,
   Card = require('../card').Card,
   Player = require('../player').Player;

describe('Players', function () {
        'use strict';
        var player;

        beforeEach(function () {
            player = new Player();
        });
        describe('constructor', function () {
                it('card should be truthy (exists)', function () {
                    expect(player).to.be.ok;
                });
                it('should store cards', function () {
                    expect(player).to.have.property("hand");
                });
                it('should be able to add a card to the hand',
                function () {
                    var card = new Card("hearts", "king");
                    player.add(card);
                    expect(player.hand).to.have.length.above(0);
                });

            it('should know what card was added', function () {
                var card = new Card("hearts", "king");
                    player.add(card);
               expect(player.hand[0].getRank()).to.be.equal("king"); expect(player.hand[0].getSuit()).to.be.equal("hearts");
            });

        });

});