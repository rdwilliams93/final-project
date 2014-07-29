angular.module('starter', ['ionic', 'ionic.contrib.ui.cards'])

    .directive('noScroll', function ($document) {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attr) {
                $document.on('touchmove', function (e) {
                    e.preventDefault();
            });
       }};
    });


.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {
	var cardTypes = bardata; 
	$scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);
	$scope.cardSwiped = function(index) {
	$scope.addCard();
	};

	$scope.cardDestroyed = function(index) {
		$scope.cards.splice(index, 1);
	};

	$scope.addCard = function() {
		var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
		newCard.id = Math.random();
		$scope.cards.push(angular.extend({}, newCard));
	};
	})

	.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
	$scope.goAway = function() {
	var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
	card.swipe();
	};
});