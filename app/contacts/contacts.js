'use strict';

angular.module('myContacts.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsController'
  });
}])

.controller('ContactsController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase('https://mycontactsforangjsprojects.firebaseio.com/contacts')

  $scope.contacts = $firebaseArray(ref);
  // console.log($scope.contacts);

  $scope.showAddForm = function(){
    $scope.addFormShow = true;
    
  }
}]);
