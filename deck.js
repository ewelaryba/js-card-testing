var Card = require('./card').Card;

exports.Deck = function () {
    var constructor = function () {
        this.cards = [];
        for (i = 0; i < 4; i++) {
            var suit = "";
            if (i === 0) {
                suit = "hearts";
            }
            if (i == 1) {
                suit = "diamonds";
            }
            if (i == 2) {
                suit = "spades";
            }
            if (i == 3) {
                suit = "clubs";
            }

            for (j = 0; j < 13; j++) {
                var rank = "";
                if (j===0){
                    rank = "ace";
                }
                if (j < 10 && j>1) {
                    rank = (j + 1).toString();
                }
                if (j == 10) {
                    rank = "jack";
                }
                if (j == 11) {
                    rank = "queen";
                }
                if (j == 12) {
                    rank = "king";
                }
                
                var card = new Card(suit, rank);
                this.cards.push(card);
            }
        }
    };

    return new constructor();


};