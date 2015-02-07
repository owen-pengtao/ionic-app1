angular.module('starter.controllers', ['starter.services'])

.controller('HomeCtrl', function($scope) {
    "use strict";
    $scope.isLogin = false;

    $scope.doLogin = function(){
    };
    $scope.fbLogin = function() {
      openFB.login(
        function(response) {
          if (response.status === 'connected') {
            console.log('Facebook login succeeded');
            $scope.isLogin = true;
            $scope.getMe();
          } else {
            alert('Facebook login failed');
          }
        },
        {scope: 'email,publish_actions'});
    };
    $scope.fbLogout = function() {
      openFB.logout(
        function() {
          $scope.isLogin = false;
        });
    };
    $scope.getMe = function() {
      openFB.api({
        path: '/me',
        params: {fields: 'id,name'},
        success: function(user) {
          $scope.isLogin = true;
          $scope.$apply(function() {
            $scope.user = user;
          });
        }
      });
    };
    $scope.getMe();
})

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
