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
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
