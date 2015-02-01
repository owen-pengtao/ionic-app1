angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('CardsCtrl', function($scope, Cards) {
  $scope.cards = Cards.all();
  $scope.remove = function(card) {
    Cards.remove(card);
  }
})

.controller('CardDetailCtrl', function($scope, $stateParams, Cards) {
  $scope.card = Cards.get($stateParams.cardId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
