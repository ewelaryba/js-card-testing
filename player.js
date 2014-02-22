exports.Player = function () {
    
    function constructor() {
        this.hand=[];
    } 
    constructor.prototype.add = function (card) {
        this.hand.push(card);
    };
    
constructor.prototype.countCards = function() {
    return this.hand.length;
  };
    return new constructor();

};