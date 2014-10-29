(function() {
  var app = angular.module('NotesApp');
  app.controller('NotesCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.errors = [];
    $scope.notes = [];

    $scope.index = function() {
      $http.get('/apiv1/notes')
        .success(function(data) {
          $scope.notes = data;
        })
        .error(function(data, status) {
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        });
    };

    $scope.create = function(note) {
      $http.post('/apiv1/notes', {note: note})
        .success(function(data) {
          $scope.notes.push(data);
        })
        .error(function(data, status) {
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        });
    };

    $scope.update = function(note) {
      $http({
        method: 'PATCH',
        url: '/apiv1/notes/' + note.id,
        data: note
      })
        .success(function() {
          note.editing = false;
        })
        .error(function(data, status) {
          $scope.errors += data;
          console.log(data);
          console.log(status);
        })
    };

    $scope.destroy = function(note) {
      $http({
        method: 'DELETE',
        url: '/apiv1/notes/' + note.id
      })
        .success(function() {
          note.deleteConfirm = false;
          $scope.notes.splice($scope.notes.indexOf(note), 1);
        })
        .error(function(data, status) {
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        });
    };
  }]);
})()
