angular.module('starter.services', [])

.factory('User', function() {
    var user = {
      id : 0,
      name : ""
    };
    return {
      set : function(me) {
        user = me;
        return user;
      },
      get : function() {
        return user;
      },
      isLogin : function() {
        return user.id ? true : false;
      }
    };
})
.factory('Cards', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cards = [{
    id: 1,
    bank: 'Chase'
  }, {
    id: 2,
    bank: 'Amex(Membership Rewards)'
  }, {
    id: 3,
    bank: 'Capital One(Credit Cards)'
  }, {
    id: 4,
    bank: 'Citibank(Thank You Rewards)'
  }, {
    id: 5,
    bank: 'Barclaycard'
  }, {
    id: 6,
    bank: 'Discover Rewards'
  }];

  return {
    all: function() {
      return cards;
    },
    remove: function(card) {
        cards.splice(cards.indexOf(card), 1);
    },
    get: function(cardId) {
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].id === parseInt(cardId)) {
          return cards[i];
        }
      }
      return null;
    },
    add: function(card) {
      console.log(card);
    }
  };
})

/**
 * A simple example service that returns some data.
 */
.factory('MyCards', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var myCards = [{
    id: 1,
    aliasName   : "Chase Freedom",
    bankID      : 1,
    bankName    : "Chase",
    cardType    : "Credit",
    validDate   : "08/2019",
    point       : "2000",
    creditLimit : "5000",
    createTime  : "02/07/2015"
  }, {
    id: 1,
    aliasName   : "AMEX Costco",
    bankID      : 5,
    bankName    : "American Express",
    cardType    : "Credit",
    validDate   : "08/2017",
    point       : "3000",
    creditLimit : "2000",
    createTime  : "02/06/2015"
  }];


  return {
    all: function() {
      return myCards;
    },
    get: function(myCardId) {
      // Simple index lookup
      return myCards[myCardId];
    }
  };
});
