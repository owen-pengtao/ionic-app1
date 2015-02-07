angular.module('starter.controllers', ['starter.services'])

  .controller('HomeCtrl', function ($scope) {
    "use strict";
    $scope.isLogin = false;

    $scope.doLogin = function () {
    };
    $scope.fbLogin = function () {
      openFB.login(
        function (response) {
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
    $scope.fbLogout = function () {
      openFB.logout(
        function () {
          $scope.isLogin = false;
        });
    };
    $scope.getMe = function () {
      openFB.api({
        path: '/me',
        params: {fields: 'id,name'},
        success: function (user) {
          $scope.isLogin = true;
          $scope.$apply(function () {
            $scope.user = user;
          });
        }
      });
    };
    $scope.getMe();
  })

  .controller('CardsCtrl', function ($scope, Cards, $state) {
    $scope.cards = Cards.all();
    $scope.remove = function (card) {
      Cards.remove(card);
    };
    $scope.onTabSelected = function(){
      $state.go("tab.cards");
    };
  })

  .controller('CardDetailCtrl', function ($scope, $stateParams, Cards, $state, $ionicNavBarDelegate) {
    $scope.card = Cards.get($stateParams.cardId);
    $scope.myCard = {};

    $scope.addCard = function () {
      var _card = angular.extend($scope.card, $scope.myCard);
      Cards.add(_card);
      $ionicNavBarDelegate.back();
      $state.go("tab.friends");
    };
  })

  .controller('FriendsCtrl', function ($scope, Friends) {
    $scope.friends = Friends.all();
  })

  .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
